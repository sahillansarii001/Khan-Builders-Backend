import mongoose from 'mongoose';

const settingsSchema = new mongoose.Schema({
  whatsappNumber: { type: String, default: '+910000000000' },
  googleMapsLink: { type: String, default: 'https://maps.google.com' },
  address: { type: String, default: 'Ambernath & Thane, Maharashtra, India' },
  phone: { type: String, default: '+910000000000' },
  email: { type: String, default: 'info@khanbuilders.com' },
  // Social
  facebookLink: { type: String, default: 'https://facebook.com/khanbuilders' },
  instagramLink: { type: String, default: 'https://instagram.com/khanbuilders' },
  twitterLink: { type: String, default: 'https://twitter.com/khanbuilders' },
  youtubeLink: { type: String, default: 'https://youtube.com/c/khanbuilders' },
  // SEO
  siteTitle: { type: String, default: 'Khan Builders | Premium Real Estate' },
  siteDescription: { type: String, default: 'Building premium homes in Ambernath & Thane.' },
  metaKeywords: { type: String, default: 'real estate, homes, ambernath, thane, builders' },
  // Branding
  logoUrl: { type: String, default: '' },
  footerText: { type: String, default: 'Made by Ahmed khan All rights reserved.' },
}, {
  timestamps: true,
});

const Settings = mongoose.model('Settings', settingsSchema);

export default Settings;
