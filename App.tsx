
import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { SERVICES, SERVICE_AREAS, BLOG_POSTS, BRAND } from './constants';
import { ArrowRight, MapPin, Mail, Phone, Clock, Send } from 'lucide-react';
import { FAQSection } from './components/FAQSection';
import { GoogleReviews } from './components/GoogleReviews';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState('home');

  // Smooth scroll to top when changing pages
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={setActivePage} />;

      case 'services':
        return (
          <div className="pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-4">
              <header className="mb-20 text-center">
                <h1 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tighter">Our Services</h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                  From delicate soft washing for your roof to heavy-duty pressure cleaning for your driveway, we have the right equipment for every surface.
                </p>
              </header>

              <div className="space-y-24">
                {SERVICES.map((service, idx) => (
                  <div key={service.id} className={`flex flex-col lg:flex-row items-center gap-16 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className="w-full lg:w-1/2">
                      <div className="relative group">
                        <div className="absolute -inset-4 bg-blue-600/10 rounded-3xl blur-2xl group-hover:bg-cyan-500/10 transition-colors"></div>
                        <img
                          src={service.image}
                          alt={service.title}
                          className="rounded-3xl shadow-2xl relative z-10 w-full object-cover aspect-video"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                      <div className="bg-blue-600 p-3 rounded-2xl inline-block text-white mb-6">
                        {service.icon}
                      </div>
                      <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">{service.title}</h2>
                      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        {service.longDescription}
                      </p>
                      <ul className="space-y-4 mb-10">
                        {['Safety Guaranteed', 'Eco-Friendly Solutions', 'Expert Technicians'].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 font-bold text-slate-700">
                            <span className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center text-[10px]">&check;</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={() => setActivePage('contact')}
                        className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all"
                      >
                        Request Estimate <ArrowRight size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'areas':
        return (
          <div className="pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h1 className="text-5xl lg:text-6xl font-black text-slate-900 mb-12 tracking-tighter">Service Areas</h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-16">
                Proudly serving the Lowcountry with premium exterior cleaning. If you live in or around these cities, High Tide is your go-to partner.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {SERVICE_AREAS.map((area, i) => (
                  <div key={i} className={`p-8 rounded-3xl border ${area.isPrimary ? 'bg-white border-blue-100 shadow-lg' : 'bg-slate-50 border-slate-200'}`}>
                    <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                      <MapPin size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{area.city}, SC</h3>
                    <p className="text-sm text-slate-600 mb-6">{area.description}</p>
                    <button
                      onClick={() => setActivePage('contact')}
                      className="text-blue-600 font-bold text-sm uppercase tracking-widest hover:text-blue-700 transition-colors"
                    >
                      Book In {area.city}
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-20 p-12 bg-slate-900 rounded-3xl text-white">
                <h3 className="text-3xl font-bold mb-6">Don't see your town?</h3>
                <p className="text-slate-400 max-w-2xl mx-auto mb-8">
                  We frequently travel for larger estates and commercial projects. If you're near one of our primary locations, give us a call!
                </p>
                <a href={`tel:${BRAND.phone}`} className="inline-block bg-cyan-500 text-slate-950 px-10 py-4 rounded-xl font-black text-lg">
                  Check Availability
                </a>
              </div>
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-4">
              <div className="relative mb-16 h-96 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/trey.png"
                  alt="Trey Zelasko - High Tide Power Wash"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
                <div className="absolute bottom-10 left-10">
                  <h1 className="text-4xl lg:text-5xl font-black text-white mb-2 tracking-tighter">About High Tide Power Wash</h1>
                  <p className="text-cyan-400 font-bold uppercase tracking-widest text-sm">Founder & Lead Technician</p>
                </div>
              </div>

              <div className="prose prose-lg text-slate-600 max-w-none space-y-8 leading-relaxed">
                <p>
                  Trey Zelasko is a dedicated professional with a deep passion for restoring the beauty of South Carolina properties. Based in Walterboro, Trey founded <strong>High Tide Power Wash</strong> with a single mission: to provide the highest standard of exterior cleaning combined with unmatched customer service.
                </p>
                <p>
                  As a locally owned and operated business, Trey understands the unique challenges that coastal South Carolina humidity, salt air, and pollen pose to home exteriors. Unlike high-volume franchises, High Tide focuses on quality over quantity, ensuring every brick, shingle, and paver is treated with respect.
                </p>
                <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Work with High Tide?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex gap-4">
                      <div className="text-blue-600"><CheckCircle2 /></div>
                      <div>
                        <h4 className="font-bold text-slate-900">Personal Service</h4>
                        <p className="text-sm">You deal directly with the owner, ensuring accountability and care.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-blue-600"><CheckCircle2 /></div>
                      <div>
                        <h4 className="font-bold text-slate-900">Advanced Tech</h4>
                        <p className="text-sm">We use soft wash systems designed specifically for delicate surfaces.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p>
                  Whether it is a historic home in Summerville or a waterfront estate in Beaufort, Trey brings the same level of professionalism, integrity, and hard work to every project. When he is not restoring properties, you can find Trey active in the local community, committed to keeping the Lowcountry beautiful.
                </p>
              </div>
            </div>
          </div>
        );

      case 'gallery':
        const galleryImages = [
          '/assets/house_wash.png',
          '/assets/roof_cleaning.png',
          '/assets/driveway.png',
          '/assets/gutter_cleaning.png',
          '/assets/fence_deck.png',
          '/assets/pool_deck.png'
        ];
        return (
          <div className="pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <h1 className="text-5xl lg:text-6xl font-black text-slate-900 mb-12 tracking-tighter">Before & After</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {galleryImages.map((img, i) => (
                  <div key={i} className="group relative rounded-3xl overflow-hidden shadow-xl aspect-video">
                    <img
                      src={img}
                      alt="Work Gallery"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-slate-900/80 text-white px-4 py-1 rounded-full text-xs font-bold uppercase">Work In Progress</div>
                    <div className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase">High Tide Finish</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'reviews':
        return (
          <div className="pt-24 bg-slate-50">
            <GoogleReviews />
            <div className="pb-24">
              <FAQSection />
            </div>
          </div>
        );

      case 'blog':
        return (
          <div className="pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-4">
              <h1 className="text-5xl lg:text-6xl font-black text-slate-900 mb-16 tracking-tighter text-center">Cleaning Resources</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {BLOG_POSTS.map(post => (
                  <article key={post.id} className="group cursor-pointer">
                    <div className="relative h-64 rounded-3xl overflow-hidden mb-6">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute top-6 left-6 bg-white px-4 py-1 rounded-full text-xs font-bold text-slate-900">{post.date}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{post.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{post.excerpt}</p>
                    <span className="text-blue-600 font-bold flex items-center gap-2">Read Article <ArrowRight size={16} /></span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="pt-32 pb-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
                <div>
                  <h1 className="text-5xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tighter">Get a Free Estimate</h1>
                  <p className="text-xl text-slate-600 mb-12">
                    Ready to restore your property? Fill out the form below or text us directly for a fast response.
                  </p>

                  <div className="space-y-8">
                    <div className="flex items-center gap-6">
                      <div className="bg-blue-100 p-4 rounded-2xl text-blue-600"><Phone /></div>
                      <div>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Call or Text</p>
                        <a href={`tel:${BRAND.phone}`} className="text-2xl font-black text-slate-900">{BRAND.phone}</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="bg-blue-100 p-4 rounded-2xl text-blue-600"><Mail /></div>
                      <div>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Email Us</p>
                        <a href={`mailto:${BRAND.email}`} className="text-2xl font-black text-slate-900">{BRAND.email}</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="bg-blue-100 p-4 rounded-2xl text-blue-600"><Clock /></div>
                      <div>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Service Hours</p>
                        <p className="text-2xl font-black text-slate-900">{BRAND.hours}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-100">
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                        <input type="text" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:outline-none focus:border-blue-600" placeholder="John Doe" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                        <input type="tel" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:outline-none focus:border-blue-600" placeholder="(843) 000-0000" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Service Needed</label>
                      <select className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:outline-none focus:border-blue-600">
                        <option>House Washing</option>
                        <option>Roof Cleaning</option>
                        <option>Driveway/Concrete</option>
                        <option>Gutter Cleaning</option>
                        <option>Full Property Package</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Property Address</label>
                      <input type="text" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:outline-none focus:border-blue-600" placeholder="123 Coastal Way, Summerville, SC" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Message (Optional)</label>
                      <textarea className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:outline-none focus:border-blue-600 h-32" placeholder="Tell us about your project..."></textarea>
                    </div>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2">
                      Request Estimate <Send size={20} />
                    </button>
                    <p className="text-center text-xs text-slate-400 uppercase tracking-widest font-bold">Fast response guaranteed</p>
                  </form>
                </div>
              </div>

              <FAQSection />
            </div>
          </div>
        );

      default:
        return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <Layout activePage={activePage} setActivePage={setActivePage}>
      {renderContent()}
    </Layout>
  );
};

export default App;

// Helper icons component (lucide-react doesn't export CheckCircle2 in same way in some versions)
const CheckCircle2 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="m9 12 2 2 4-4" /></svg>
);