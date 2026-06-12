import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

const CmsContentSchema = new mongoose.Schema({
  home: {
    heroTitle: String,
    heroSubtitle: String,
    statsHappyFamilies: String,
    statsYearsExperience: String,
    statsProjectsDelivered: String,
    advantageTitle: String,
    advantageSubtitle: String,
    advantages: [{
      icon: String,
      title: String,
      desc: String
    }],
    amenitiesTitle: String,
    amenitiesSubtitle: String,
    amenities: [{
      icon: String,
      text: String
    }],
    ctaTitle: String,
    ctaSubtitle: String
  },
  about: {
    story: String,
    mission: String,
    vision: String
  },
  propertiesSale: {
    title: String,
    subtitle: String
  },
  propertiesRent: {
    title: String,
    subtitle: String
  },
  gallery: {
    title: String,
    subtitle: String
  },
  contact: {
    title: String,
    subtitle: String,
    officeHours: String
  },
  faqs: [{
    question: String,
    answer: String
  }]
}, { timestamps: true });

const CmsContent = mongoose.models.CmsContent || mongoose.model('CmsContent', CmsContentSchema);

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    const defaultContent = {
      home: {
        heroTitle: 'Dream Home With KHAN Builders',
        heroSubtitle: 'Discover premium properties for sale and rent in Ambernath and Thane.',
        statsHappyFamilies: '500+',
        statsYearsExperience: '15+',
        statsProjectsDelivered: '12+',
        advantageTitle: 'The KHAN Advantage',
        advantageSubtitle: 'We build more than just houses; we create holistic living environments where families thrive and memories are made.',
        advantages: [
          { icon: 'ShieldCheck', title: 'Trusted Quality', desc: 'Premium grade materials and superior construction standards that stand the test of time.' },
          { icon: 'MapPin', title: 'Prime Locations', desc: 'Strategically located projects with excellent connectivity in Ambernath & Thane.' },
          { icon: 'Key', title: 'Affordable Luxury', desc: 'Experience best-in-class amenities at highly competitive and transparent prices.' },
          { icon: 'PhoneCall', title: '24/7 Support', desc: 'Dedicated customer service guiding you through every step of your home buying journey.' }
        ],
        amenitiesTitle: 'World-Class Amenities',
        amenitiesSubtitle: 'Our projects are designed to provide a resort-like lifestyle right at your doorstep. From fitness centers to lush green landscapes, we ensure every family member finds their perfect spot.',
        amenities: [
          { icon: 'Dumbbell', text: 'Modern Gymnasium' },
          { icon: 'Droplets', text: 'Swimming Pool' },
          { icon: 'TreePine', text: 'Landscaped Gardens' },
          { icon: 'ShieldCheck', text: '24/7 CCTV Security' }
        ],
        ctaTitle: 'Ready to step into your dream home?',
        ctaSubtitle: 'Schedule a site visit today and experience luxury firsthand.'
      },
      about: {
        story: 'Established over a decade ago, KHAN Builders and Developers has been at the forefront of real estate innovation in Ambernath and Thane. Our journey started with a simple vision: to provide affordable, high-quality housing to the masses. Today, we are proud to have delivered numerous landmark projects that stand as a testament to our commitment to quality, transparency, and customer satisfaction.\n\nFrom modest beginnings to becoming a trusted name in the industry, our growth has been fueled by our unwavering focus on customer-centric design and sustainable construction practices.',
        mission: 'To deliver high-quality, affordable housing solutions that exceed our customers\' expectations. We strive to create sustainable communities that enhance the quality of life for our residents while providing exceptional value to our stakeholders.',
        vision: 'To be the most trusted and respected real estate developer in Maharashtra, known for our integrity, design excellence, and commitment to sustainable urban development. We aim to shape the skyline of tomorrow while preserving the environment for future generations.'
      },
      propertiesSale: {
        title: 'Properties for Sale',
        subtitle: 'Explore our premium listings available for outright purchase. Find the perfect home that matches your lifestyle and budget.'
      },
      propertiesRent: {
        title: 'Properties for Rent',
        subtitle: 'Find your perfect rental home with our curated list of properties. Experience comfort and convenience in prime locations.'
      },
      gallery: {
        title: 'Our Project Gallery',
        subtitle: 'Take a visual tour of our completed and ongoing projects. Witness the craftsmanship and attention to detail that define KHAN Builders.'
      },
      contact: {
        title: 'Get In Touch',
        subtitle: 'We would love to hear from you. Reach out to us for any inquiries, site visits, or general information. Our team is here to help.',
        officeHours: 'Mon - Sat: 10:00 AM - 7:00 PM'
      },
      faqs: [
        { question: "What is the booking amount for a new flat?", answer: "The booking amount varies by project but is typically 5% to 10% of the total property value. Please contact our sales team for project-specific details." },
        { question: "Do you help with home loans?", answer: "Yes, we have tie-ups with major nationalized and private banks including SBI, HDFC, and ICICI to assist you in securing a home loan at competitive interest rates with minimal hassle." },
        { question: "Are your projects RERA registered?", answer: "Absolutely. All our ongoing projects are strictly RERA compliant and registered. We maintain complete transparency in all our dealings." },
        { question: "Can non-resident Indians (NRIs) buy property?", answer: "Yes, NRIs can easily purchase residential properties with us. Our dedicated team provides end-to-end assistance with the legal documentation and payment processes." }
      ],
      testimonials: [
        { name: 'Rahul Sharma', review: 'The build quality is exceptional. They delivered exactly what they promised, on time. Highly recommended!', role: 'Happy Homeowner' },
        { name: 'Priya Desai', review: 'From the first inquiry to the handover, the team was incredibly supportive. We love our new flat in Thane.', role: 'Happy Homeowner' },
        { name: 'Amit Patel', review: 'Transparent pricing and zero hidden costs. KHAN Builders made buying our first home a breeze.', role: 'Happy Homeowner' }
      ]
    };

    let content = await CmsContent.findOne();
    if (!content) {
      content = new CmsContent(defaultContent);
      await content.save();
    } else {
      await CmsContent.findOneAndUpdate({}, defaultContent, { new: true, overwrite: true });
    }

    console.log('CMS seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
