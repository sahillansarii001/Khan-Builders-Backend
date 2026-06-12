import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Gallery from './models/Gallery.js';

dotenv.config();

const demoImages = [
  { imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800', projectName: 'Khan Residency', category: 'Exteriors', featured: true },
  { imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800', projectName: 'Thane Premium', category: 'Exteriors', featured: true },
  { imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1e5250ce07?w=800', projectName: 'Khan Residency', category: 'Interiors', featured: false },
  { imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800', projectName: 'Ambernath Heights', category: 'Interiors', featured: false },
  { imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800', projectName: 'Khan Residency', category: 'Interiors', featured: false },
  { imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800', projectName: 'Thane Premium Gym', category: 'Amenities', featured: false },
  { imageUrl: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800', projectName: 'Swimming Pool Area', category: 'Amenities', featured: true },
  { imageUrl: 'https://images.unsplash.com/photo-1600607687931-cebf0046d48e?w=800', projectName: 'Garden & Landscape', category: 'Amenities', featured: false },
  { imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800', projectName: 'Upcoming Tower A', category: 'Ongoing Projects', featured: false },
  { imageUrl: 'https://images.unsplash.com/photo-1541885088529-2820c74b8862?w=800', projectName: 'Upcoming Tower B', category: 'Ongoing Projects', featured: false },
  { imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800', projectName: 'Commercial Wing', category: 'Exteriors', featured: false },
  { imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800', projectName: 'Model Flat 2BHK', category: 'Interiors', featured: false },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB...');
    await Gallery.deleteMany({});
    console.log('Cleared existing gallery images.');
    await Gallery.insertMany(demoImages);
    console.log(`✅ Inserted ${demoImages.length} demo gallery images!`);
    process.exit(0);
  } catch (err) {
    console.error('Error seeding:', err.message);
    process.exit(1);
  }
}

seed();
