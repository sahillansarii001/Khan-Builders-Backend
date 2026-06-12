import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import CmsContent from './models/CmsContent.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

async function updateSubtitle() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    await CmsContent.updateOne({}, {
      $set: { "home.heroSubtitle": "Discover premium properties for sale and rent in Ambernath and Thane." }
    });

    console.log('Hero subtitle updated successfully!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

updateSubtitle();
