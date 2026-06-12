import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import CmsContent from './models/CmsContent.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

async function migrateTestimonials() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    const defaultTestimonials = [
      { name: 'Rahul Sharma', review: 'The build quality is exceptional. They delivered exactly what they promised, on time. Highly recommended!', role: 'Happy Homeowner' },
      { name: 'Priya Desai', review: 'From the first inquiry to the handover, the team was incredibly supportive. We love our new flat in Thane.', role: 'Happy Homeowner' },
      { name: 'Amit Patel', review: 'Transparent pricing and zero hidden costs. KHAN Builders made buying our first home a breeze.', role: 'Happy Homeowner' }
    ];

    const result = await CmsContent.updateOne({}, {
      $set: { "testimonials": defaultTestimonials }
    });

    console.log('Migration successful:', result);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

migrateTestimonials();
