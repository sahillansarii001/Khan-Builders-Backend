import Property from '../models/Property.js';

// @desc    Get all properties
// @route   GET /api/properties
// @access  Public
const getProperties = async (req, res) => {
  try {
    const properties = await Property.find({}).sort({ createdAt: -1 });
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get property by ID
// @route   GET /api/properties/:id
// @access  Public
const getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);

    if (property) {
      res.json(property);
    } else {
      res.status(404);
      throw new Error('Property not found');
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a property
// @route   POST /api/properties
// @access  Private/Property Manager or Admin
const createProperty = async (req, res) => {
  try {
    const property = new Property(req.body);
    const createdProperty = await property.save();
    res.status(201).json(createdProperty);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update a property
// @route   PUT /api/properties/:id
// @access  Private/Property Manager or Admin
const updateProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);

    if (property) {
      Object.assign(property, req.body);
      const updatedProperty = await property.save();
      res.json(updatedProperty);
    } else {
      res.status(404);
      throw new Error('Property not found');
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a property
// @route   DELETE /api/properties/:id
// @access  Private/Property Manager or Admin
const deleteProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);

    if (property) {
      await Property.deleteOne({ _id: property._id });
      res.json({ message: 'Property removed' });
    } else {
      res.status(404);
      throw new Error('Property not found');
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getProperties, getPropertyById, createProperty, updateProperty, deleteProperty };
