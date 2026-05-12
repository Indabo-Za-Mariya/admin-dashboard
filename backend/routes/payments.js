const express = require('express');
const router = express.Router();
const Payment = require('../models/Payment');
const Member = require('../models/Member');
const auth = require('../middleware/auth');

// Get all payments
router.get('/', auth, async (req, res) => {
  try {
    const payments = await Payment.find()
      .populate('memberId')
      .populate('eventId')
      .sort({ paymentDate: -1 });
    res.json(payments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get payment by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id).populate('memberId').populate('eventId');
    if (!payment) {
      return res.status(404).json({ error: 'Payment not found' });
    }
    res.json(payment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create payment
router.post('/', auth, async (req, res) => {
  try {
    const { memberId, type, amount, method, referenceNumber, eventId, notes } = req.body;

    const paymentCount = await Payment.countDocuments();
    const paymentId = `PAY-${String(paymentCount + 1).padStart(5, '0')}`;

    const payment = new Payment({
      paymentId,
      memberId,
      type,
      amount,
      method,
      referenceNumber,
      eventId: eventId || null,
      status: 'En attente',
      notes,
    });

    await payment.save();

    // Update member's total paid
    const member = await Member.findById(memberId);
    if (member) {
      member.totalPaid += amount;
      await member.save();
    }

    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Confirm payment
router.put('/:id/confirm', auth, async (req, res) => {
  try {
    const payment = await Payment.findByIdAndUpdate(req.params.id, { status: 'Payé' }, { new: true });
    if (!payment) {
      return res.status(404).json({ error: 'Payment not found' });
    }
    res.json(payment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Reject payment
router.put('/:id/reject', auth, async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);
    if (!payment) {
      return res.status(404).json({ error: 'Payment not found' });
    }

    // Revert member's total paid
    const member = await Member.findById(payment.memberId);
    if (member) {
      member.totalPaid -= payment.amount;
      await member.save();
    }

    payment.status = 'Rejeté';
    await payment.save();

    res.json(payment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
