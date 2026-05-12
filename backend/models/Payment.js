const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema(
  {
    paymentId: {
      type: String,
      unique: true,
      required: true,
    },
    memberId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Member',
      required: true,
    },
    type: {
      type: String,
      enum: ['Cotisation', 'Pèlerinage', 'Offrande'],
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    paymentDate: {
      type: Date,
      default: Date.now,
    },
    method: {
      type: String,
      enum: ['Espèces', 'Virement Bancaire', 'Mobile Money'],
      required: true,
    },
    referenceNumber: String,
    eventId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Event',
    },
    status: {
      type: String,
      enum: ['Payé', 'En attente', 'Rejeté'],
      default: 'En attente',
    },
    notes: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Payment', paymentSchema);
