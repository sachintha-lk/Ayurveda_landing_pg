import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { Doctors } from './components/Doctors';
import { AppointmentForm } from './components/AppointmentForm';
import { Testimonials } from './components/Testimonials';
import { ContactLocation } from './components/ContactLocation';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Doctors />
        <AppointmentForm />
        <Testimonials />
        <ContactLocation />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}
