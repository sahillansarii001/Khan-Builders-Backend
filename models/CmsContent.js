import mongoose from 'mongoose';

const CmsContentSchema = new mongoose.Schema({
  home: {
    heroTitle: { type: String, default: 'Find Your Dream Home With KHAN Builders' },
    heroSubtitle: { type: String, default: 'Discover premium properties for sale and rent in Ambernath and Thane. We build homes that echo your dreams.' },
    statsHappyFamilies: { type: String, default: '500+' },
    statsYearsExperience: { type: String, default: '15+' },
    statsProjectsDelivered: { type: String, default: '12+' },
    advantageTitle: { type: String, default: 'The KHAN Advantage' },
    advantageSubtitle: { type: String, default: 'We build more than just houses; we create holistic living environments where families thrive and memories are made.' },
    advantages: [{
      icon: { type: String, default: 'ShieldCheck' },
      title: { type: String },
      desc: { type: String }
    }],
    amenitiesTitle: { type: String, default: 'World-Class Amenities' },
    amenitiesSubtitle: { type: String, default: 'Our projects are designed to provide a resort-like lifestyle right at your doorstep. From fitness centers to lush green landscapes, we ensure every family member finds their perfect spot.' },
    amenities: [{
      icon: { type: String, default: 'Dumbbell' },
      text: { type: String }
    }],
    ctaTitle: { type: String, default: 'Ready to step into your dream home?' },
    ctaSubtitle: { type: String, default: 'Schedule a site visit today and experience luxury firsthand.' }
  },
  about: {
    heroTitle: { type: String, default: 'About KHAN Builders' },
    heroSubtitle: { type: String, default: 'Building dreams into reality with passion, precision, and unwavering integrity.' },
    heroImage: { type: String, default: 'https://images.unsplash.com/photo-1541885088529-2820c74b8862?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80' },
    journeySubtitle: { type: String, default: 'The Journey' },
    journeyTitle: { type: String, default: 'A Legacy of Trust & Excellence' },
    journeyImage: { type: String, default: 'https://images.unsplash.com/photo-1541885088529-2820c74b8862?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
    story: { type: String, default: 'Established over a decade ago, KHAN Builders and Developers has been at the forefront of real estate innovation in Ambernath and Thane. Our journey started with a simple vision: to provide affordable, high-quality housing to the masses.' },
    missionTitle: { type: String, default: 'Our Mission' },
    mission: { type: String, default: "To deliver high-quality, affordable housing solutions that exceed our customers' expectations." },
    visionTitle: { type: String, default: 'Our Vision' },
    vision: { type: String, default: 'To be the most trusted and respected real estate developer in Maharashtra, known for our integrity and design excellence.' },
    leadershipSubtitle: { type: String, default: 'Leadership' },
    leadershipTitle: { type: String, default: 'Meet Our Team' },
    team: [{
      name: { type: String },
      role: { type: String },
      img: { type: String }
    }]
  },
  propertiesSale: {
    title: { type: String, default: 'Properties for Sale' },
    subtitle: { type: String, default: 'Explore our premium listings available for outright purchase.' }
  },
  propertiesRent: {
    title: { type: String, default: 'Properties for Rent' },
    subtitle: { type: String, default: 'Find your perfect rental home with our curated list of properties.' }
  },
  gallery: {
    title: { type: String, default: 'Our Project Gallery' },
    subtitle: { type: String, default: 'Take a visual tour of our completed and ongoing projects.' },
    images: [{
      url: { type: String },
      project: { type: String },
      category: { type: String }
    }]
  },
  contact: {
    title: { type: String, default: 'Get In Touch' },
    subtitle: { type: String, default: 'We would love to hear from you. Reach out to us for any inquiries.' },
    officeHours: { type: String, default: 'Mon - Sat: 10:00 AM - 7:00 PM' },
    address: { type: String, default: 'Shop No 1, Main Road, Ambernath (W), Maharashtra 421501' },
    phones: [{ type: String }],
    emails: [{ type: String }]
  },
  faqs: [{
    question: { type: String, required: true },
    answer: { type: String, required: true }
  }],
  testimonials: [{
    name: { type: String, required: true },
    review: { type: String, required: true },
    role: { type: String, default: 'Happy Homeowner' }
  }]
}, {
  timestamps: true
});

const CmsContent = mongoose.models.CmsContent || mongoose.model('CmsContent', CmsContentSchema);
export default CmsContent;
