import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Quote, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const testimonials = [
    {
      name: "Samantha De Silva",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
      rating: 5,
      text: "After years of chronic back pain, the Panchakarma treatment at Ruseth has been life-changing. The doctors are knowledgeable and caring. I feel rejuvenated and pain-free!"
    },
    {
      name: "Dinesh Kumar",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      rating: 5,
      text: "The herbal treatments helped me manage my diabetes naturally. Dr. Kumar's personalized approach and guidance have improved my quality of life tremendously."
    },
    {
      name: "Nisha Wickramasinghe",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
      rating: 5,
      text: "I came here for stress and anxiety issues. The combination of Ayurvedic medicine, yoga, and meditation has brought peace to my life. Highly recommend!"
    },
    {
      name: "Rajiv Perera",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
      rating: 5,
      text: "The skin care treatments using natural herbs have worked wonders for my complexion. No chemicals, just pure Ayurvedic goodness. Thank you, Ruseth!"
    },
    {
      name: "Priyanka Fernando",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      rating: 5,
      text: "Dr. Priya helped me through my prenatal journey with Ayurvedic care. Both my baby and I are healthy and happy. The care here is exceptional!"
    },
    {
      name: "Anil Jayawardena",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
      rating: 5,
      text: "I've tried many treatments for my digestive issues. The Ayurvedic approach here finally gave me lasting relief. The doctors truly understand holistic healing."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <motion.div 
            className="inline-flex items-center gap-2 text-emerald-600"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Quote className="h-5 w-5" />
            <span className="text-sm uppercase tracking-wider">Testimonials</span>
          </motion.div>
          <motion.h2 
            className="text-4xl text-emerald-900"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            What Our Patients Say
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Real stories from people who found healing and wellness at Ruseth Ayurvedic Hospital
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
            <Card className="border-none shadow-lg rounded-2xl bg-gradient-to-br from-white to-emerald-50 hover:shadow-xl transition-shadow h-full">
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                <p className="text-gray-700 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-3 pt-4 border-t border-emerald-100">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-emerald-100 text-emerald-700">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-emerald-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="inline-flex items-center gap-8 bg-emerald-50 px-8 py-6 rounded-2xl">
            <div>
              <p className="text-4xl text-emerald-700">4.9/5</p>
              <p className="text-sm text-gray-600">Average Rating</p>
            </div>
            <div className="h-12 w-px bg-emerald-200"></div>
            <div>
              <p className="text-4xl text-emerald-700">1,200+</p>
              <p className="text-sm text-gray-600">Happy Patients</p>
            </div>
            <div className="h-12 w-px bg-emerald-200"></div>
            <div>
              <p className="text-4xl text-emerald-700">98%</p>
              <p className="text-sm text-gray-600">Satisfaction Rate</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
