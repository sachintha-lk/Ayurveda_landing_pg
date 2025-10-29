import { ImageWithFallback } from './figma/ImageWithFallback';
import { Leaf, Heart, Shield, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function AboutUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Leaf,
      title: "Natural Healing",
      description: "100% organic herbs and traditional methods"
    },
    {
      icon: Heart,
      title: "Patient Care",
      description: "Personalized treatment plans for every individual"
    },
    {
      icon: Shield,
      title: "Trusted Practice",
      description: "15+ years of excellence in Ayurvedic medicine"
    },
    {
      icon: Award,
      title: "Expert Team",
      description: "Certified Ayurvedic doctors and therapists"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <motion.div 
              className="absolute -bottom-6 -left-6 w-full h-full bg-emerald-100 rounded-3xl"
              animate={{ 
                scale: [1, 1.02, 1],
                rotate: [0, -1, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1606733572375-35620adc4a18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwcGVhY2VmdWwlMjBuYXR1cmV8ZW58MXx8fHwxNzYxMjIyODg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Meditation and wellness"
              className="relative rounded-3xl shadow-xl w-full h-[500px] object-cover"
            />
          </motion.div>
          
          <div className="space-y-6">
            <motion.div 
              className="inline-flex items-center gap-2 text-emerald-600"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <Leaf className="h-5 w-5" />
              <span className="text-sm uppercase tracking-wider">About Us</span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl text-emerald-900"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Ancient Wisdom for Modern Wellness
            </motion.h2>
            
            <motion.p 
              className="text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              At Ruseth Ayurvedic Hospital, we blend centuries-old Ayurvedic traditions with modern healthcare practices. 
              Our holistic approach addresses the root cause of ailments, promoting natural healing and long-term wellness.
            </motion.p>
            
            <motion.p 
              className="text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Founded with a vision to make authentic Ayurvedic treatments accessible, we specialize in Panchakarma therapies, 
              herbal medicine, and personalized wellness programs. Our team of experienced practitioners is dedicated to 
              guiding you on your journey to optimal health.
            </motion.p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              {values.map((value, index) => (
                <motion.div 
                  key={index} 
                  className="flex gap-3"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-emerald-100 p-3 rounded-xl h-fit">
                    <value.icon className="h-5 w-5 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="text-emerald-900">{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
