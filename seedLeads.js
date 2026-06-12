import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Lead from './models/Lead.js';

dotenv.config();

const demoLeads = [
  {
    name: 'Arjun Mehta',
    phone: '+91 9876543210',
    email: 'arjun.mehta@gmail.com',
    message: 'Interested in a 2BHK in Ambernath East. Budget around 45 lakhs.',
    interest: 'Buy',
    status: 'New',
  },
  {
    name: 'Priya Sharma',
    phone: '+91 8765432109',
    email: 'priya.sharma@yahoo.com',
    message: 'Looking for a 1BHK on rent near the railway station. Need it urgently.',
    interest: 'Rent',
    status: 'New',
  },
  {
    name: 'Rahul Patel',
    phone: '+91 7654321098',
    email: 'rahulpatel@outlook.com',
    message: 'Called back, asked about the 3BHK in Thane West. Site visit scheduled for Saturday.',
    interest: 'Buy',
    status: 'Contacted',
  },
  {
    name: 'Sunita Verma',
    phone: '+91 6543210987',
    email: '',
    message: 'Enquired about rental options in Kalyan. Followed up twice.',
    interest: 'Rent',
    status: 'Contacted',
  },
  {
    name: 'Deepak Nair',
    phone: '+91 9988776655',
    email: 'deepak.nair@gmail.com',
    message: 'Site visited. Discussing price for the 2BHK flat in Ambernath West. Expecting a 5% discount.',
    interest: 'Buy',
    status: 'Negotiation',
  },
  {
    name: 'Kavita Singh',
    phone: '+91 9090909090',
    email: 'kavita.singh@gmail.com',
    message: 'Very interested in the penthouse. Negotiating registration charges.',
    interest: 'Buy',
    status: 'Negotiation',
  },
  {
    name: 'Mike Johnson',
    phone: '+91 8080808080',
    email: 'mikejohnson@gmail.com',
    message: 'Deal finalised. Token amount paid for 2BHK in Ambernath East.',
    interest: 'Buy',
    status: 'Closed',
  },
  {
    name: 'Fatima Khan',
    phone: '+91 7070707070',
    email: 'fatima.k@gmail.com',
    message: 'Rental agreement signed. Moved into 1BHK flat in Ulhasnagar.',
    interest: 'Rent',
    status: 'Closed',
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB...');

    await Lead.deleteMany({});
    console.log('Cleared existing leads.');

    await Lead.insertMany(demoLeads);
    console.log(`✅ Inserted ${demoLeads.length} demo leads successfully!`);

    process.exit(0);
  } catch (err) {
    console.error('Error seeding leads:', err.message);
    process.exit(1);
  }
}

seed();
