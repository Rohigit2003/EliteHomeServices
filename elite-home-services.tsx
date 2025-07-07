import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Star, Shield, Clock, MapPin, Phone, Mail, 
  Facebook, Twitter, Instagram, Calendar, User, Search,
  Home, Wrench, Sparkles, Users, Car, Package, 
  GraduationCap, Baby, Laptop, Camera, Leaf, Moon, Sun,
  ChevronLeft, ChevronRight, Award, Zap, CheckCircle
} from 'lucide-react';

const EliteHomeServices = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginType, setLoginType] = useState('user');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedService, setSelectedService] = useState(null);
  const [bookingData, setBookingData] = useState({
    service: '',
    location: '',
    date: '',
    time: '',
    price: 0
  });

  // Services data
  const services = [
    {
      category: 'Home Repairs',
      icon: '🛠️',
      items: ['Electrician', 'Plumber', 'Carpenter'],
      basePrice: 299
    },
    {
      category: 'Cleaning',
      icon: '🧹',
      items: ['Home Deep Cleaning', 'Sofa/Carpet', 'Pest Control'],
      basePrice: 199
    },
    {
      category: 'Beauty & Wellness',
      icon: '💇',
      items: ['Salon at Home', 'Massage', 'Bridal Makeup'],
      basePrice: 399
    },
    {
      category: 'Appliance Repairs',
      icon: '🔧',
      items: ['AC Service', 'Refrigerator', 'Washing Machine'],
      basePrice: 349
    },
    {
      category: 'Vehicle',
      icon: '🚗',
      items: ['Car Wash', 'Bike Servicing'],
      basePrice: 149
    },
    {
      category: 'Laundry',
      icon: '🧺',
      items: ['Pickup & Delivery', 'Ironing'],
      basePrice: 99
    },
    {
      category: 'Packers & Movers',
      icon: '📦',
      items: ['House Shifting', 'Office Shifting'],
      basePrice: 999
    },
    {
      category: 'Tutors & Coaching',
      icon: '🧑‍🏫',
      items: ['Home Tutors', 'Fitness/Yoga'],
      basePrice: 499
    },
    {
      category: 'Other Needs',
      icon: '👶',
      items: ['Babysitter', 'Cook', 'Elderly Care'],
      basePrice: 249
    },
    {
      category: 'Tech Help',
      icon: '💻',
      items: ['Laptop Setup', 'WiFi Installation'],
      basePrice: 199
    },
    {
      category: 'Event Helpers',
      icon: '🎉',
      items: ['Photographer', 'Decorator'],
      basePrice: 799
    },
    {
      category: 'Gardening',
      icon: '🌿',
      items: ['Plant Care', 'Balcony Setup'],
      basePrice: 179
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Exceptional service! The cleaning team was professional and thorough.',
      service: 'Home Cleaning'
    },
    {
      name: 'Michael Chen',
      rating: 5,
      text: 'Quick electrician service. Fixed my wiring issues in no time.',
      service: 'Electrician'
    },
    {
      name: 'Priya Sharma',
      rating: 5,
      text: 'Amazing bridal makeup service. Made my wedding day perfect!',
      service: 'Bridal Makeup'
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setBookingData({ ...bookingData, service: service.category, price: service.basePrice });
    setCurrentPage('booking');
  };

  const handleBooking = () => {
    alert(`Booking confirmed for ${bookingData.service} on ${bookingData.date} at ${bookingData.time}`);
    setCurrentPage('home');
  };

  const Navigation = () => (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
    } shadow-lg`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-emerald-500 p-2 rounded-lg">
              <Home className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
              Elite Home Services
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'services', 'about', 'testimonials', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => setCurrentPage(item)}
                className={`capitalize hover:text-blue-600 transition-colors ${
                  currentPage === item ? 'text-blue-600 font-semibold' : ''
                }`}
              >
                {item === 'home' ? 'Home' : item}
              </button>
            ))}
            <button
              onClick={() => setShowLoginModal(true)}
              className="bg-gradient-to-r from-blue-600 to-emerald-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all"
            >
              Login
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            {['home', 'services', 'about', 'testimonials', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  setCurrentPage(item);
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left py-2 capitalize hover:text-blue-600 transition-colors"
              >
                {item === 'home' ? 'Home' : item}
              </button>
            ))}
            <button
              onClick={() => setShowLoginModal(true)}
              className="w-full bg-gradient-to-r from-blue-600 to-emerald-500 text-white py-2 rounded-full mt-4"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );

  const HomePage = () => (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Premium Services at Your 
              <span className="text-yellow-400"> Doorstep</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Professional, reliable, and affordable home services delivered with excellence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setCurrentPage('services')}
                className="bg-yellow-400 text-gray-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg"
              >
                Book Now
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
                Emergency Service
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Professionals</h3>
              <p className="text-gray-600 dark:text-gray-300">Background checked and trained service providers</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-emerald-100 dark:bg-emerald-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">On-Time Service</h3>
              <p className="text-gray-600 dark:text-gray-300">Guaranteed punctuality for all appointments</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-yellow-100 dark:bg-yellow-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600 dark:text-gray-300">100% satisfaction or money back guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg mb-6 italic">"{testimonials[currentTestimonial].text}"</p>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold">{testimonials[currentTestimonial].name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonials[currentTestimonial].service}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const ServicesPage = () => (
    <div className={`min-h-screen pt-24 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">Choose from our wide range of professional services</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => handleServiceSelect(service)}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer transform hover:scale-105"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.category}</h3>
                <div className="space-y-2 mb-4">
                  {service.items.map((item, i) => (
                    <p key={i} className="text-sm text-gray-600 dark:text-gray-300">{item}</p>
                  ))}
                </div>
                <div className="border-t pt-4">
                  <p className="text-lg font-bold text-blue-600">Starting from ₹{service.basePrice}</p>
                  <button className="w-full mt-3 bg-gradient-to-r from-blue-600 to-emerald-500 text-white py-2 rounded-full hover:shadow-lg transition-all">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const BookingPage = () => (
    <div className={`min-h-screen pt-24 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Book Your Service</h1>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">{selectedService?.category}</h2>
              <p className="text-gray-600 dark:text-gray-300">Selected service details</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Service Type</label>
                <select className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600">
                  {selectedService?.items.map((item, i) => (
                    <option key={i} value={item}>{item}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Location</label>
                <input
                  type="text"
                  placeholder="Enter your address"
                  className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                  value={bookingData.location}
                  onChange={(e) => setBookingData({...bookingData, location: e.target.value})}
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Date</label>
                  <input
                    type="date"
                    className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                    value={bookingData.date}
                    onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Time</label>
                  <input
                    type="time"
                    className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                    value={bookingData.time}
                    onChange={(e) => setBookingData({...bookingData, time: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total Amount:</span>
                  <span className="text-2xl font-bold text-blue-600">₹{bookingData.price}</span>
                </div>
              </div>
              
              <button
                onClick={handleBooking}
                className="w-full bg-gradient-to-r from-blue-600 to-emerald-500 text-white py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-all"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const LoginModal = () => (
    showLoginModal && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Login</h2>
            <button onClick={() => setShowLoginModal(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="flex mb-6">
            <button
              onClick={() => setLoginType('user')}
              className={`flex-1 py-2 px-4 rounded-l-lg ${
                loginType === 'user' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              Customer
            </button>
            <button
              onClick={() => setLoginType('professional')}
              className={`flex-1 py-2 px-4 rounded-r-lg ${
                loginType === 'professional' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              Professional
            </button>
          </div>
          
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            />
            <button className="w-full bg-gradient-to-r from-blue-600 to-emerald-500 text-white py-3 rounded-lg font-semibold">
              Login
            </button>
          </div>
          
          <p className="text-center mt-4 text-sm text-gray-600 dark:text-gray-400">
            Don't have an account? <span className="text-blue-600 cursor-pointer">Sign up</span>
          </p>
        </div>
      </div>
    )
  );

  const Footer = () => (
    <footer className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-800 text-white'} py-12`}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-emerald-500 p-2 rounded-lg">
                <Home className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Elite Home Services</span>
            </div>
            <p className="text-gray-300 mb-4">Premium services at your doorstep</p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 cursor-pointer hover:text-blue-500" />
              <Twitter className="h-5 w-5 cursor-pointer hover:text-blue-400" />
              <Instagram className="h-5 w-5 cursor-pointer hover:text-pink-500" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Services</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Home Cleaning</a></li>
              <li><a href="#" className="hover:text-white">Repairs</a></li>
              <li><a href="#" className="hover:text-white">Beauty Services</a></li>
              <li><a href="#" className="hover:text-white">Tech Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@elitehomeservices.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Bengaluru, Karnataka</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Elite Home Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'services':
        return <ServicesPage />;
      case 'booking':
        return <BookingPage />;
      case 'about':
        return (
          <div className={`min-h-screen pt-24 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
            <div className="container mx-auto px-4 py-12">
              <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-lg mb-6">
                  Elite Home Services is your trusted partner for premium home services. 
                  We connect you with verified professionals who deliver excellence at your doorstep.
                </p>
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">10,000+</div>
                    <p className="text-gray-600 dark:text-gray-300">Happy Customers</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-600">500+</div>
                    <p className="text-gray-600 dark:text-gray-300">Verified Professionals</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-600">50+</div>
                    <p className="text-gray-600 dark:text-gray-300">Service Categories</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'testimonials':
        return (
          <div className={`min-h-screen pt-24 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
            <div className="container mx-auto px-4 py-12">
              <h1 className="text-4xl font-bold text-center mb-12">Customer Testimonials</h1>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-center mb-4 italic">"{testimonial.text}"</p>
                    <div className="text-center">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.service}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className={`min-h-screen pt-24 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
            <div className="container mx-auto px-4 py-12">
              <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
              <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-blue-600" />
                      <span>+91 9876543210</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-blue-600" />
                      <span>info@elitehomeservices.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-blue-600" />
                      <span>Bengaluru, Karnataka, India</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                  <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                    />
                    <textarea
                      placeholder="Your Message"
                      rows="4"
                      className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                    ></textarea>
                    <button className="w-full bg-gradient-to-r from-blue-600 to-emerald-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <HomePage />;
    }
  };

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <Navigation />
      {renderPage()}
      <Footer />
      <LoginModal />
    </div>
  );
};

export default EliteHomeServices;