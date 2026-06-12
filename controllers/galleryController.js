import Gallery from '../models/Gallery.js';

const getGalleryImages = async (req, res) => {
  try {
    const images = await Gallery.find({}).sort({ createdAt: -1 });
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addGalleryImage = async (req, res) => {
  try {
    const { imageUrl, projectName, category, featured, cloudinaryId } = req.body;
    const galleryImage = new Gallery({
      imageUrl,
      projectName,
      category: category || 'Exteriors',
      featured: featured || false,
      cloudinaryId: cloudinaryId || '',
    });
    const createdImage = await galleryImage.save();
    res.status(201).json(createdImage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateGalleryImage = async (req, res) => {
  try {
    const image = await Gallery.findById(req.params.id);
    if (image) {
      Object.assign(image, req.body);
      const updated = await image.save();
      res.json(updated);
    } else {
      res.status(404).json({ message: 'Image not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteGalleryImage = async (req, res) => {
  try {
    const image = await Gallery.findById(req.params.id);
    if (image) {
      await Gallery.deleteOne({ _id: image._id });
      res.json({ message: 'Image removed' });
    } else {
      res.status(404).json({ message: 'Image not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getGalleryImages, addGalleryImage, updateGalleryImage, deleteGalleryImage };
