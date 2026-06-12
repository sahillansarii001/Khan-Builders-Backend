import Testimonial from '../models/Testimonial.js';

// @desc    Get all approved testimonials
// @route   GET /api/testimonials
// @access  Public
const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find({ approved: true }).sort({ createdAt: -1 });
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all testimonials (including unapproved)
// @route   GET /api/testimonials/all
// @access  Private/Lead Manager or Admin
const getAllTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find({}).sort({ createdAt: -1 });
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a testimonial
// @route   POST /api/testimonials
// @access  Public (needs approval) or Private (auto-approved if created by admin)
const createTestimonial = async (req, res) => {
  try {
    const { customerName, review, rating, photo, approved } = req.body;
    
    const testimonial = new Testimonial({
      customerName,
      review,
      rating: rating || 5,
      photo: photo || '',
      approved: approved !== undefined ? approved : true, // default auto-approve from admin
    });

    const createdTestimonial = await testimonial.save();
    res.status(201).json(createdTestimonial);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update a testimonial (e.g., approve)
// @route   PUT /api/testimonials/:id
// @access  Private/Lead Manager or Admin
const updateTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);

    if (testimonial) {
      Object.assign(testimonial, req.body);
      const updatedTestimonial = await testimonial.save();
      res.json(updatedTestimonial);
    } else {
      res.status(404);
      throw new Error('Testimonial not found');
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a testimonial
// @route   DELETE /api/testimonials/:id
// @access  Private/Lead Manager or Admin
const deleteTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);

    if (testimonial) {
      await Testimonial.deleteOne({ _id: testimonial._id });
      res.json({ message: 'Testimonial removed' });
    } else {
      res.status(404);
      throw new Error('Testimonial not found');
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getTestimonials, getAllTestimonials, createTestimonial, updateTestimonial, deleteTestimonial };
