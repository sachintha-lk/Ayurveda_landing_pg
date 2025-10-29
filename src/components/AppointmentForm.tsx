import { useState, useRef } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Calendar, User, Phone, Mail, MessageSquare, Clock, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';

const doctors = [
  {
    id: 'dr-anuja',
    name: 'Dr. Anuja Perera',
    specialty: 'Panchakarma Specialist',
    availability: 'Available Today',
    image: '👩‍⚕️'
  },
  {
    id: 'dr-rohan',
    name: 'Dr. Rohan Silva',
    specialty: 'Herbal Medicine Expert',
    availability: 'Available Tomorrow',
    image: '👨‍⚕️'
  }
];

const timeSlots = [
  { value: 'morning', label: 'Morning', time: '9:00 AM - 12:00 PM' },
  { value: 'afternoon', label: 'Afternoon', time: '2:00 PM - 5:00 PM' },
  { value: 'evening', label: 'Evening', time: '5:00 PM - 7:00 PM' }
];

export function AppointmentForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    doctor: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Appointment request submitted! We will contact you soon to confirm.');
    setFormData({ name: '', email: '', phone: '', date: '', time: '', doctor: '', message: '' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="appointment" className="relative py-24 overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-6">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm border border-emerald-100"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <Sparkles className="h-4 w-4 text-emerald-600" />
              <span className="text-sm text-emerald-900">Begin Your Healing Journey</span>
            </motion.div>
            
            <motion.h2 
              className="text-5xl md:text-6xl text-emerald-900"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Schedule Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">Consultation</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Experience personalized Ayurvedic care. Book your appointment in just a few clicks.
            </motion.p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left Sidebar - Info Cards */}
            <motion.div 
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Why Choose Us Card */}
              <Card className="border-none shadow-xl bg-white/80 backdrop-blur-sm overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400 to-green-400 rounded-full -mr-16 -mt-16 opacity-20"></div>
                <CardContent className="p-8 relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-emerald-100 rounded-2xl">
                      <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl text-emerald-900">Why Book With Us?</h3>
                  </div>
                  <div className="space-y-4">
                    {[
                      'Expert Ayurvedic physicians',
                      '24-hour confirmation guarantee',
                      'Personalized treatment plans',
                      'Flexible rescheduling options'
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      >
                        <div className="mt-1 h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                          <div className="h-2 w-2 rounded-full bg-emerald-600"></div>
                        </div>
                        <p className="text-gray-700">{feature}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Cards */}
              <div className="space-y-4">
                {[
                  { icon: Phone, label: 'Quick Call', value: '+94 11 234 5678', color: 'emerald' },
                  { icon: Mail, label: 'Email Support', value: 'info@rusethayurveda.lk', color: 'green' },
                  { icon: Clock, label: 'Working Hours', value: 'Mon - Sat: 9AM - 7PM', color: 'teal' }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    className="group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    <Card className="border-none shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer">
                      <CardContent className="p-5">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 bg-${contact.color}-100 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                            <contact.icon className={`h-5 w-5 text-${contact.color}-600`} />
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-gray-500">{contact.label}</p>
                            <p className="text-emerald-900">{contact.value}</p>
                          </div>
                          <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Trust Badge */}
              <motion.div
                className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-6 text-white text-center shadow-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <div className="text-4xl mb-2">⭐⭐⭐⭐⭐</div>
                <p className="text-emerald-50 mb-2">Trusted by 1000+ patients</p>
                <p className="text-sm text-emerald-100">Average response time: 2 hours</p>
              </motion.div>
            </motion.div>

            {/* Right Side - Booking Form */}
            <motion.div 
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="border-none shadow-2xl bg-white/90 backdrop-blur-md overflow-hidden">
                {/* Card Header */}
                <div className="relative bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 p-8 overflow-hidden">
                  <div className="absolute inset-0 bg-grid-white/10"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-3xl text-white">Book Appointment</h3>
                      <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                        Online Booking
                      </Badge>
                    </div>
                    <p className="text-emerald-50">Fill in your details below and we'll confirm within 24 hours</p>
                  </div>
                </div>

                <CardContent className="p-8">
                  <motion.form 
                    onSubmit={handleSubmit} 
                    className="space-y-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  >
                    {/* Personal Information */}
                    <motion.div variants={itemVariants} className="space-y-6">
                      <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
                        <User className="h-5 w-5 text-emerald-600" />
                        <h4 className="text-emerald-900">Personal Information</h4>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2 group">
                          <Label htmlFor="name" className="text-gray-700">Full Name *</Label>
                          <div className="relative">
                            <Input
                              id="name"
                              required
                              placeholder="John Doe"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="border-2 border-gray-200 focus:border-emerald-500 rounded-xl pl-4 pr-4 py-6 transition-all duration-300 group-hover:border-emerald-300"
                            />
                          </div>
                        </div>

                        <div className="space-y-2 group">
                          <Label htmlFor="phone" className="text-gray-700">Phone Number *</Label>
                          <div className="relative">
                            <Input
                              id="phone"
                              type="tel"
                              required
                              placeholder="+94 XX XXX XXXX"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="border-2 border-gray-200 focus:border-emerald-500 rounded-xl pl-4 pr-4 py-6 transition-all duration-300 group-hover:border-emerald-300"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 group">
                        <Label htmlFor="email" className="text-gray-700">Email Address *</Label>
                        <div className="relative">
                          <Input
                            id="email"
                            type="email"
                            required
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="border-2 border-gray-200 focus:border-emerald-500 rounded-xl pl-4 pr-4 py-6 transition-all duration-300 group-hover:border-emerald-300"
                          />
                        </div>
                      </div>
                    </motion.div>

                    {/* Select Doctor */}
                    <motion.div variants={itemVariants} className="space-y-6">
                      <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
                        <User className="h-5 w-5 text-emerald-600" />
                        <h4 className="text-emerald-900">Choose Your Doctor</h4>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        {doctors.map((doctor) => (
                          <motion.div
                            key={doctor.id}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setFormData({ ...formData, doctor: doctor.id })}
                            className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                              formData.doctor === doctor.id
                                ? 'border-emerald-500 bg-emerald-50 shadow-lg'
                                : 'border-gray-200 bg-white hover:border-emerald-300 hover:shadow-md'
                            }`}
                          >
                            {formData.doctor === doctor.id && (
                              <div className="absolute top-4 right-4">
                                <div className="h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center">
                                  <CheckCircle2 className="h-4 w-4 text-white" />
                                </div>
                              </div>
                            )}
                            <div className="text-4xl mb-3">{doctor.image}</div>
                            <h5 className="text-emerald-900 mb-1">{doctor.name}</h5>
                            <p className="text-sm text-gray-600 mb-2">{doctor.specialty}</p>
                            <Badge className={`text-xs ${
                              formData.doctor === doctor.id 
                                ? 'bg-emerald-500 text-white' 
                                : 'bg-green-100 text-green-700'
                            }`}>
                              {doctor.availability}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                      
                      <div className="text-center">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, doctor: 'any' })}
                          className={`text-sm px-4 py-2 rounded-full transition-all duration-300 ${
                            formData.doctor === 'any'
                              ? 'bg-emerald-600 text-white'
                              : 'text-emerald-600 hover:bg-emerald-50'
                          }`}
                        >
                          Any Available Doctor
                        </button>
                      </div>
                    </motion.div>

                    {/* Date & Time Selection */}
                    <motion.div variants={itemVariants} className="space-y-6">
                      <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
                        <Calendar className="h-5 w-5 text-emerald-600" />
                        <h4 className="text-emerald-900">Preferred Date & Time</h4>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2 group">
                          <Label htmlFor="date" className="text-gray-700">Select Date *</Label>
                          <Input
                            id="date"
                            type="date"
                            required
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className="border-2 border-gray-200 focus:border-emerald-500 rounded-xl pl-4 pr-4 py-6 transition-all duration-300 group-hover:border-emerald-300"
                            min={new Date().toISOString().split('T')[0]}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label className="text-gray-700">Select Time Slot *</Label>
                          <div className="space-y-2">
                            {timeSlots.map((slot) => (
                              <motion.button
                                key={slot.value}
                                type="button"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setFormData({ ...formData, time: slot.value })}
                                className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                                  formData.time === slot.value
                                    ? 'border-emerald-500 bg-emerald-50'
                                    : 'border-gray-200 hover:border-emerald-300 bg-white'
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-emerald-900">{slot.label}</p>
                                    <p className="text-sm text-gray-600">{slot.time}</p>
                                  </div>
                                  {formData.time === slot.value && (
                                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                                  )}
                                </div>
                              </motion.button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Additional Message */}
                    <motion.div variants={itemVariants} className="space-y-6">
                      <div className="flex items-center gap-2 pb-2 border-b border-gray-200">
                        <MessageSquare className="h-5 w-5 text-emerald-600" />
                        <h4 className="text-emerald-900">Additional Information</h4>
                      </div>

                      <div className="space-y-2 group">
                        <Label htmlFor="message" className="text-gray-700">Tell us about your health concerns (Optional)</Label>
                        <Textarea
                          id="message"
                          placeholder="Describe your symptoms, medical history, or any specific questions you have..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="border-2 border-gray-200 focus:border-emerald-500 rounded-xl min-h-[120px] transition-all duration-300 group-hover:border-emerald-300"
                        />
                      </div>
                    </motion.div>

                    {/* Privacy Notice */}
                    <motion.div 
                      variants={itemVariants}
                      className="bg-gradient-to-r from-emerald-50 to-green-50 p-5 rounded-2xl border border-emerald-100"
                    >
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 mt-1">
                          <div className="h-5 w-5 rounded-full bg-emerald-200 flex items-center justify-center">
                            <div className="h-2 w-2 rounded-full bg-emerald-600"></div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-700">
                          By submitting this form, you agree to be contacted by Ruseth Ayurvedic Hospital regarding your appointment. 
                          We respect your privacy and will never share your information.
                        </p>
                      </div>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div variants={itemVariants}>
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white rounded-xl py-7 shadow-lg hover:shadow-xl transition-all duration-300 group"
                      >
                        <span className="flex items-center justify-center gap-2">
                          <Calendar className="h-5 w-5" />
                          Confirm Appointment
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </Button>
                    </motion.div>
                  </motion.form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
