import { Card, CardContent } from './ui/card';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function ContactLocation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-emerald-50 to-green-50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <motion.div 
            className="inline-flex items-center gap-2 text-emerald-600"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <MapPin className="h-5 w-5" />
            <span className="text-sm uppercase tracking-wider">Contact Us</span>
          </motion.div>
          <motion.h2 
            className="text-4xl text-emerald-900"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Visit Our Hospital
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We're here to help you on your journey to natural wellness
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="border-none shadow-lg rounded-2xl">
              <CardContent className="p-8 space-y-6">
                <h3 className="text-2xl text-emerald-900">Get in Touch</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-100 p-3 rounded-xl">
                      <MapPin className="h-6 w-6 text-emerald-700" />
                    </div>
                    <div>
                      <p className="text-emerald-900">Address</p>
                      <p className="text-gray-600">
                        123, Piliyandala<br />
                        Sri Lanka
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-100 p-3 rounded-xl">
                      <Phone className="h-6 w-6 text-emerald-700" />
                    </div>
                    <div>
                      <p className="text-emerald-900">Phone</p>
                      <p className="text-gray-600">+94 11 234 56781</p>
                      <p className="text-gray-600">+94 77 123 45672 (Mobile)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-100 p-3 rounded-xl">
                      <Mail className="h-6 w-6 text-emerald-700" />
                    </div>
                    <div>
                      <p className="text-emerald-900">Email</p>
                      <p className="text-gray-600">info@rusethayurveda.lk</p>
                      <p className="text-gray-600">appointments@rusethayurveda.lk</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-emerald-100 p-3 rounded-xl">
                      <Clock className="h-6 w-6 text-emerald-700" />
                    </div>
                    <div>
                      <p className="text-emerald-900">Working Hours</p>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 rounded-xl">
                  <Navigation className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg rounded-2xl bg-gradient-to-br from-emerald-600 to-green-600 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl mb-4">Emergency Contact</h3>
                <p className="mb-4 text-emerald-50">
                  For urgent medical assistance or emergencies, please call our 24/7 helpline:
                </p>
                <p className="text-3xl mb-4">+94 11 EMERGENCY</p>
                <p className="text-sm text-emerald-50">
                  Our team is always ready to assist you with immediate care and support.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            className="lg:h-full"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="border-none shadow-lg rounded-2xl overflow-hidden h-full">
              <CardContent className="p-0 h-full min-h-[500px]">
                <div className="relative w-full h-full">
                  <iframe
                    title="Ruseth Ayurvedic Hospital Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.899724427749!2d79.92042237532642!3d6.782056893215003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24f4dac2f51ff%3A0x422d4737c5cd9971!2sRuseth%20Ayurveda%20Health%20Promotion%20Centre!5e0!3m2!1sen!2slk!4v1761755645879!5m2!1sen!2slk"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '500px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />

                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
