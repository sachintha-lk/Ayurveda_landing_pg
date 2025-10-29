import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Leaf, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-emerald-50 to-green-50 py-20 overflow-hidden">
      <motion.div 
        className="absolute top-10 right-10 opacity-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        <Leaf className="h-64 w-64 text-emerald-600" />
      </motion.div>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.div 
              className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles className="h-4 w-4 text-emerald-700" />
              <span className="text-sm text-emerald-800">Authentic Ayurvedic Care</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl lg:text-6xl text-emerald-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Healing through Nature & Tradition
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Experience the ancient wisdom of Ayurveda with our expert practitioners. 
              Restore balance, rejuvenate your body, and rediscover wellness naturally.
            </motion.p>
            
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button className="bg-emerald-600 hover:bg-emerald-700 transition-all hover:scale-105">
                <a href="#appointment">Book Consultation</a>
              </Button>
              <Button variant="outline" className="border-emerald-600 text-emerald-700 hover:bg-emerald-50 transition-all hover:scale-105">
                <a href="#services">Our Services</a>
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex gap-8 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {[
                { value: "15+", label: "Years Experience" },
                { value: "10k+", label: "Happy Patients" },
                { value: "100%", label: "Natural Herbs" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <p className="text-3xl text-emerald-700">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.div 
              className="absolute -top-4 -right-4 w-full h-full bg-emerald-200 rounded-3xl opacity-20"
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 2, 0]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1700996386804-e3c24222c8ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxheXVydmVkaWMlMjBzcGElMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NjEzMTM5NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Ayurvedic wellness treatment"
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
