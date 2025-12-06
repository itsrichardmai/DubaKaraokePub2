const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// In-memory storage (replace with database in production)
let reservations = [];
let galleryItems = [];

// Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Dub a 2 API is running' });
});

// Reservation routes
app.post('/api/reservations', (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      date,
      time,
      partySize,
      service,
      specialRequests
    } = req.body;

    // Validation
    if (!name || !phone || !email || !date || !time || !partySize) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields'
      });
    }

    // Create reservation
    const reservation = {
      id: Date.now().toString(),
      name,
      phone,
      email,
      date,
      time,
      partySize,
      service: service || 'Dining Only',
      specialRequests: specialRequests || '',
      status: 'pending',
      createdAt: new Date().toISOString(),
      depositRequired: parseInt(partySize) > 8,
      depositAmount: parseInt(partySize) > 8 ? 50 : 0
    };

    reservations.push(reservation);

    // TODO: Send confirmation email
    // TODO: Send SMS confirmation
    // TODO: Process deposit if required

    res.status(201).json({
      success: true,
      message: 'Reservation request received! We will contact you shortly to confirm.',
      reservation: {
        id: reservation.id,
        depositRequired: reservation.depositRequired,
        depositAmount: reservation.depositAmount
      }
    });
  } catch (error) {
    console.error('Reservation error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to process reservation. Please try again.'
    });
  }
});

// Get all reservations (admin only - add authentication in production)
app.get('/api/reservations', (req, res) => {
  try {
    res.json({
      success: true,
      reservations: reservations
    });
  } catch (error) {
    console.error('Error fetching reservations:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch reservations'
    });
  }
});

// Get single reservation
app.get('/api/reservations/:id', (req, res) => {
  try {
    const reservation = reservations.find(r => r.id === req.params.id);
    
    if (!reservation) {
      return res.status(404).json({
        success: false,
        message: 'Reservation not found'
      });
    }

    res.json({
      success: true,
      reservation
    });
  } catch (error) {
    console.error('Error fetching reservation:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch reservation'
    });
  }
});

// Update reservation status
app.patch('/api/reservations/:id', (req, res) => {
  try {
    const { status } = req.body;
    const index = reservations.findIndex(r => r.id === req.params.id);
    
    if (index === -1) {
      return res.status(404).json({
        success: false,
        message: 'Reservation not found'
      });
    }

    reservations[index] = {
      ...reservations[index],
      status,
      updatedAt: new Date().toISOString()
    };

    res.json({
      success: true,
      message: 'Reservation updated successfully',
      reservation: reservations[index]
    });
  } catch (error) {
    console.error('Error updating reservation:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update reservation'
    });
  }
});

// Delete reservation
app.delete('/api/reservations/:id', (req, res) => {
  try {
    const index = reservations.findIndex(r => r.id === req.params.id);
    
    if (index === -1) {
      return res.status(404).json({
        success: false,
        message: 'Reservation not found'
      });
    }

    reservations.splice(index, 1);

    res.json({
      success: true,
      message: 'Reservation deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting reservation:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete reservation'
    });
  }
});

// Gallery routes
app.get('/api/gallery', (req, res) => {
  try {
    res.json({
      success: true,
      items: galleryItems
    });
  } catch (error) {
    console.error('Error fetching gallery:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch gallery items'
    });
  }
});

app.post('/api/gallery', (req, res) => {
  try {
    const { type, url, title } = req.body;

    if (!type || !url || !title) {
      return res.status(400).json({
        success: false,
        message: 'Please provide type, url, and title'
      });
    }

    const item = {
      id: Date.now().toString(),
      type,
      url,
      title,
      createdAt: new Date().toISOString()
    };

    galleryItems.push(item);

    res.status(201).json({
      success: true,
      message: 'Gallery item added successfully',
      item
    });
  } catch (error) {
    console.error('Error adding gallery item:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to add gallery item'
    });
  }
});

app.delete('/api/gallery/:id', (req, res) => {
  try {
    const index = galleryItems.findIndex(item => item.id === req.params.id);
    
    if (index === -1) {
      return res.status(404).json({
        success: false,
        message: 'Gallery item not found'
      });
    }

    galleryItems.splice(index, 1);

    res.json({
      success: true,
      message: 'Gallery item deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting gallery item:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete gallery item'
    });
  }
});

// Contact form submission
app.post('/api/contact', (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // TODO: Send email to restaurant
    // TODO: Store in database
    // TODO: Send auto-reply to customer

    res.json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.'
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again.'
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Dub a 2 API Server running on port ${PORT}`);
  console.log(`📡 API available at http://localhost:${PORT}/api`);
});

module.exports = app;
