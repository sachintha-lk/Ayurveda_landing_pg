import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Droplets, Leaf, Stethoscope, Sparkles, Flower2, Activity } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const services = [
    {
      icon: Droplets,
      title: "Panchakarma Treatments",
      description: "Deep cleansing and detoxification therapies including Abhyanga, Shirodhara, Vamana, Virechana, and Basti for complete body purification.",
      benefits: ["Detoxification", "Stress Relief", "Rejuvenation"],
      color: "bg-blue-100 text-blue-700"
    },
    {
      icon: Leaf,
      title: "Herbal Medicine",
      description: "Custom-formulated herbal remedies using pure, organic ingredients to treat chronic conditions and promote overall wellness.",
      benefits: ["Natural Healing", "No Side Effects", "Personalized"],
      color: "bg-green-100 text-green-700"
    },
    {
      icon: Stethoscope,
      title: "Doctor Consultations",
      description: "One-on-one consultations with our experienced Ayurvedic physicians for diagnosis, treatment planning, and lifestyle guidance.",
      benefits: ["Expert Advice", "Holistic Approach", "Follow-up Care"],
      color: "bg-purple-100 text-purple-700"
    },
    {
      icon: Sparkles,
      title: "Beauty & Skin Care",
      description: "Natural Ayurvedic treatments for glowing skin, hair care, and anti-aging using traditional methods and organic products.",
      benefits: ["Natural Glow", "Anti-Aging", "Chemical-Free"],
      color: "bg-pink-100 text-pink-700"
    },
    {
      icon: Flower2,
      title: "Yoga & Meditation",
      description: "Guided yoga sessions and meditation practices to complement your healing journey and maintain mental peace.",
      benefits: ["Mind Balance", "Flexibility", "Inner Peace"],
      color: "bg-amber-100 text-amber-700"
    },
    {
      icon: Activity,
      title: "Wellness Programs",
      description: "Customized wellness packages for stress management, weight loss, immunity boosting, and chronic disease management.",
      benefits: ["Custom Plans", "Long-term Results", "Complete Care"],
      color: "bg-emerald-100 text-emerald-700"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-emerald-50 to-green-50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <motion.div 
            className="inline-flex items-center gap-2 text-emerald-600"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="h-5 w-5" />
            <span className="text-sm uppercase tracking-wider">Our Services</span>
          </motion.div>
          <motion.h2 
            className="text-4xl text-emerald-900"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Comprehensive Ayurvedic Care
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover our range of traditional treatments designed to restore balance and promote natural healing
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white rounded-2xl h-full">
              <CardHeader>
                <div className={`${service.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                  <service.icon className="h-7 w-7" />
                </div>
                <CardTitle className="text-emerald-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm text-emerald-700">Key Benefits:</p>
                  <div className="flex flex-wrap gap-2">
                    {service.benefits.map((benefit, idx) => (
                      <span key={idx} className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
                <Button variant="link" className="text-emerald-600 px-0 mt-4">
                  Learn More →
                </Button>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
