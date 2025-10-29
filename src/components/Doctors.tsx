import { Card, CardContent, CardHeader } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Award, GraduationCap, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function Doctors() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const doctors = [
    {
      name: "Dr. Anuja Perera",
      image: "https://images.unsplash.com/photo-1719610894782-7b376085e200?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjEyMzk5OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specialization: "Panchakarma Specialist",
      experience: "15 years",
      education: "BAMS, MD (Ayurveda)",
      expertise: ["Detoxification", "Chronic Pain", "Stress Management"]
    },
    {
      name: "Dr. Rohan Silva",
      image: "https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZG9jdG9yJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MTI1NjEzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      specialization: "Herbal Medicine Expert",
      experience: "12 years",
      education: "BAMS, PhD (Medicinal Plants)",
      expertise: ["Digestive Health", "Immunity", "Skin Disorders"]
    }
  ];

  return (
    <section id="doctors" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <motion.div 
            className="inline-flex items-center gap-2 text-emerald-600"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Award className="h-5 w-5" />
            <span className="text-sm uppercase tracking-wider">Our Team</span>
          </motion.div>
          <motion.h2 
            className="text-4xl text-emerald-900"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Meet Our Expert Doctors
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our team of certified Ayurvedic physicians brings decades of experience in traditional healing
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
            <Card className="border-none shadow-lg hover:shadow-xl transition-all rounded-2xl overflow-hidden group h-full">
              <div className="relative h-64 bg-gradient-to-br from-emerald-100 to-green-100 overflow-hidden">
                <Avatar className="absolute inset-0 w-full h-full rounded-none">
                  <AvatarImage src={doctor.image} alt={doctor.name} className="object-cover" />
                  <AvatarFallback>{doctor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
              </div>
              <CardHeader className="text-center pb-3">
                <h3 className="text-xl text-emerald-900">{doctor.name}</h3>
                <p className="text-emerald-600">{doctor.specialization}</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <GraduationCap className="h-4 w-4 text-emerald-600" />
                  <span>{doctor.education}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4 text-emerald-600" />
                  <span>{doctor.experience} of experience</span>
                </div>
                <div className="pt-2">
                  <p className="text-xs text-gray-500 mb-2">Expertise:</p>
                  <div className="flex flex-wrap gap-1">
                    {doctor.expertise.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs bg-emerald-50 text-emerald-700 border-none">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
