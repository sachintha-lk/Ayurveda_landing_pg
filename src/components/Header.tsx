import { Leaf, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-600 p-2 rounded-full">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-emerald-800">Ruseth Ayurvedic Hospital</h1>
              <p className="text-xs text-emerald-600">Traditional Healing Center</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-gray-700 hover:text-emerald-600 transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors">About</a>
            <a href="#services" className="text-gray-700 hover:text-emerald-600 transition-colors">Services</a>
            <a href="#doctors" className="text-gray-700 hover:text-emerald-600 transition-colors">Doctors</a>
            <a href="#testimonials" className="text-gray-700 hover:text-emerald-600 transition-colors">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors">Contact</a>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <a href="#appointment">Book Appointment</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
