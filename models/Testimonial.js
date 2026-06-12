import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
    default: 5,
  },
  photo: {
    type: String, // URL
  },
  approved: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

export default Testimonial;
