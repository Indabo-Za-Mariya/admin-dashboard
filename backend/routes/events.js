const express = require('express');
const router = express.Router();
const Event = require('../models/Event');
const auth = require('../middleware/auth');

// Get all events
router.get('/', auth, async (req, res) => {
  try {
    const events = await Event.find().sort({ startDate: 1 });
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get event by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const event = await Event.findById(req.params.id).populate('registeredMembers');
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create event
router.post('/', auth, async (req, res) => {
  try {
    const { name, description, destination, startDate, capacity, ticketPrice, status } = req.body;

    const eventCount = await Event.countDocuments();
    const year = new Date().getFullYear();
    const eventId = `EVT-${year}-${String(eventCount + 1).padStart(3, '0')}`;

    const event = new Event({
      eventId,
      name,
      description,
      destination,
      startDate,
      capacity,
      ticketPrice,
      status: status || 'Ouvert',
    });

    await event.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update event
router.put('/:id', auth, async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Register member to event
router.post('/:id/register/:memberId', auth, async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }

    if (event.registeredMembers.includes(req.params.memberId)) {
      return res.status(400).json({ error: 'Member already registered' });
    }

    if (event.registeredCount >= event.capacity) {
      return res.status(400).json({ error: 'Event is full' });
    }

    event.registeredMembers.push(req.params.memberId);
    event.registeredCount += 1;
    await event.save();

    res.json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
