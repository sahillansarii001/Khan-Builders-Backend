import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Property from './models/Property.js';

dotenv.config();

async function test() {
  await mongoose.connect(process.env.MONGODB_URI);
  const prop = await Property.findOne();
  console.log('Found:', prop);
  prop.status = 'Available';
  try {
    await prop.save();
    console.log('Saved successfully');
  } catch(err) {
    console.error('Save Error:', err.message);
  }
  process.exit(0);
}
test();
