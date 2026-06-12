import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['sale', 'rent'],
    required: true,
  },
  bhk: {
    type: String,
    required: true, // e.g., '1BHK', '2BHK', '3BHK'
  },
  price: {
    type: Number,
    required: true,
  },
  area: {
    type: String,
    required: true, // e.g., '1000 sq ft'
  },
  description: {
    type: String,
    required: true,
  },
  amenities: [String],
  images: [String], // Array of Cloudinary image URLs
  status: {
    type: String,
    enum: ['Available', 'Sold', 'Rented'],
    default: 'Available',
  },
  location: {
    type: String, // Ambernath or Thane, etc.
    required: true,
  },
}, {
  timestamps: true,
});

const Property = mongoose.model('Property', propertySchema);

export default Property;
