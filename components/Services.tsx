'use client';

import { motion } from 'framer-motion';
import { Package, Truck, Clock, Shield, MapPin, Users, Zap, Globe } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Package,
      title: "Package Delivery",
      description: "Fast and secure delivery of packages across the city with real-time tracking and insurance coverage.",
      features: ["Same Day Delivery", "Real-time Tracking", "Secure Packaging", "Insurance Coverage"],
      price: "Starting ₹49",
      deliveryTime: "2-4 hours",
      image: "https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: Truck,
      title: "Freight Transport",
      description: "Heavy-duty transportation for businesses with dedicated fleet management and B2B solutions.",
      features: ["Heavy Cargo", "Dedicated Fleet", "B2B Solutions", "Bulk Transport"],
      price: "Starting ₹299",
      deliveryTime: "4-8 hours",
      image: "https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      icon: Zap,
      title: "Express Delivery",
      description: "Ultra-fast delivery service for urgent packages and documents with priority handling.",
      features: ["2-Hour Delivery", "Priority Handling", "Express Pickup", "24/7 Support"],
      price: "Starting ₹99",
      deliveryTime: "1-2 hours",
      image: "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    },
    {
      icon: Shield,
      title: "Secure Logistics",
      description: "High-security transportation for valuable and sensitive items with verified drivers.",
      features: ["GPS Tracking", "Secure Vehicles", "Insurance", "Verified Drivers"],
      price: "Starting ₹199",
      deliveryTime: "3-6 hours",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-50 to-indigo-50"
    },
    {
      icon: Globe,
      title: "Inter-City Transport",
      description: "Reliable transportation between major cities across India with scheduled routes.",
      features: ["22+ Cities", "Scheduled Routes", "Cost Effective", "Door-to-Door"],
      price: "Starting ₹149",
      deliveryTime: "6-24 hours",
      image: "https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      gradient: "from-teal-500 to-blue-500",
      bgGradient: "from-teal-50 to-blue-50"
    },
    {
      icon: Users,
      title: "Enterprise Solutions",
      description: "Customized logistics solutions for large-scale business operations with dedicated support.",
      features: ["Custom Solutions", "Dedicated Support", "API Integration", "Analytics"],
      price: "Custom Pricing",
      deliveryTime: "As per SLA",
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop",
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
              Premium Services
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive logistics solutions tailored to meet your specific needs, 
            from small packages to large freight transportation with real-time tracking.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-70`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Service Icon */}
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Price Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-white text-sm font-semibold">{service.price}</span>
                  </div>
                </div>

                {/* Delivery Time */}
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <Clock className="w-4 h-4 text-white" />
                    <span className="text-white text-sm font-semibold">{service.deliveryTime}</span>
                  </div>
                </div>
              </div>

              {/* Service Content */}
              <div className={`p-8 bg-gradient-to-br ${service.bgGradient}`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <motion.div 
                      key={idx} 
                      className="flex items-center text-sm text-gray-700"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3`} />
                      {feature}
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  className={`w-full bg-gradient-to-r ${service.gradient} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 neon-glow`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Comparison */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="glass-card rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Why Choose Delfa?</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Fast Delivery</h4>
                <p className="text-sm text-gray-600">Average delivery time of 45 minutes within city limits</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">100% Secure</h4>
                <p className="text-sm text-gray-600">End-to-end encryption and insurance coverage</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Real-time Tracking</h4>
                <p className="text-sm text-gray-600">Live GPS tracking with minute-by-minute updates</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">24/7 Support</h4>
                <p className="text-sm text-gray-600">Round-the-clock customer service and assistance</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;