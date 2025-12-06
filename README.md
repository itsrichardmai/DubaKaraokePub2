# Dub a 2 - Korean BBQ & Karaoke Lounge Website

A modern, elegant single-page React application for Dub a 2 Korean BBQ & Karaoke Lounge featuring:
- Responsive design with black theme and yellow accents
- Smooth scrolling navigation
- Dynamic menu system (easily updatable)
- Interactive gallery with image/video support
- Reservation system with backend API
- Elfsight reviews integration
- Awards & recognitions section
- Contact information with Google Maps

## 🚀 Tech Stack

- **Frontend:** React 18, Tailwind CSS, Lucide Icons
- **Backend:** Node.js, Express
- **Build Tool:** Vite
- **Styling:** Tailwind CSS with custom theme

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` with your actual values.

3. **Start development server:**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:3000`

4. **Start backend API (in a separate terminal):**
   ```bash
   npm start
   ```
   The API will run at `http://localhost:5000`

## 📁 Project Structure

```
dub-a-2-lounge/
├── src/
│   ├── App.jsx              # Main React component
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles + Tailwind
├── public/                  # Static assets
├── server.js                # Express API server
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
└── postcss.config.js        # PostCSS configuration
```

## 🎨 Customization Guide

### Updating Menu Items

Edit the `menuData` object in `src/App.jsx`:

```javascript
const menuData = {
  appetizers: [
    { name: 'Item Name', price: '$10', description: 'Description here' },
    // Add more items...
  ],
  // ... other categories
};
```

### Updating Contact Information

Edit the `contactInfo` object in `src/App.jsx`:

```javascript
const contactInfo = {
  phone: '(555) 123-4567',
  email: 'info@duba2lounge.com',
  address: '123 K-Town Ave, Los Angeles, CA 90010',
  hours: {
    'Monday - Thursday': '5:00 PM - 2:00 AM',
    // ... more days
  },
};
```

### Updating Karaoke Room Prices

Edit the `karaokeRooms` array in `src/App.jsx`:

```javascript
const karaokeRooms = [
  { 
    name: 'Small Room', 
    capacity: '2-6 people', 
    hourly: '$30', 
    description: 'Cozy space for small groups' 
  },
  // ... more rooms
];
```

### Adding Gallery Items

Use the API endpoint or edit `galleryItems` in `src/App.jsx`:

```javascript
const [galleryItems, setGalleryItems] = useState([
  { type: 'image', url: 'image-url', title: 'Title' },
  { type: 'video', url: 'video-url', title: 'Video Title' },
]);
```

### Integrating Elfsight Reviews Widget

1. Get your Elfsight widget code from elfsight.com
2. In `src/App.jsx`, find the reviews section (line ~370)
3. Replace the placeholder with your actual widget code:

```jsx
<div className="elfsight-app-YOUR-WIDGET-ID"></div>
```

### Adding Google Maps

1. Get a Google Maps API key
2. Add to `.env` file: `GOOGLE_MAPS_API_KEY=your_key_here`
3. Replace the map placeholder in the Contact section with:

```jsx
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
></iframe>
```

## 🔌 API Endpoints

### Reservations

- `POST /api/reservations` - Create new reservation
- `GET /api/reservations` - Get all reservations (admin)
- `GET /api/reservations/:id` - Get single reservation
- `PATCH /api/reservations/:id` - Update reservation status
- `DELETE /api/reservations/:id` - Delete reservation

### Gallery

- `GET /api/gallery` - Get all gallery items
- `POST /api/gallery` - Add new gallery item
- `DELETE /api/gallery/:id` - Delete gallery item

### Contact

- `POST /api/contact` - Submit contact form

## 📱 Features

### Reservation System
- Form validation
- Automatic deposit calculation for large groups
- Email/SMS confirmation (when configured)
- Admin dashboard for managing reservations

### Dynamic Gallery
- Support for images and videos
- Carousel navigation
- Thumbnail grid view
- Easy content management

### Menu Management
- Organized by categories
- Easy price updates
- Korean translations included
- Responsive layout

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Deploy to Vercel (Recommended)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Environment Variables for Production

Make sure to set all environment variables in your hosting platform:
- Email configuration
- SMS configuration (optional)
- Payment processing keys
- Admin credentials

## 🔒 Security Notes

⚠️ **Important for Production:**

1. **Add Authentication** to admin routes
2. **Implement Rate Limiting** for API endpoints
3. **Use HTTPS** in production
4. **Sanitize User Inputs** to prevent XSS attacks
5. **Store Passwords Securely** (use bcrypt)
6. **Add CSRF Protection** for forms
7. **Use Environment Variables** for all sensitive data
8. **Set up Database** (replace in-memory storage)

## 💳 Adding Payment Processing

To add deposit payment functionality:

1. Sign up for Stripe account
2. Add Stripe keys to `.env`
3. Install Stripe: `npm install @stripe/stripe-js @stripe/react-stripe-js`
4. Implement payment flow in reservation form
5. Update server.js with Stripe payment intent creation

## 📧 Email Configuration

To enable email confirmations:

1. Use Gmail App Password or SMTP service
2. Update `.env` with credentials
3. Install nodemailer: `npm install nodemailer`
4. Implement email sending in server.js

## 📞 SMS Configuration (Optional)

To enable SMS confirmations:

1. Sign up for Twilio account
2. Add credentials to `.env`
3. Install Twilio: `npm install twilio`
4. Implement SMS sending in server.js

## 🎯 Future Enhancements

- [ ] Add user authentication system
- [ ] Implement online ordering
- [ ] Add loyalty program
- [ ] Create admin dashboard
- [ ] Integrate payment processing
- [ ] Add multi-language support
- [ ] Implement real-time availability checking
- [ ] Add customer reviews management
- [ ] Create mobile app version
- [ ] Implement analytics tracking

## 🐛 Troubleshooting

**Port already in use:**
```bash
# Kill process on port 3000
npx kill-port 3000

# Or change port in vite.config.js
```

**Tailwind styles not working:**
```bash
# Clear cache and rebuild
rm -rf node_modules dist .vite
npm install
npm run dev
```

**API not connecting:**
- Check if backend server is running on port 5000
- Verify CORS settings in server.js
- Check network tab in browser DevTools

## 📄 License

MIT License - feel free to use this for your restaurant!

## 👨‍💻 Support

For questions or issues:
- Email: info@duba2lounge.com
- Phone: (555) 123-4567

## 🙏 Credits

Built with:
- React
- Tailwind CSS
- Lucide Icons
- Vite
- Express.js

---

Made with ❤️ for Dub a 2 Lounge
