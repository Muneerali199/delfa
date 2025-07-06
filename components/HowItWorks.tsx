'use client';

import { motion, Variants } from 'framer-motion';
import { Search, Calendar, Truck, CheckCircle, MapPin, Clock, Shield, Star, Users, Package, TrendingUp, Building, Zap, Globe, Award, Target, ArrowRight, Sparkles } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Choose Service",
      description: "Select from our comprehensive range of logistics services tailored to your specific delivery needs.",
      color: "from-blue-500 to-purple-500",
      bgColor: "from-blue-50/80 to-purple-50/80",
      details: ["Package Delivery", "Freight Transport", "Express Service", "Secure Logistics"]
    },
    {
      icon: Calendar,
      title: "Book & Schedule",
      description: "Pick your preferred date and time slot. Our intelligent system matches you with the best available driver.",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50/80 to-pink-50/80",
      details: ["Instant Booking", "Flexible Scheduling", "Driver Matching", "Price Estimation"]
    },
    {
      icon: Truck,
      title: "Track Delivery",
      description: "Monitor your shipment in real-time with our advanced GPS tracking system and receive live updates.",
      color: "from-pink-500 to-orange-500",
      bgColor: "from-pink-50/80 to-orange-50/80",
      details: ["Real-time GPS", "Live Updates", "ETA Notifications", "Route Optimization"]
    },
    {
      icon: CheckCircle,
      title: "Delivered Safe",
      description: "Receive confirmation with digital proof of delivery once your package reaches its destination safely.",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50/80 to-red-50/80",
      details: ["Digital Proof", "Photo Confirmation", "Signature Capture", "Delivery Receipt"]
    }
  ];

  const mainStats = [
    { 
      icon: MapPin, 
      title: "22+", 
      subtitle: "Cities Covered", 
      description: "Pan-India presence with expanding network",
      color: "from-blue-600 to-purple-600",
      bgGradient: "from-blue-50/90 to-purple-50/90",
      accent: "bg-blue-100"
    },
    { 
      icon: Clock, 
      title: "45 Min", 
      subtitle: "Average Delivery", 
      description: "Lightning-fast delivery within city limits",
      color: "from-green-600 to-teal-600",
      bgGradient: "from-green-50/90 to-teal-50/90",
      accent: "bg-green-100"
    },
    { 
      icon: Shield, 
      title: "100%", 
      subtitle: "Secure Deliveries", 
      description: "End-to-end security with full insurance",
      color: "from-orange-600 to-red-600",
      bgGradient: "from-orange-50/90 to-red-50/90",
      accent: "bg-orange-100"
    },
    { 
      icon: Star, 
      title: "4.8/5", 
      subtitle: "Customer Rating", 
      description: "Exceptional service quality and satisfaction",
      color: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-50/90 to-pink-50/90",
      accent: "bg-purple-100"
    }
  ];

  const additionalStats = [
    { icon: Users, label: "Active Drivers", value: "15,000+", trend: "+12%", color: "text-blue-600", bg: "bg-blue-50" },
    { icon: Package, label: "Monthly Deliveries", value: "750K+", trend: "+18%", color: "text-green-600", bg: "bg-green-50" },
    { icon: Building, label: "Warehouses", value: "85+", trend: "+25%", color: "text-purple-600", bg: "bg-purple-50" },
    { icon: TrendingUp, label: "Success Rate", value: "99.2%", trend: "+2%", color: "text-orange-600", bg: "bg-orange-50" },
    { icon: Zap, label: "Express Orders", value: "125K+", trend: "+35%", color: "text-red-600", bg: "bg-red-50" },
    { icon: Globe, label: "Coverage Area", value: "50,000+ km²", trend: "100%", color: "text-teal-600", bg: "bg-teal-50" }
  ];

  const achievements = [
    { icon: Award, title: "Best Logistics App 2024", subtitle: "Industry Recognition", color: "from-yellow-500 to-orange-500" },
    { icon: Target, title: "99.2% On-Time Delivery", subtitle: "Performance Excellence", color: "from-green-500 to-teal-500" },
    { icon: Users, title: "1M+ Happy Customers", subtitle: "Customer Trust", color: "from-blue-500 to-purple-500" },
    { icon: Globe, title: "22+ Cities Network", subtitle: "Pan-India Presence", color: "from-purple-500 to-pink-500" }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  return (
    <section id="how-it-works" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/50 relative overflow-hidden">
      {/* Enhanced Background Elements - Responsive */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 md:w-[500px] h-64 sm:h-96 md:h-[500px] bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[400px] md:w-[600px] h-80 sm:h-[400px] md:h-[600px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* Floating Particles - Responsive */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section - Responsive */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4 sm:mb-6"
            initial={{ scale: 0, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-orange-500" />
            <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
              Simple Process
            </span>
            <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-orange-500" />
          </motion.div>
          
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8 leading-tight px-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            How It <span className="text-gradient bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Works</span>
          </motion.h2>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Getting your packages delivered is simple and straightforward. 
            Follow these easy steps to experience seamless logistics with real-time tracking and exceptional service.
          </motion.p>
        </motion.div>

        {/* Enhanced Steps Section - Responsive */}
        <motion.div
          className="relative mb-16 sm:mb-20 md:mb-24 lg:mb-28"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Enhanced Connection Line - Hidden on mobile, visible on large screens */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-2 transform -translate-y-1/2">
            <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-orange-500 rounded-full shadow-lg" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 via-pink-400 to-orange-400 rounded-full blur-sm opacity-50" />
          </div>
          
          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Enhanced Step Icon - Responsive */}
                <div className="relative mb-6 sm:mb-8">
                  <motion.div
                    className={`w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 mx-auto bg-gradient-to-br ${step.color} rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-xl sm:shadow-2xl relative overflow-hidden group`}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: [0, -5, 5, 0],
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                    <step.icon className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 text-white relative z-10 drop-shadow-lg" />
                    
                    {/* Floating particles around icon */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full"
                          style={{
                            left: `${20 + Math.random() * 60}%`,
                            top: `${20 + Math.random() * 60}%`,
                          }}
                          animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 w-8 sm:w-10 h-8 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-lg sm:shadow-xl border-2 sm:border-4 border-gray-50"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring", bounce: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-sm sm:text-lg font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">{index + 1}</span>
                  </motion.div>
                </div>

                {/* Enhanced Step Content - Responsive */}
                <motion.div 
                  className={`bg-gradient-to-br ${step.bgColor} backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-500 h-full relative overflow-hidden group border border-white/20`}
                  whileHover={{ 
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">{step.description}</p>
                    
                    {/* Enhanced Step Details - Responsive */}
                    <div className="space-y-2 sm:space-y-3">
                      {step.details.map((detail, idx) => (
                        <motion.div 
                          key={idx} 
                          className="flex items-center text-xs sm:text-sm text-gray-700 bg-white/40 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className={`w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gradient-to-r ${step.color} rounded-full mr-2 sm:mr-3 shadow-sm`} />
                          <span className="font-medium">{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Main Stats Section - Responsive */}
        <motion.div
          className="mb-16 sm:mb-20 md:mb-24 lg:mb-28"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12 sm:mb-16">
            <motion.h3 
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Why Choose <span className="text-gradient bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Delfa?</span>
            </motion.h3>
            <motion.p 
              className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Industry-leading performance metrics that set us apart from the competition
            </motion.p>
          </div>

          {/* Responsive Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {mainStats.map((stat, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${stat.bgGradient} backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center relative overflow-hidden group border border-white/30 shadow-lg sm:shadow-xl`}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: "spring",
                  bounce: 0.3
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.2)"
                }}
              >
                <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
                
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color}`} />
                </div>
                
                <div className="relative z-10">
                  <motion.div 
                    className={`w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-gradient-to-r ${stat.color} rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xl sm:shadow-2xl relative overflow-hidden`}
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: [0, -10, 10, 0],
                      boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.3)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />
                    <stat.icon className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 text-white relative z-10 drop-shadow-lg" />
                  </motion.div>
                  
                  <motion.div 
                    className={`text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 sm:mb-3`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    {stat.title}
                  </motion.div>
                  <div className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{stat.subtitle}</div>
                  <div className="text-sm text-gray-600 leading-relaxed px-2">{stat.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Additional Stats Grid - Responsive */}
        <motion.div
          className="mb-16 sm:mb-20 md:mb-24 lg:mb-28"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 relative overflow-hidden shadow-xl sm:shadow-2xl border border-white/20">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-orange-50/50" />
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
            
            <div className="relative z-10">
              <motion.h3 
                className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12 px-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Live Performance <span className="text-gradient bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Metrics</span>
              </motion.h3>
              
              {/* Responsive Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
                {additionalStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className={`text-center ${stat.bg} backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/40 group`}
                    whileHover={{ 
                      scale: 1.05,
                      y: -5,
                      boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)"
                    }}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      type: "spring",
                      bounce: 0.4
                    }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      <stat.icon className={`w-8 sm:w-10 h-8 sm:h-10 ${stat.color} mx-auto mb-3 sm:mb-4 drop-shadow-sm`} />
                    </motion.div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2 font-medium leading-tight">{stat.label}</div>
                    <div className="text-xs text-green-600 font-semibold bg-green-100 rounded-full px-2 py-1 inline-block">
                      {stat.trend}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Achievements Section - Responsive */}
        <motion.div
          className="mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12 sm:mb-16">
            <motion.h3 
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our <span className="text-gradient bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Achievements</span>
            </motion.h3>
            <motion.p 
              className="text-lg sm:text-xl text-gray-600 leading-relaxed px-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Recognition and milestones that showcase our excellence
            </motion.p>
          </div>
          
          {/* Responsive Achievements Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-500 text-center border border-white/30 group relative overflow-hidden"
                whileHover={{ 
                  scale: 1.03, 
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.2)"
                }}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  type: "spring",
                  bounce: 0.3
                }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent" />
                
                <div className="relative z-10">
                  <motion.div 
                    className={`w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r ${achievement.color} rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-xl sm:shadow-2xl`}
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: [0, -10, 10, 0],
                      boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.3)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <achievement.icon className="w-8 sm:w-10 h-8 sm:h-10 text-white drop-shadow-lg" />
                  </motion.div>
                  <h4 className="font-bold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg leading-tight px-2">{achievement.title}</h4>
                  <p className="text-sm text-gray-600">{achievement.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced CTA Section - Responsive */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="glass-card rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden shadow-xl sm:shadow-2xl border border-white/20">
            {/* Enhanced Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-red-500 to-purple-500" />
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.3) 2px, transparent 2px)`,
                backgroundSize: '40px 40px'
              }} />
            </div>
            
            <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />
            
            <div className="relative z-10">
              <motion.div
                className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 md:mb-10 shadow-xl sm:shadow-2xl relative overflow-hidden"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: [0, -5, 5, 0],
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />
                <Truck className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 text-white relative z-10 drop-shadow-lg" />
              </motion.div>
              
              <motion.h3 
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 px-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Ready to Get Started?
              </motion.h3>
              
              <motion.p 
                className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed px-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Join thousands of satisfied customers who trust Delfa for their logistics needs. 
                Experience the future of delivery services with our cutting-edge technology and exceptional service.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.button
                  className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 sm:px-10 md:px-12 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:shadow-2xl transition-all duration-300 neon-glow flex items-center justify-center gap-2 sm:gap-3 group"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 25px 50px -12px rgba(255, 107, 53, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  Book Your First Delivery
                  <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
                
                <motion.button
                  className="w-full sm:w-auto border-2 border-gray-300 text-gray-700 px-8 sm:px-10 md:px-12 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:border-orange-500 hover:text-orange-500 hover:bg-orange-50 transition-all duration-300 backdrop-blur-sm"
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: "#f97316",
                    backgroundColor: "rgba(255, 237, 213, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;