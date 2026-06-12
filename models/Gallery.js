import mongoose from 'mongoose';

const gallerySchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  projectName: { type: String, required: true },
  category: {
    type: String,
    enum: ['Exteriors', 'Interiors', 'Amenities', 'Ongoing Projects'],
    default: 'Exteriors',
  },
  featured: { type: Boolean, default: false },
  cloudinaryId: { type: String, default: '' },
}, {
  timestamps: true,
});

const Gallery = mongoose.model('Gallery', gallerySchema);

export default Gallery;
