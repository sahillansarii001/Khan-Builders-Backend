import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const protect = async (req, res, next) => {
  let token;

  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.userId).select('-password');

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  } else {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
};

const admin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403);
    throw new Error('Not authorized as an admin');
  }
};

const propertyManager = (req, res, next) => {
  if (req.user && (req.user.role === 'admin' || req.user.role === 'property-manager')) {
    next();
  } else {
    res.status(403);
    throw new Error('Not authorized for property management');
  }
};

const leadManager = (req, res, next) => {
  if (req.user && (req.user.role === 'admin' || req.user.role === 'lead-manager')) {
    next();
  } else {
    res.status(403);
    throw new Error('Not authorized for lead management');
  }
};

const galleryManager = (req, res, next) => {
  if (req.user && (req.user.role === 'admin' || req.user.role === 'gallery-manager')) {
    next();
  } else {
    res.status(403);
    throw new Error('Not authorized for gallery management');
  }
};

export { protect, admin, propertyManager, leadManager, galleryManager };
