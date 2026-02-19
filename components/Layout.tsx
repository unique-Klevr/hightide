
import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X, MessageSquare } from 'lucide-react';
import { BRAND } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  activePage: string;
  setActivePage: (page: string) => void;
}

const Navbar = ({ activePage, setActivePage }: { activePage: string; setActivePage: (p: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      setScrolled(scrollPos > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Areas', id: 'areas' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'About', id: 'about' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/98 backdrop-blur-lg py-3 shadow-xl border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={() => setActivePage('home')}
        >
          <img src="/assets/logo.jpeg" alt="High Tide Logo" className="h-14 w-auto group-hover:scale-105 transition-transform" />
          <div className="hidden sm:block">
            <h1 className="text-white font-black text-2xl tracking-tighter leading-none">HIGH TIDE</h1>
            <p className="text-cyan-400 text-[10px] font-bold tracking-[0.2em] uppercase">Power Wash</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`text-sm font-bold tracking-wide uppercase transition-colors ${activePage === item.id ? 'text-cyan-400' : 'text-white hover:text-cyan-300'
                }`}
            >
              {item.name}
            </button>
          ))}
          <a
            href={`tel:${BRAND.phone}`}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 flex items-center gap-2"
          >
            <Phone size={16} /> {BRAND.phone}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-slate-900 absolute top-full left-0 w-full p-8 border-t border-slate-800 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setActivePage(item.id); setIsOpen(false); }}
                className={`text-xl font-bold uppercase text-left ${activePage === item.id ? 'text-cyan-400' : 'text-white'}`}
              >
                {item.name}
              </button>
            ))}
            <a
              href={`tel:${BRAND.phone}`}
              className="bg-blue-600 text-white p-4 rounded-xl font-bold text-center flex justify-center items-center gap-2"
            >
              <Phone /> Call {BRAND.phone}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = ({ setActivePage }: { setActivePage: (p: string) => void }) => (
  <footer className="bg-slate-950 text-slate-400 py-20 px-4 border-t border-slate-900">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      <div>
        <div className="flex items-center space-x-3 mb-6">
          <img src="/assets/logo.jpeg" alt="High Tide Logo" className="h-16 w-auto" />
          <h2 className="text-white font-bold text-2xl tracking-tighter">HIGH TIDE</h2>
        </div>
        <p className="mb-6 text-sm leading-relaxed">
          Premium exterior cleaning for South Carolina. We specialize in luxury residential properties and high-performance commercial cleaning.
        </p>
        <div className="space-y-3">
          <a href={`tel:${BRAND.phone}`} className="flex items-center gap-3 hover:text-white transition-colors">
            <Phone size={18} className="text-cyan-500" /> {BRAND.phone}
          </a>
          <a href={`mailto:${BRAND.email}`} className="flex items-center gap-3 hover:text-white transition-colors">
            <Mail size={18} className="text-cyan-500" /> {BRAND.email}
          </a>
        </div>
      </div>

      <div>
        <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Services</h3>
        <ul className="space-y-4 text-sm">
          <li><button onClick={() => setActivePage('services')} className="hover:text-white">House Washing</button></li>
          <li><button onClick={() => setActivePage('services')} className="hover:text-white">Roof Cleaning</button></li>
          <li><button onClick={() => setActivePage('services')} className="hover:text-white">Concrete Cleaning</button></li>
          <li><button onClick={() => setActivePage('services')} className="hover:text-white">Gutter Maintenance</button></li>
          <li><button onClick={() => setActivePage('services')} className="hover:text-white">Commercial Properties</button></li>
        </ul>
      </div>

      <div>
        <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Service Areas</h3>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-4 text-sm">
          <li>Walterboro, SC</li>
          <li>Summerville, SC</li>
          <li>Beaufort, SC</li>
          <li>Orangeburg, SC</li>
          <li>Yemassee, SC</li>
          <li>Hampton, SC</li>
        </ul>
      </div>

      <div>
        <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Company</h3>
        <ul className="space-y-4 text-sm">
          <li>About Trey Zelasko</li>
          <li>Hours: {BRAND.hours}</li>
          <li>Licensed & Insured</li>
          <li>SC Registered Business</li>
        </ul>
      </div>
    </div>

    <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-900 text-xs text-center flex flex-col md:flex-row justify-between items-center gap-4">
      <p>&copy; {new Date().getFullYear()} High Tide Power Wash. All Rights Reserved.</p>
      <div className="flex gap-6">
        <a href="#" className="hover:text-white">Privacy Policy</a>
        <a href="#" className="hover:text-white">Terms of Service</a>
      </div>
    </div>
  </footer>
);

export const Layout: React.FC<LayoutProps> = ({ children, activePage, setActivePage }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer setActivePage={setActivePage} />

      {/* Floating CTAs */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
        {/* Text Button - Visible on all screens */}
        <a
          href={`sms:${BRAND.phone}`}
          className="pointer-events-auto bg-cyan-500 text-white p-4 rounded-full shadow-2xl hover:bg-cyan-600 transition-all transform hover:scale-110 flex items-center justify-center group"
          title="Text Us Now"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-bold whitespace-nowrap">Text Us</span>
        </a>

        {/* Call Now Button - Highly visible and sticky on mobile */}
        <a
          href={`tel:${BRAND.phone}`}
          className="pointer-events-auto bg-blue-600 text-white px-5 py-4 rounded-full shadow-2xl animate-in slide-in-from-bottom-8 duration-500 flex items-center gap-3 transition-all hover:bg-blue-700 active:scale-95"
        >
          <Phone className="w-6 h-6 fill-current" />
          <span className="font-black text-sm tracking-tight whitespace-nowrap">
            Call Now: <span className="text-cyan-300">{BRAND.phone}</span>
          </span>
        </a>
      </div>
    </div>
  );
};
