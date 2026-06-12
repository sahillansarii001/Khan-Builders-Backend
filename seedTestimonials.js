import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Testimonial from './models/Testimonial.js';

dotenv.config();

const demoTestimonials = [
  {
    customerName: 'Arjun Mehta',
    review: 'Khan Builders made my dream of owning a home a reality! The entire process was smooth, transparent, and the team was incredibly helpful at every step. Highly recommend them to anyone looking for a trustworthy builder in Ambernath.',
    rating: 5,
    photo: 'https://i.pravatar.cc/150?img=11',
    approved: true,
  },
  {
    customerName: 'Priya Sharma',
    review: 'We rented a 2BHK through Khan Builders and the experience was fantastic. The flat was exactly as described, the locality is great, and the paperwork was done efficiently. Will definitely contact them again.',
    rating: 5,
    photo: 'https://i.pravatar.cc/150?img=47',
    approved: true,
  },
  {
    customerName: 'Rajesh Nair',
    review: 'Very professional team. They helped us with our home loan formalities and made sure we got a good deal. The property valuation was fair and the location in Thane West is excellent.',
    rating: 4,
    photo: 'https://i.pravatar.cc/150?img=68',
    approved: true,
  },
  {
    customerName: 'Sunita Patel',
    review: 'I was hesitant to invest in real estate but Khan Builders gave me the confidence. Their RERA-registered projects and zero hidden charges policy made all the difference. Excellent service!',
    rating: 5,
    photo: 'https://i.pravatar.cc/150?img=49',
    approved: true,
  },
  {
    customerName: 'Deepak Kumar',
    review: 'Good experience overall. The team is responsive and answered all my queries patiently. The flat is well-constructed with quality materials. Only minor delay in possession but they kept us informed throughout.',
    rating: 4,
    photo: 'https://i.pravatar.cc/150?img=33',
    approved: true,
  },
  {
    customerName: 'Meera Joshi',
    review: 'Outstanding customer service! From site visits to final documentation, everything was handled professionally. Our 3BHK in Ambernath East is exactly what we wanted. Thank you Khan Builders!',
    rating: 5,
    photo: 'https://i.pravatar.cc/150?img=41',
    approved: false, // pending approval to demo the feature
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB...');
    await Testimonial.deleteMany({});
    console.log('Cleared existing testimonials.');
    await Testimonial.insertMany(demoTestimonials);
    console.log(`✅ Inserted ${demoTestimonials.length} demo testimonials!`);
    process.exit(0);
  } catch (err) {
    console.error('Error seeding:', err.message);
    process.exit(1);
  }
}

seed();
