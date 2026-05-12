const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema(
  {
    memberId: {
      type: String,
      unique: true,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    email: String,
    phone: String,
    address: String,
    registrationDate: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ['Actif', 'Inactif', 'En attente'],
      default: 'En attente',
    },
    totalPaid: {
      type: Number,
      default: 0,
    },
    notes: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Member', memberSchema);
