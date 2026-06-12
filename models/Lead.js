import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  message: {
    type: String,
  },
  interest: {
    type: String,
    enum: ['Buy', 'Rent', 'General'],
    required: true,
  },
  status: {
    type: String,
    enum: ['New', 'Contacted', 'Negotiation', 'Closed'],
    default: 'New',
  },
  propertyId: {
    type: String,
    default: null,
  },
  propertyTitle: {
    type: String,
    default: null,
  },
}, {
  timestamps: true,
});

const Lead = mongoose.model('Lead', leadSchema);

export default Lead;
