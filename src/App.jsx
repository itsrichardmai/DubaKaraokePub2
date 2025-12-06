import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock, Star, ChevronLeft, ChevronRight, Play, Beer, Mic2, ChevronDown } from 'lucide-react';

// Main App Component
const DubaApp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [expandedDrinkSection, setExpandedDrinkSection] = useState(null);
  const [galleryItems, setGalleryItems] = useState([
    { type: 'image', url: '/gallery/galleryimg0.png', title: 'Karaoke Room' },
    { type: 'image', url: '/gallery/galleryimg1.jpg', title: 'Karaoke Room' },
    { type: 'image', url: '/gallery/galleryimg2.jpg', title: 'BBQ Chicken' },
    { type: 'image', url: '/gallery/galleryimg3.png', title: 'Karaoke Room' },
    { type: 'image', url: '/gallery/galleryimg4.png', title: 'Karaoke Room' },
    { type: 'image', url: '/gallery/galleryimg5.png', title: 'Karaoke Room' },
    { type: 'image', url: '/gallery/galleryimg6.png', title: 'Karaoke Room' },
    { type: 'image', url: '/gallery/galleryimg7.png', title: 'Karaoke Room' },
    { type: 'image', url: '/gallery/galleryimg8.png', title: 'Karaoke Room' },
    { type: 'image', url: '/gallery/galleryimg9.png', title: 'Karaoke Room' },
    { type: 'image', url: '/gallery/galleryimg3.png', title: 'Karaoke Room' },

  ]);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  // Trigger hero animation on mount
  useEffect(() => {
    setIsHeroVisible(true);
  }, []);

  // Menu Data - Easy to update (prices removed for flexibility)
  const menuData = {
    appetizers: [
      { name: 'Kimchi', korean: '김치', description: 'Traditional fermented cabbage' },
      { name: 'Japchae', korean: '잡채', description: 'Glass noodles with vegetables' },
      { name: 'Mandu', korean: '만두', description: 'Korean dumplings (steamed or fried)' },
      { name: 'Pajeon', korean: '파전', description: 'Korean scallion pancake' },
      { name: 'Tteokbokki', korean: '떡볶이', description: 'Spicy rice cakes' },
    ],
    bbqChicken: [
      { name: 'Original BBQ Chicken', korean: '오리지널 치킨', description: 'Our signature Korean fried chicken' },
      { name: 'Spicy BBQ Chicken', korean: '매운 치킨', description: 'Crispy chicken with spicy glaze' },
      { name: 'Soy Garlic Chicken', korean: '간장 마늘 치킨', description: 'Sweet and savory soy garlic flavor' },
      { name: 'Honey Butter Chicken', korean: '허니 버터 치킨', description: 'Sweet honey butter coating' },
      { name: 'Half & Half', korean: '하프 앤 하프', description: 'Two flavors on one plate' },
    ],
    bbq: [
      { name: 'Galbi (Short Ribs)', korean: '갈비', description: 'Marinated beef short ribs' },
      { name: 'Bulgogi', korean: '불고기', description: 'Marinated beef' },
      { name: 'Samgyeopsal', korean: '삼겹살', description: 'Pork belly' },
      { name: 'Spicy Pork', korean: '제육볶음', description: 'Marinated spicy pork' },
      { name: 'Combo Platter', korean: '모듬구이', description: 'Mix of beef, pork, and chicken' },
    ],
    soups: [
      { name: 'Kimchi Jjigae', korean: '김치찌개', description: 'Kimchi stew with pork' },
      { name: 'Doenjang Jjigae', korean: '된장찌개', description: 'Soybean paste stew' },
      { name: 'Sundubu Jjigae', korean: '순두부찌개', description: 'Soft tofu stew' },
      { name: 'Galbitang', korean: '갈비탕', description: 'Beef short rib soup' },
    ],
    mains: [
      { name: 'Bibimbap', korean: '비빔밥', description: 'Mixed rice with vegetables and egg' },
      { name: 'Dolsot Bibimbap', korean: '돌솥 비빔밥', description: 'Bibimbap in hot stone pot' },
      { name: 'Kimchi Fried Rice', korean: '김치볶음밥', description: 'Fried rice with kimchi' },
      { name: 'Jajangmyeon', korean: '자장면', description: 'Noodles with black bean sauce' },
    ],
    drinks: {
      byDraft: [
        { name: 'Coors Light', description: '4.2% Light Lager' },
        { name: 'Yuengling Lager', description: '4.2% Amber Lager' },
        { name: 'Sapporo Premium', description: '4.9% Lager' },
        { name: 'Heineken', description: '5.0% Pale Lager' },
        { name: 'Angry Orchard Crisp Apple', description: '5.0% Cider' },
        { name: 'Blue Moon', description: '5.4% Witbier' },
        { name: 'Sierra Nevada', description: '5.6% Pale Ale' },
        { name: 'Allagash White', description: '5.1% Witbier' },
        { name: '2SP Up & Out', description: '6.0% Hazy IPA' },
        { name: 'Lagunitas IPA', description: '6.2% IPA' },
        { name: 'Dogfish Head 60 Min IPA', description: '6.0% IPA' },
        { name: 'Guinness', description: '4.2% Stout' },
      ],
      byBottle: {
        domestic: [
          { name: 'Coors Light', description: '4.2% Light Lager' },
          { name: 'Miller Lite', description: '4.2% Light Lager' },
          { name: 'Budweiser', description: '' },
          { name: 'Stella Artois', description: '5.0% Lager' },
          { name: 'White Claw', description: '5.0% Seltzer' },
          { name: "Truly's", description: '5.0% Seltzer' },
          { name: 'Dogfish Head 90 min', description: '9.0% Imperial IPA' },
        ],
        imports: [
          { name: 'Corona Extra', description: '4.6% Adjunct Lager' },
          { name: 'Heineken', description: '5.0% Pale Lager' },
          { name: 'Kirin Ichiban', description: '5.0% Pale Lager' },
          { name: 'Tsingtao', description: '4.8% Lager' },
          { name: 'Hoegaarden', description: '4.9% Witbier' },
          { name: 'Singha', description: '5.0% Pale Larger' },
          { name: 'Kloud', description: '5.0% Pilsener' },
        ],
      },
      cocktails: {
        adultCaprisun: [
          { name: 'Strawberry Smash Caprisun', description: 'Soju, Muddled Strawberry, Yuzu Syrup' },
          { name: 'Lemonade Caprisun', description: 'Soju, Squeezed Lemon, Simple Syrup' },
          { name: 'Mango Caprisun', description: 'Soju, Mango Syrup, Orange Juice' },
          { name: 'Soju Punch Caprisun', description: 'Soju, Pineapple Juice, Orange Juice, Cranberry Juice, Lime Juice, Grenadine' },
          { name: 'Peach Caprisun', description: 'Soju, Peach Schnapps, Peach Syrup, Peach Nectar, Lime Juice' },
        ],
        classicCocktails: [
          { name: 'Bay Breeze', description: 'Vodka, Pineapple Juice, Cranberry Juice' },
          { name: 'Long Island', description: 'Vodka, Rum, Gin, Tequila, Triple Sec, Sweet & Sour Mix, Coke' },
          { name: 'Tokyo Tea', description: 'Vodka, Rum, Gin, Tequila, Tripel Sec, Midori, Sweet & Sour Mix, Sprite' },
          { name: 'Tequila Sunrise', description: 'Tequila, Orange Juice, Cranberry Juice, Grenadine' },
          { name: 'Yuzu Mule', description: 'Vodka, Yuzu, Lime, Ginger Beer' },
          { name: 'Peach-Pomtini', description: 'Pomegranate Vodka, Peach Schnapps, Lemon, Grenadine' },
          { name: 'Cosmopolitan', description: 'Vodka, Lime Juice, Triple Sec, Cranberry Juice' },
        ],
        shooters: [
          { name: 'Green Tea', description: '(1) or (Pitcher)' },
          { name: 'Lemon Drop', description: '' },
          { name: 'Irish Car Bomb', description: '' },
          { name: 'Jager Bomb', description: '' },
        ],
      },
      koreanTraditional: [
        { name: 'Charm Soju', korean: '참 소주', description: '19.3% - High ABV, Sweeter Clean Finish - 375ml' },
        { name: 'Chamisul Fresh', korean: '참이슬 후레쉬', description: "17.8% - Korea's No.1 seller, Bamboo charcoal filtered soju - 375ml" },
        { name: 'Chamisul Plum', korean: '참이슬 매실', description: '13.0% - Plum flavored Soju - 375ml' },
        { name: 'Chamisul Grapefruit', korean: '참이슬 자몽', description: '13.0% - Grapefruit flavored Soju - 375ml' },
        { name: 'Chamisul Green Grape', korean: '참이슬 청포도', description: '13.0% - Green Grape flavored Soju - 375ml' },
        { name: 'Chum Churum', korean: '처음처럼', description: '17.3% - Spirit Distilled from Rice - 375ml' },
        { name: 'Makgeolli', korean: '막걸리', description: '6.0% - Unfiltered Rice Wine - 1 Liter' },
        { name: 'Bok Bun Ja', korean: '복분자', description: '15.0% - Korean Raspberry Wine - 375ml' },
      ],
      whiskey: {
        japanese: [
          { name: 'Suntory Toki Blended', description: '' },
          { name: 'Nikka Taketsuru Pure Malt', description: '' },
          { name: 'Suntory Hibiki Harmony', description: '' },
          { name: 'Blende 86 Proof', description: '' },
        ],
        american: [
          { name: 'Mellow Corn Kentucky Straight Corn 100 Proof', description: '' },
          { name: "Jack Daniel's Old Number 7", description: '' },
        ],
        irish: [
          { name: 'Jameson', description: '' },
        ],
        bourbon: [
          { name: 'Evan Williams Bottled in Bond 100 Proof', description: '' },
          { name: "Maker's Mark", description: '' },
          { name: 'Bulleit', description: '' },
        ],
        scotch: {
          singleMalt: [
            { name: 'Glenlivet 12 years', description: '' },
            { name: 'Macallan 12 years', description: '' },
            { name: 'Oban Scotch 14 years', description: '' },
            { name: 'Glenfiddich Scotch 18 year', description: '' },
            { name: 'Glenlivet 18 years', description: '' },
            { name: 'Macallan 18 years', description: '' },
          ],
          blended: [
            { name: 'Johnnie Walker Black 12 year', description: '' },
            { name: 'Johnnie Walker Blue', description: '' },
          ],
        },
        rye: [
          { name: 'Old Overholt Rye Whiskey', description: '' },
          { name: 'Bulleit Rye', description: '' },
        ],
        canadian: [
          { name: "Seagram's 7 Crown Blended Whiskey", description: '' },
          { name: 'Crown Royal Canadian Whisky', description: '' },
        ],
      },
      wine: {
        red: [
          { name: 'Cabernet Sauvignon', description: "Beringer Founder's Estate, California" },
          { name: 'Malbec', description: 'Alamos, Mendoza, Argentina' },
          { name: 'Sweet Red', description: '' },
        ],
        white: [
          { name: 'Moscato', description: '' },
          { name: 'Sauvignon Blanc', description: 'Brancott Estate, New Zealand' },
          { name: 'Chardonnay', description: 'Alamos, Mendoza, Argentina' },
        ],
        rose: [
          { name: 'Rose', description: 'Sepal Estates, California 2016' },
        ],
        bubble: [
          { name: 'Champagnes', description: 'Korbel Brut, California' },
        ],
      },
    },
  };

  // Contact Information - Elkins Park Location
  const contactInfo = {
    phone: '215-635-DUBA (3822)',
    email: 'duba.elkins@gmail.com',
    address: '1333 W. Cheltenham Ave, Fl Basement, Elkins Park, PA 19027',
    hours: {
      'Friday - Saturday': '5:00 PM - 2:00 AM',
      'Sunday - Thursday': '5:00 PM - 1:00 AM',
    },
  };

  // Karaoke Room Information - 8 Themed Private Rooms
  const karaokeRooms = [
    { name: 'Small Room', capacity: '4-6 people', description: 'Cozy intimate space' },
    { name: 'Medium Room', capacity: '6-10 people', description: 'Perfect for small groups' },
    { name: 'Large Room', capacity: '10-15 people', description: 'Great for parties' },
    { name: 'Premium Room', capacity: '15-20 people', description: 'VIP experience' },
    { name: 'Party Suite 1', capacity: '20-25 people', description: 'Premium entertainment space' },
    { name: 'Party Suite 2', capacity: '20-25 people', description: 'Luxury group setting' },
    { name: 'Grand Room', capacity: '25-30 people', description: 'Ultimate celebration venue' },
    { name: 'VIP Suite', capacity: 'Up to 30 people', description: 'Exclusive themed experience' },
  ];

  // Awards & Recognitions - Updated for PA location
  const awards = [
    { year: '2024', title: 'Elkins Park Favorite', organization: 'Community Choice' },
    { year: '2024', title: 'Best Korean Restaurant', organization: 'Philadelphia Magazine' },
    { year: '2023', title: 'Top Karaoke Venue', organization: 'Nightlife Awards PA' },
    { year: '2023', title: 'Excellence in Service', organization: 'Restaurant Association' },
  ];

  // Happy Hour Specials
  const happyHour = {
    timing: 'Sunday - Thursday | 5PM - 10PM',
    note: 'Except Holidays',
    specials: [
      { name: 'Capri Pouches', price: '$8' },
      { name: 'Shooter Pitcher', price: '$20' },
      { name: 'Dumplings', price: '$6' },
      { name: 'Honey Butter Chips', price: '$6' },
      { name: 'Fries', price: '$6' },
      { name: 'Yoo Lin Gi', price: '$10' },
      { name: 'Hawaiian Spam', price: '$8' },
      { name: 'Korean Ribs', price: '$15' },
      { name: 'Korean Wings', price: '$20' },
    ],
    karaokeDiscount: '50% OFF Karaoke',
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Toggle drink section expansion
  const toggleDrinkSection = (section) => {
    setExpandedDrinkSection(expandedDrinkSection === section ? null : section);
  };

  // Gallery navigation
  const nextGalleryItem = () => {
    setCurrentGalleryIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevGalleryItem = () => {
    setCurrentGalleryIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-yellow-500/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              {/* Your logo icon - replace 'logo-icon.png' with your actual filename */}
              <img src="/logo-icon.png" alt="Duba Logo" className="h-25 w-25 object-contain" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Menu', 'Gallery', 'Contact Us'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className={`hover:text-yellow-400 transition-colors ${
                    activeSection === item.toLowerCase().replace(' ', '-') ? 'text-yellow-400' : 'text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              {['Home', 'About', 'Menu', 'Gallery', 'Contact Us'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="block w-full text-left py-2 hover:text-yellow-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-0"></div>
        <div 
          className="absolute inset-0 opacity-50 z-0"
          style={{
            backgroundImage: 'url(/hero-background.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        
        <div className="container mx-auto px-4 text-center z-10 relative">
          {/* Uncomment and add your logo path when ready */}
          {/* <img src="/logo.png" alt="Duba" className="mx-auto mb-8 h-32" /> */}
          <h1 className={`text-6xl md:text-8xl font-bold mb-4 transition-all duration-1000 transform ${
            isHeroVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-10 scale-95'
          }`}>
            <span className="text-yellow-400 inline-block hover:scale-110 transition-transform duration-300 cursor-default">
              Duba
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-yellow-400 mb-2">Pub & Karaoke Lounge</p>
          <p className="text-xl text-gray-300 mb-4">Good Food. Good Drinks. Good Vibes.</p>
          <p className="text-lg text-yellow-400 mb-2">Elkins Park's Favorite</p>
          <div className="mb-8 text-center">
            <p className="text-md text-white font-semibold">Introducing</p>
            <p className="text-2xl text-red-500 font-bold">bb.q CHICKEN</p>
            <p className="text-sm text-gray-300">No.1 Korean Chicken • bb.q</p>
            <p className="text-xs text-gray-400">Famous in 57 Countries Worldwide</p>
            <p className="text-xs text-gray-400">including USA Flagship in NYC</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('menu')}
              className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-500 transition-all transform hover:scale-105"
            >
              View Menu
            </button>
            <button 
              onClick={() => scrollToSection('contact-us')}
              className="bg-transparent border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-bold hover:bg-yellow-400 hover:text-black transition-all transform hover:scale-105"
            >
              Make Reservation
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 text-yellow-400">About Us</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-black/50 backdrop-blur-sm border border-yellow-500/20 rounded-lg p-8 mb-12">
              <h3 className="text-3xl font-bold mb-6 text-yellow-400">Welcome to Duba</h3>
              <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                Step into the ultimate Korean entertainment experience where authentic K-BBQ meets state-of-the-art karaoke. 
                At Duba, we've created a unique fusion destination that celebrates Korean culture, cuisine, and entertainment 
                in the heart of Elkins Park, PA.
              </p>
              <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                Our premium Korean BBQ features the finest cuts of meat, marinated with traditional recipes passed down through 
                generations. Each table is equipped with built-in grills, allowing you to enjoy the interactive cooking experience 
                that makes Korean BBQ so special. Now featuring bb.q CHICKEN - the No.1 Korean Chicken famous in 57 countries worldwide!
              </p>
              <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                We are a new state-of-the-art karaoke lounge with the finest karaoke entertainment equipment and an extensive library 
                of Korean, English, and Chinese songs updated monthly. We feature 8 private rooms, each with unique themes and varying 
                sizes for groups of 4 to 30. All rooms offer full bar service for your convenience.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With premium sound systems, comfortable seating, and a vibrant 
                atmosphere, Duba is the perfect destination for celebrations, date nights, and unforgettable evenings with friends.
              </p>
            </div>

            {/* Awards & Recognitions */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold mb-8 text-center text-yellow-400">Awards & Recognitions</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {awards.map((award, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-yellow-400/10 to-transparent border border-yellow-500/30 rounded-lg p-6 hover:border-yellow-400 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <Star className="text-yellow-400 flex-shrink-0" size={24} />
                      <div>
                        <div className="text-yellow-400 font-bold text-sm mb-1">{award.year}</div>
                        <h4 className="text-white font-bold text-lg mb-2">{award.title}</h4>
                        <p className="text-gray-400 text-sm">{award.organization}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews Widget */}
            <div className="bg-black/50 backdrop-blur-sm border border-yellow-500/20 rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-6 text-center text-yellow-400">What Our Guests Say</h3>
              {/* Elfsight Yelp Reviews Widget */}
              <script src="https://elfsightcdn.com/platform.js" async></script>
              <div className="elfsight-app-919f2f96-9bec-42a8-b90d-7b87eefbaba9" data-elfsight-app-lazy></div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 text-yellow-400">Our Menu</h2>
          
          <div className="max-w-6xl mx-auto space-y-12">
            {/* BBQ Chicken - Featured */}
            <div className="bg-gradient-to-br from-red-900/30 to-black border-2 border-red-500/30 rounded-lg p-8">
              <div className="text-center mb-6">
                <p className="text-yellow-400 text-sm font-semibold mb-2">⭐ NOW FEATURING ⭐</p>
                <h3 className="text-4xl font-bold text-red-500 mb-2">bb.q CHICKEN</h3>
                <p className="text-gray-300 text-sm">No.1 Korean Chicken | Famous in 57 Countries</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {menuData.bbqChicken.map((item, index) => (
                  <div key={index} className="flex justify-between items-start gap-4 bg-black/50 p-4 rounded-lg">
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-lg">
                        {item.name} {item.korean && <span className="text-yellow-400">({item.korean})</span>}
                      </h4>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Appetizers */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-6 text-yellow-400 border-b border-yellow-500/30 pb-3">
                Appetizers (전채)
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {menuData.appetizers.map((item, index) => (
                  <div key={index} className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-lg">
                        {item.name} {item.korean && <span className="text-yellow-400">({item.korean})</span>}
                      </h4>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Korean BBQ */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-6 text-yellow-400 border-b border-yellow-500/30 pb-3">
                Korean BBQ (고기구이)
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {menuData.bbq.map((item, index) => (
                  <div key={index} className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-lg">
                        {item.name} {item.korean && <span className="text-yellow-400">({item.korean})</span>}
                      </h4>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soups & Stews */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-6 text-yellow-400 border-b border-yellow-500/30 pb-3">
                Soups & Stews (찌개)
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {menuData.soups.map((item, index) => (
                  <div key={index} className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-lg">
                        {item.name} {item.korean && <span className="text-yellow-400">({item.korean})</span>}
                      </h4>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Dishes */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-6 text-yellow-400 border-b border-yellow-500/30 pb-3">
                Main Dishes (식사)
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {menuData.mains.map((item, index) => (
                  <div key={index} className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-lg">
                        {item.name} {item.korean && <span className="text-yellow-400">({item.korean})</span>}
                      </h4>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Drinks - Expandable Categories */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-6 text-yellow-400 border-b border-yellow-500/30 pb-3">
                Drinks (음료)
              </h3>
              
              <div className="space-y-4">
                {/* By Draft */}
                <div className="border border-yellow-500/20 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleDrinkSection('byDraft')}
                    className="w-full flex items-center justify-between p-4 bg-black/40 hover:bg-black/60 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl"></span>
                      <span className="text-white font-bold text-xl">By Draft</span>
                    </div>
                    <ChevronDown 
                      size={24} 
                      className={`text-yellow-400 transition-transform duration-300 ${expandedDrinkSection === 'byDraft' ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {expandedDrinkSection === 'byDraft' && (
                    <div className="p-4 bg-black/20 grid md:grid-cols-2 gap-4">
                      {menuData.drinks.byDraft.map((item, index) => (
                        <div key={index} className="flex justify-between items-start gap-4">
                          <span className="text-white">{item.name}</span>
                          <span className="text-gray-400 text-sm whitespace-nowrap">{item.description}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* By Bottle */}
                <div className="border border-yellow-500/20 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleDrinkSection('byBottle')}
                    className="w-full flex items-center justify-between p-4 bg-black/40 hover:bg-black/60 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl"></span>
                      <span className="text-white font-bold text-xl">By Bottle</span>
                    </div>
                    <ChevronDown 
                      size={24} 
                      className={`text-yellow-400 transition-transform duration-300 ${expandedDrinkSection === 'byBottle' ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {expandedDrinkSection === 'byBottle' && (
                    <div className="p-4 bg-black/20 space-y-6">
                      <div>
                        <h4 className="text-yellow-400 font-bold text-lg mb-3">Domestic</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {menuData.drinks.byBottle.domestic.map((item, index) => (
                            <div key={index} className="flex justify-between items-start gap-4">
                              <span className="text-white">{item.name}</span>
                              <span className="text-gray-400 text-sm whitespace-nowrap">{item.description}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-yellow-400 font-bold text-lg mb-3">Imports</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {menuData.drinks.byBottle.imports.map((item, index) => (
                            <div key={index} className="flex justify-between items-start gap-4">
                              <span className="text-white">{item.name}</span>
                              <span className="text-gray-400 text-sm whitespace-nowrap">{item.description}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Cocktails */}
                <div className="border border-yellow-500/20 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleDrinkSection('cocktails')}
                    className="w-full flex items-center justify-between p-4 bg-black/40 hover:bg-black/60 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl"></span>
                      <span className="text-white font-bold text-xl">Cocktails</span>
                    </div>
                    <ChevronDown 
                      size={24} 
                      className={`text-yellow-400 transition-transform duration-300 ${expandedDrinkSection === 'cocktails' ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {expandedDrinkSection === 'cocktails' && (
                    <div className="p-4 bg-black/20 space-y-6">
                      <div>
                        <h4 className="text-yellow-400 font-bold text-lg mb-3">Adult Caprisun</h4>
                        <div className="space-y-3">
                          {menuData.drinks.cocktails.adultCaprisun.map((item, index) => (
                            <div key={index}>
                              <p className="text-white font-semibold">{item.name}</p>
                              <p className="text-gray-400 text-sm">{item.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-yellow-400 font-bold text-lg mb-3">Classic Cocktails</h4>
                        <div className="space-y-3">
                          {menuData.drinks.cocktails.classicCocktails.map((item, index) => (
                            <div key={index}>
                              <p className="text-white font-semibold">{item.name}</p>
                              <p className="text-gray-400 text-sm">{item.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-yellow-400 font-bold text-lg mb-3">Shooters</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {menuData.drinks.cocktails.shooters.map((item, index) => (
                            <div key={index} className="flex justify-between items-start gap-4">
                              <span className="text-white">{item.name}</span>
                              <span className="text-gray-400 text-sm whitespace-nowrap">{item.description}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Korean Traditional Drinks */}
                <div className="border border-yellow-500/20 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleDrinkSection('koreanTraditional')}
                    className="w-full flex items-center justify-between p-4 bg-black/40 hover:bg-black/60 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl"></span>
                      <span className="text-white font-bold text-xl">Korean Traditional Drinks</span>
                    </div>
                    <ChevronDown 
                      size={24} 
                      className={`text-yellow-400 transition-transform duration-300 ${expandedDrinkSection === 'koreanTraditional' ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {expandedDrinkSection === 'koreanTraditional' && (
                    <div className="p-4 bg-black/20 space-y-3">
                      {menuData.drinks.koreanTraditional.map((item, index) => (
                        <div key={index}>
                          <p className="text-white font-semibold">
                            {item.name} {item.korean && <span className="text-yellow-400">({item.korean})</span>}
                          </p>
                          <p className="text-gray-400 text-sm">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Whiskey */}
                <div className="border border-yellow-500/20 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleDrinkSection('whiskey')}
                    className="w-full flex items-center justify-between p-4 bg-black/40 hover:bg-black/60 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl"></span>
                      <span className="text-white font-bold text-xl">Whiskey</span>
                    </div>
                    <ChevronDown 
                      size={24} 
                      className={`text-yellow-400 transition-transform duration-300 ${expandedDrinkSection === 'whiskey' ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {expandedDrinkSection === 'whiskey' && (
                    <div className="p-4 bg-black/20 space-y-6">
                      <div>
                        <h4 className="text-yellow-400 font-bold text-lg mb-3">Japanese</h4>
                        <div className="space-y-2">
                          {menuData.drinks.whiskey.japanese.map((item, index) => (
                            <p key={index} className="text-white">{item.name}</p>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-yellow-400 font-bold text-lg mb-3">American Whiskey</h4>
                        <div className="space-y-2">
                          {menuData.drinks.whiskey.american.map((item, index) => (
                            <p key={index} className="text-white">{item.name}</p>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-yellow-400 font-bold text-lg mb-3">Irish</h4>
                        <div className="space-y-2">
                          {menuData.drinks.whiskey.irish.map((item, index) => (
                            <p key={index} className="text-white">{item.name}</p>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-yellow-400 font-bold text-lg mb-3">Bourbon</h4>
                        <div className="space-y-2">
                          {menuData.drinks.whiskey.bourbon.map((item, index) => (
                            <p key={index} className="text-white">{item.name}</p>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-yellow-400 font-bold text-lg mb-3">Scotch - Single Malt</h4>
                        <div className="space-y-2">
                          {menuData.drinks.whiskey.scotch.singleMalt.map((item, index) => (
                            <p key={index} className="text-white">{item.name}</p>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-yellow-400 font-bold text-lg mb-3">Scotch - Blended</h4>
                        <div className="space-y-2">
                          {menuData.drinks.whiskey.scotch.blended.map((item, index) => (
                            <p key={index} className="text-white">{item.name}</p>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-yellow-400 font-bold text-lg mb-3">Rye</h4>
                        <div className="space-y-2">
                          {menuData.drinks.whiskey.rye.map((item, index) => (
                            <p key={index} className="text-white">{item.name}</p>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-yellow-400 font-bold text-lg mb-3">Canadian</h4>
                        <div className="space-y-2">
                          {menuData.drinks.whiskey.canadian.map((item, index) => (
                            <p key={index} className="text-white">{item.name}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Wine */}
                <div className="border border-yellow-500/20 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleDrinkSection('wine')}
                    className="w-full flex items-center justify-between p-4 bg-black/40 hover:bg-black/60 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl"></span>
                      <span className="text-white font-bold text-xl">Wine</span>
                    </div>
                    <ChevronDown 
                      size={24} 
                      className={`text-yellow-400 transition-transform duration-300 ${expandedDrinkSection === 'wine' ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {expandedDrinkSection === 'wine' && (
                    <div className="p-4 bg-black/20 space-y-6">
                      <div>
                        <h4 className="text-yellow-400 font-bold text-lg mb-3">Red</h4>
                        <div className="space-y-3">
                          {menuData.drinks.wine.red.map((item, index) => (
                            <div key={index}>
                              <p className="text-white font-semibold">{item.name}</p>
                              {item.description && <p className="text-gray-400 text-sm">{item.description}</p>}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-yellow-400 font-bold text-lg mb-3">White</h4>
                        <div className="space-y-3">
                          {menuData.drinks.wine.white.map((item, index) => (
                            <div key={index}>
                              <p className="text-white font-semibold">{item.name}</p>
                              {item.description && <p className="text-gray-400 text-sm">{item.description}</p>}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-yellow-400 font-bold text-lg mb-3">Rose</h4>
                        <div className="space-y-3">
                          {menuData.drinks.wine.rose.map((item, index) => (
                            <div key={index}>
                              <p className="text-white font-semibold">{item.name}</p>
                              {item.description && <p className="text-gray-400 text-sm">{item.description}</p>}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-yellow-400 font-bold text-lg mb-3">Bubble</h4>
                        <div className="space-y-3">
                          {menuData.drinks.wine.bubble.map((item, index) => (
                            <div key={index}>
                              <p className="text-white font-semibold">{item.name}</p>
                              {item.description && <p className="text-gray-400 text-sm">{item.description}</p>}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Happy Hour Specials */}
            <div className="bg-gradient-to-br from-yellow-400/20 via-red-500/10 to-black border-2 border-yellow-500/40 rounded-lg p-6">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-5 py-2 rounded-full font-bold text-lg mb-3">
                  <Beer size={20} className="text-black" />
                  <span>HAPPY HOUR SPECIALS</span>
                  <Beer size={20} className="text-black" />
                </div>
                <p className="text-yellow-400 text-lg font-bold mb-1">{happyHour.timing}</p>
                <p className="text-gray-400 text-xs">({happyHour.note})</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-x-8 gap-y-2 mb-6 max-w-4xl mx-auto">
                {happyHour.specials.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-white text-base">{item.name}</span>
                    <span className="text-yellow-400 text-lg font-bold">{item.price}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-red-500/20 to-yellow-400/20 border border-yellow-500/50 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center gap-2">
                  <Mic2 size={24} className="text-yellow-400" />
                  <p className="text-yellow-400 text-xl font-bold">{happyHour.karaokeDiscount}</p>
                  <Mic2 size={24} className="text-yellow-400" />
                </div>
                <p className="text-gray-300 text-xs mt-1">During Happy Hour Times</p>
              </div>
            </div>

            {/* Karaoke Rooms */}
            <div className="bg-gradient-to-br from-yellow-400/10 to-transparent border border-yellow-500/30 rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-6 text-yellow-400 border-b border-yellow-500/30 pb-3">
                Karaoke Rooms (노래방)
              </h3>
              <p className="text-gray-300 mb-6 text-center">
                8 Private Themed Rooms • Korean, English & Chinese Songs • Full Bar Service
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {karaokeRooms.map((room, index) => (
                  <div key={index} className="bg-black/50 rounded-lg p-6 border border-yellow-500/20">
                    <h4 className="text-white font-bold text-xl mb-2">{room.name}</h4>
                    <p className="text-gray-400 text-sm mb-3">{room.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">{room.capacity}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-400 mt-6 text-sm">
                * Call for rates and availability. Song library updated monthly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 text-yellow-400">Gallery</h2>
          
          <div className="max-w-5xl mx-auto">
            {/* Main Gallery Viewer */}
            <div className="relative bg-black rounded-lg overflow-hidden border border-yellow-500/20 mb-8">
              <div className="aspect-video relative">
                {galleryItems[currentGalleryIndex].type === 'image' ? (
                  <img
                    src={galleryItems[currentGalleryIndex].url}
                    alt={galleryItems[currentGalleryIndex].title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-black flex items-center justify-center">
                    <Play size={64} className="text-yellow-400" />
                  </div>
                )}
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevGalleryItem}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-yellow-400 text-white hover:text-black p-3 rounded-full transition-all"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextGalleryItem}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-yellow-400 text-white hover:text-black p-3 rounded-full transition-all"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
              
              <div className="p-4 bg-gradient-to-r from-yellow-400/20 to-transparent">
                <h3 className="text-white font-bold text-lg">{galleryItems[currentGalleryIndex].title}</h3>
                <p className="text-gray-400 text-sm">
                  {currentGalleryIndex + 1} / {galleryItems.length}
                </p>
              </div>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-4 gap-4">
              {galleryItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentGalleryIndex(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentGalleryIndex
                      ? 'border-yellow-400 scale-105'
                      : 'border-transparent hover:border-yellow-400/50'
                  }`}
                >
                  {item.type === 'image' ? (
                    <img src={item.url} alt={item.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                      <Play className="text-yellow-400" />
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Admin Note */}
            <div className="mt-8 bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-6 text-center">
              <p className="text-gray-300 text-sm">
                <strong className="text-yellow-400">Gallery Management:</strong> Use the admin panel to add, remove, or update gallery items.
                This section supports both images and videos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact-us" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 text-yellow-400">Contact Us</h2>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-yellow-400">Get in Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Phone className="text-yellow-400 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="text-white font-bold mb-1">Phone</h4>
                      <a href={`tel:${contactInfo.phone}`} className="text-gray-300 hover:text-yellow-400 transition-colors">
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="text-yellow-400 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="text-white font-bold mb-1">Email</h4>
                      <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-yellow-400 transition-colors">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="text-yellow-400 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="text-white font-bold mb-1">Address</h4>
                      <p className="text-gray-300">{contactInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="text-yellow-400 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="text-white font-bold mb-2">Hours</h4>
                      {Object.entries(contactInfo.hours).map(([day, hours]) => (
                        <div key={day} className="flex justify-between gap-8 text-sm mb-1">
                          <span className="text-gray-400">{day}:</span>
                          <span className="text-gray-300">{hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-yellow-400/10 to-transparent border border-yellow-500/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="bg-black/50 hover:bg-yellow-400 text-white hover:text-black p-3 rounded-full transition-all">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-black/50 hover:bg-yellow-400 text-white hover:text-black p-3 rounded-full transition-all">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="bg-black/50 hover:bg-yellow-400 text-white hover:text-black p-3 rounded-full transition-all">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Make a Reservation</h3>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2 text-sm">Name *</label>
                  <input
                    type="text"
                    className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 text-sm">Phone *</label>
                  <input
                    type="tel"
                    className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 text-sm">Email *</label>
                  <input
                    type="email"
                    className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-2 text-sm">Date *</label>
                    <input
                      type="date"
                      className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2 text-sm">Time *</label>
                    <input
                      type="time"
                      className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 text-sm">Party Size *</label>
                  <select className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors">
                    <option>2 people</option>
                    <option>3-4 people</option>
                    <option>5-8 people</option>
                    <option>9-12 people</option>
                    <option>13+ people</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 text-sm">Service</label>
                  <select className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors">
                    <option>Dining Only</option>
                    <option>Karaoke Room Only</option>
                    <option>Dining + Karaoke</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 text-sm">Special Requests</label>
                  <textarea
                    rows="3"
                    className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors resize-none"
                    placeholder="Any special requests or dietary restrictions?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-black font-bold py-4 rounded-lg hover:bg-yellow-500 transition-all transform hover:scale-105"
                >
                  Submit Reservation Request
                </button>

                <p className="text-gray-400 text-xs text-center">
                  * A deposit may be required for large groups or private room bookings. We'll contact you to confirm your reservation.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-yellow-500/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <div className="text-yellow-400 font-bold text-2xl">
              Duba
            </div>
            <p className="text-gray-400 text-sm mt-2">Pub & Karaoke Lounge</p>
            <p className="text-gray-500 text-xs mt-1">Elkins Park, PA</p>
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 Duba Lounge. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Must be 21+ to enter. Please drink responsibly.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DubaApp;