'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Truck, Clock, Shield, Star, MapPin, Package, Users, TrendingUp } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Fast & Reliable Logistics",
      subtitle: "Across 22+ Indian Cities",
      description: "Experience lightning-fast delivery with real-time tracking",
      image: "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    },
    {
      title: "Door-to-Door Delivery",
      subtitle: "Same Day & Next Day Options",
      description: "Seamless pickup and delivery at your convenience",
      image: "https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    },
    {
      title: "Enterprise Solutions",
      subtitle: "Scale Your Business With Us",
      description: "Custom logistics solutions for growing businesses",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const stats = [
    { icon: Truck, label: "Active Vehicles", value: "15,000+", color: "from-blue-500 to-cyan-500" },
    { icon: Clock, label: "On-Time Delivery", value: "99.2%", color: "from-green-500 to-emerald-500" },
    { icon: Shield, label: "Secure Deliveries", value: "100%", color: "from-purple-500 to-indigo-500" },
    { icon: Star, label: "Customer Rating", value: "4.8/5", color: "from-orange-500 to-red-500" }
  ];

  const liveStats = [
    { icon: Package, label: "Deliveries Today", value: "12,847", trend: "+15%" },
    { icon: Users, label: "Active Drivers", value: "3,245", trend: "+8%" },
    { icon: MapPin, label: "Cities Active", value: "22", trend: "100%" },
    { icon: TrendingUp, label: "Success Rate", value: "99.2%", trend: "+2%" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transform scale-105"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
        ))}
      </div>

      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/60 to-orange-900/80 z-10" />

      {/* Animated Particles */}
      <div className="absolute inset-0 z-15">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="inline-block mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    🚀 India's Fastest Growing Logistics Platform
                  </span>
                </motion.div>
                
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-shadow leading-tight">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-2xl md:text-3xl text-orange-400 mb-4 font-semibold">
                  {slides[currentSlide].subtitle}
                </p>
                <p className="text-lg text-white/90 mb-8 max-w-xl leading-relaxed">
                  {slides[currentSlide].description}. Join over 100,000+ satisfied customers 
                  who trust Delfa for their logistics needs across India.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.button
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-2xl transition-all duration-300 neon-glow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Delivery Now
                  <ArrowRight size={20} />
                </motion.button>
                
                <motion.button
                  className="glass-morphism text-white px-8 py-4 rounded-2xl font-semibold text-lg flex items-center justify-center gap-2 hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play size={20} />
                  Watch Demo
                </motion.button>
              </motion.div>

              {/* Stats Grid */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="glass-morphism rounded-2xl p-4 text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-2`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-white/70 text-xs">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Content - Live Dashboard */}
            <motion.div
              className="lg:block hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="glass-card rounded-3xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Live Dashboard</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm text-gray-600">Live</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {liveStats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-2xl p-4 shadow-sm"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <stat.icon className="w-5 h-5 text-orange-500" />
                        <span className="text-xs text-green-600 font-semibold">{stat.trend}</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Recent Activity */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 text-sm">Recent Deliveries</h4>
                  {[
                    { from: "Mumbai", to: "Pune", time: "2 min ago", status: "Delivered" },
                    { from: "Delhi", to: "Gurgaon", time: "5 min ago", status: "In Transit" },
                    { from: "Bangalore", to: "Chennai", time: "8 min ago", status: "Picked Up" }
                  ].map((delivery, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-xl"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div>
                        <div className="text-sm font-semibold text-gray-900">
                          {delivery.from} → {delivery.to}
                        </div>
                        <div className="text-xs text-gray-500">{delivery.time}</div>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        delivery.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                        delivery.status === 'In Transit' ? 'bg-blue-100 text-blue-700' :
                        'bg-orange-100 text-orange-700'
                      }`}>
                        {delivery.status}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-orange-500 w-8' : 'bg-white/30'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;