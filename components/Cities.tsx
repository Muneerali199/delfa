'use client';

import { motion } from 'framer-motion';
import { MapPin, Truck, Clock, Star, Users, Package, TrendingUp, Building } from 'lucide-react';

const Cities = () => {
  const cities = [
    { 
      name: "Mumbai", 
      deliveries: "85,000+", 
      rating: 4.9, 
      population: "20.4M",
      area: "603 km²",
      avgDeliveryTime: "45 min",
      activeVehicles: "2,500+",
      warehouses: 12,
      dailyOrders: "3,200+",
      image: "https://images.pexels.com/photos/1655329/pexels-photo-1655329.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      gradient: "from-blue-500 to-purple-600"
    },
    { 
      name: "Delhi", 
      deliveries: "78,000+", 
      rating: 4.8, 
      population: "32.9M",
      area: "1,484 km²",
      avgDeliveryTime: "52 min",
      activeVehicles: "2,200+",
      warehouses: 15,
      dailyOrders: "2,900+",
      image: "https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      gradient: "from-red-500 to-pink-600"
    },
    { 
      name: "Bangalore", 
      deliveries: "65,000+", 
      rating: 4.9, 
      population: "12.3M",
      area: "741 km²",
      avgDeliveryTime: "38 min",
      activeVehicles: "1,800+",
      warehouses: 8,
      dailyOrders: "2,400+",
      image: "https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      gradient: "from-green-500 to-teal-600"
    },
    { 
      name: "Hyderabad", 
      deliveries: "52,000+", 
      rating: 4.7, 
      population: "10.0M",
      area: "650 km²",
      avgDeliveryTime: "42 min",
      activeVehicles: "1,500+",
      warehouses: 6,
      dailyOrders: "1,900+",
      image: "https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      gradient: "from-purple-500 to-indigo-600"
    },
    { 
      name: "Chennai", 
      deliveries: "58,000+", 
      rating: 4.8, 
      population: "11.0M",
      area: "426 km²",
      avgDeliveryTime: "40 min",
      activeVehicles: "1,600+",
      warehouses: 7,
      dailyOrders: "2,100+",
      image: "https://images.pexels.com/photos/2587595/pexels-photo-2587595.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      gradient: "from-orange-500 to-red-600"
    },
    { 
      name: "Pune", 
      deliveries: "45,000+", 
      rating: 4.9, 
      population: "7.4M",
      area: "331 km²",
      avgDeliveryTime: "35 min",
      activeVehicles: "1,200+",
      warehouses: 5,
      dailyOrders: "1,600+",
      image: "https://images.pexels.com/photos/1007066/pexels-photo-1007066.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      gradient: "from-cyan-500 to-blue-600"
    },
    { 
      name: "Ahmedabad", 
      deliveries: "38,000+", 
      rating: 4.6, 
      population: "8.4M",
      area: "505 km²",
      avgDeliveryTime: "48 min",
      activeVehicles: "1,000+",
      warehouses: 4,
      dailyOrders: "1,400+",
      image: "https://images.pexels.com/photos/1007066/pexels-photo-1007066.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      gradient: "from-yellow-500 to-orange-600"
    },
    { 
      name: "Kolkata", 
      deliveries: "48,000+", 
      rating: 4.7, 
      population: "14.9M",
      area: "205 km²",
      avgDeliveryTime: "50 min",
      activeVehicles: "1,300+",
      warehouses: 6,
      dailyOrders: "1,800+",
      image: "https://images.pexels.com/photos/2587595/pexels-photo-2587595.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      gradient: "from-pink-500 to-rose-600"
    },
    { 
      name: "Jaipur", 
      deliveries: "32,000+", 
      rating: 4.8, 
      population: "3.9M",
      area: "467 km²",
      avgDeliveryTime: "45 min",
      activeVehicles: "800+",
      warehouses: 3,
      dailyOrders: "1,200+",
      image: "https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      gradient: "from-amber-500 to-yellow-600"
    },
    { 
      name: "Surat", 
      deliveries: "28,000+", 
      rating: 4.5, 
      population: "6.5M",
      area: "327 km²",
      avgDeliveryTime: "40 min",
      activeVehicles: "700+",
      warehouses: 3,
      dailyOrders: "1,000+",
      image: "https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      gradient: "from-emerald-500 to-green-600"
    },
    { 
      name: "Lucknow", 
      deliveries: "25,000+", 
      rating: 4.6, 
      population: "3.4M",
      area: "631 km²",
      avgDeliveryTime: "55 min",
      activeVehicles: "600+",
      warehouses: 2,
      dailyOrders: "900+",
      image: "https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      gradient: "from-violet-500 to-purple-600"
    },
    { 
      name: "Kanpur", 
      deliveries: "22,000+", 
      rating: 4.4, 
      population: "3.0M",
      area: "403 km²",
      avgDeliveryTime: "60 min",
      activeVehicles: "500+",
      warehouses: 2,
      dailyOrders: "800+",
      image: "https://images.pexels.com/photos/1655329/pexels-photo-1655329.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      gradient: "from-slate-500 to-gray-600"
    }
  ];

  return (
    <section id="cities" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
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
              22+ Cities & Growing
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            We Serve <span className="text-gradient">Major Cities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Expanding our reach across major Indian cities with real-time data, 
            advanced logistics infrastructure, and dedicated service teams.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {cities.map((city, index) => (
            <motion.div
              key={index}
              className="city-card group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* City Image */}
              <div className="relative h-56 overflow-hidden rounded-t-2xl">
                <img 
                  src={city.image} 
                  alt={city.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${city.gradient} opacity-60`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* City Header */}
                <div className="absolute top-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5 text-white" />
                      <span className="text-white font-semibold">{city.name}</span>
                    </div>
                    <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm font-semibold">{city.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Population Badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-white" />
                      <span className="text-white text-sm font-semibold">{city.population}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* City Stats */}
              <div className="p-6 bg-white rounded-b-2xl">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Package className="w-4 h-4 text-orange-500 mr-1" />
                    </div>
                    <div className="text-lg font-bold text-gray-900">{city.deliveries}</div>
                    <div className="text-xs text-gray-500">Monthly Deliveries</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Clock className="w-4 h-4 text-blue-500 mr-1" />
                    </div>
                    <div className="text-lg font-bold text-gray-900">{city.avgDeliveryTime}</div>
                    <div className="text-xs text-gray-500">Avg Delivery</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Truck className="w-4 h-4 text-green-500 mr-1" />
                    </div>
                    <div className="text-lg font-bold text-gray-900">{city.activeVehicles}</div>
                    <div className="text-xs text-gray-500">Active Vehicles</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Building className="w-4 h-4 text-purple-500 mr-1" />
                    </div>
                    <div className="text-lg font-bold text-gray-900">{city.warehouses}</div>
                    <div className="text-xs text-gray-500">Warehouses</div>
                  </div>
                </div>

                {/* Daily Orders */}
                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-orange-500" />
                      <span className="text-sm font-semibold text-gray-700">Daily Orders</span>
                    </div>
                    <span className="text-lg font-bold text-orange-600">{city.dailyOrders}</span>
                  </div>
                </div>

                {/* Service Status */}
                <div className="mt-4 flex items-center justify-center">
                  <div className="flex items-center space-x-2 bg-green-50 text-green-700 px-3 py-1 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs font-semibold">Active Service</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Stats */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="glass-card rounded-3xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <motion.div 
                  className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  22+
                </motion.div>
                <div className="text-gray-600 font-medium">Cities Covered</div>
                <div className="text-sm text-gray-500 mt-1">Across India</div>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  750K+
                </motion.div>
                <div className="text-gray-600 font-medium">Monthly Deliveries</div>
                <div className="text-sm text-gray-500 mt-1">And Growing</div>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  15K+
                </motion.div>
                <div className="text-gray-600 font-medium">Active Vehicles</div>
                <div className="text-sm text-gray-500 mt-1">Real-time Tracking</div>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  99.2%
                </motion.div>
                <div className="text-gray-600 font-medium">On-Time Delivery</div>
                <div className="text-sm text-gray-500 mt-1">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cities;