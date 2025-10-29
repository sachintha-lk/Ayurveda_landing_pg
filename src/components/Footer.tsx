import { Leaf, Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Separator } from './ui/separator';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-emerald-900 to-green-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-emerald-600 p-2 rounded-full">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-white">Ruseth Ayurvedic</h3>
                <p className="text-xs text-emerald-200">Traditional Healing</p>
              </div>
            </div>
            <p className="text-emerald-100 text-sm">
              Experience authentic Ayurvedic treatments and holistic wellness care. 
              Healing naturally for over 15 years.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-emerald-800 hover:bg-emerald-700 p-2 rounded-full transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="bg-emerald-800 hover:bg-emerald-700 p-2 rounded-full transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="bg-emerald-800 hover:bg-emerald-700 p-2 rounded-full transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="bg-emerald-800 hover:bg-emerald-700 p-2 rounded-full transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="bg-emerald-800 hover:bg-emerald-700 p-2 rounded-full transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-emerald-100 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-emerald-100 hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#doctors" className="text-emerald-100 hover:text-white transition-colors">Our Doctors</a></li>
              <li><a href="#testimonials" className="text-emerald-100 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#appointment" className="text-emerald-100 hover:text-white transition-colors">Book Appointment</a></li>
              <li><a href="#contact" className="text-emerald-100 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-white">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-emerald-100">Panchakarma Treatments</li>
              <li className="text-emerald-100">Herbal Medicine</li>
              <li className="text-emerald-100">Doctor Consultations</li>
              <li className="text-emerald-100">Beauty & Skin Care</li>
              <li className="text-emerald-100">Yoga & Meditation</li>
              <li className="text-emerald-100">Wellness Programs</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-emerald-400 mt-1 flex-shrink-0" />
                <span className="text-emerald-100">123, Piliyandala, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span className="text-emerald-100">+94 11 234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span className="text-emerald-100">info@rusethayurveda.lk</span>
              </li>
            </ul>
            <div className="bg-emerald-800 p-4 rounded-xl">
              <p className="text-xs text-emerald-200 mb-2">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-3 py-2 rounded-lg text-sm bg-emerald-700 border-emerald-600 text-white placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button className="bg-emerald-600 hover:bg-emerald-500 px-4 py-2 rounded-lg transition-colors">
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-emerald-700 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-emerald-200">
          <p>© {currentYear} Ruseth Ayurvedic Hospital. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
