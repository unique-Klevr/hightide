import React, { useState, useEffect } from 'react';
import { SERVICES, TRUST_BADGES, BRAND } from '../constants';
import { ArrowRight, Star, CheckCircle2, Droplets, Sparkles } from 'lucide-react';
import { getCleaningAdvice } from '../services/gemini';
import { FAQSection } from './FAQSection';
import { GoogleReviews } from './GoogleReviews';

export const Home: React.FC<{ setActivePage: (p: string) => void }> = ({ setActivePage }) => {
  const [adviceInput, setAdviceInput] = useState({ surface: '', issue: '' });
  const [adviceResult, setAdviceResult] = useState('');
  const [loadingAdvice, setLoadingAdvice] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleGetAdvice = async () => {
    if (!adviceInput.surface || !adviceInput.issue) return;
    setLoadingAdvice(true);
    const result = await getCleaningAdvice(adviceInput.surface, adviceInput.issue);
    setAdviceResult(result);
    setLoadingAdvice(false);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 wave-bg">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent"></div>

        {/* Cinematic Atmospheric Glows */}
        <div className="absolute top-1/3 -left-40 w-[800px] h-[800px] bg-blue-600/10 rounded-full animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-cyan-600/5 rounded-full animate-pulse-glow delay-3"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <div className="reveal-mask mb-8">
              <div className="reveal-mask-content bg-blue-600/15 border border-blue-500/20 px-6 py-2.5 rounded-full inline-flex items-center gap-3 shadow-inner">
                <Sparkles className="text-cyan-400 w-4 h-4" />
                <span className="text-cyan-400 text-[10px] font-black tracking-[0.3em] uppercase">Lowcountry Luxury Restoration</span>
              </div>
            </div>

            <h1 className="text-6xl lg:text-[6rem] font-extrabold text-white leading-[1] mb-10 tracking-tighter">
              <span className="reveal-mask block overflow-hidden">
                <span className="reveal-mask-content delay-1">Coastal Luxury</span>
              </span>
              <span className="reveal-mask block overflow-hidden">
                <span className="reveal-mask-content delay-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-600 pb-2">Power Performance</span>
              </span>
            </h1>

            <div className="reveal-mask mb-14">
              <p className="reveal-mask-content delay-3 text-slate-300 text-lg lg:text-2xl max-w-lg leading-relaxed font-medium opacity-90">
                South Carolina's most trusted name in exterior estate maintenance. Precision cleaning meets unparalleled customer service.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 reveal-up delay-4">
              <button
                onClick={() => setActivePage('contact')}
                className="group relative bg-blue-600 hover:bg-blue-500 text-white px-12 py-6 rounded-2xl font-black text-lg transition-all transform hover:scale-105 shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Get a Free Quote <ArrowRight size={22} className="group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </button>

              <a
                href={`tel:${BRAND.phone}`}
                className="glass-morphism text-white border border-white/20 px-12 py-6 rounded-2xl font-black text-lg text-center transition-all hover:bg-white/10 hover:border-white/40 hover:scale-105 active:scale-95"
              >
                Call {BRAND.phone}
              </a>
            </div>
          </div>

          <div className={`hidden lg:block relative animate-float-lux ${isLoaded ? 'reveal-in delay-3' : 'opacity-0'}`}>
            {/* Soft Shadow behind the main container */}
            <div className="absolute -inset-10 bg-blue-500/10 rounded-full blur-[120px] animate-pulse-soft"></div>

            {/* High-End Portrait Frame */}
            <div className="relative z-10 p-3 bg-gradient-to-br from-white/15 to-transparent backdrop-blur-md border border-white/15 rounded-[4rem] shadow-[0_60px_120px_-30px_rgba(0,0,0,0.6)] overflow-hidden group">

              <div className="relative h-[700px] overflow-hidden rounded-[3.2rem]">
                <img
                  src="/assets/hero.png"
                  alt="Premium Coastal Estate Cleaning"
                  className="w-full h-full object-cover animate-ken-burns"
                />

                {/* Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950/50"></div>

                {/* Intelligent Shimmer Sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer-sweep pointer-events-none transition-opacity duration-700"></div>
              </div>

              {/* Signature Rating Badge */}
              <div className="absolute bottom-10 left-10 bg-white/95 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-white flex items-center gap-6 transition-all duration-700 hover:scale-110 hover:-rotate-2 group/badge">
                <div className="bg-blue-600 w-16 h-16 rounded-[1.2rem] flex items-center justify-center text-white shadow-xl shadow-blue-600/20 group-hover/badge:rotate-12 transition-transform duration-500">
                  <Star className="fill-current w-8 h-8" />
                </div>
                <div>
                  <p className="text-slate-950 font-black text-3xl leading-none tracking-tight">5.0 Star</p>
                  <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mt-1">Premium Rated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Ticker - Clean and Sophisticated */}
      <section className="bg-white py-24 border-b border-slate-100 relative z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-20">
            {TRUST_BADGES.map((badge, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center group reveal-up"
                style={{ animationDelay: `${0.2 + (i * 0.1)}s` }}
              >
                <div className="w-24 h-24 bg-slate-50 rounded-[2rem] mb-7 flex items-center justify-center text-slate-900 transition-all duration-700 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_25px_50px_-12px_rgba(37,99,235,0.35)] group-hover:-translate-y-3 group-hover:rotate-6">
                  {React.cloneElement(badge.icon as React.ReactElement, { size: 36 })}
                </div>
                <span className="font-black text-slate-950 text-[11px] uppercase tracking-[0.25em] leading-tight opacity-80 group-hover:opacity-100 transition-opacity">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Showcase - Rich Hover Experiences */}
      <section className="py-40 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-28 reveal-up">
            <div className="inline-block bg-blue-100 text-blue-600 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.4em] mb-8 shadow-sm">Proven Expertise</div>
            <h3 className="text-5xl lg:text-7xl font-extrabold text-slate-950 tracking-tighter leading-tight">Mastering Exterior <br />Preservation</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {SERVICES.map((service, i) => (
              <div
                key={service.id}
                className="group bg-white rounded-[3rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-slate-200/50 flex flex-col h-full hover-lift reveal-up"
                style={{ animationDelay: `${0.3 + (i * 0.1)}s` }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-115"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
                  <div className="absolute bottom-10 left-10 flex items-center gap-5">
                    <div className="bg-blue-600 p-5 rounded-[1.3rem] text-white shadow-2xl transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-12 group-hover:-translate-y-2">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <div className="p-12 flex-grow">
                  <h4 className="text-3xl font-black text-slate-950 mb-5 tracking-tight group-hover:text-blue-600 transition-colors duration-500">{service.title}</h4>
                  <p className="text-slate-600 mb-10 leading-relaxed font-medium text-lg opacity-90">{service.description}</p>
                  <button
                    onClick={() => setActivePage('services')}
                    className="group/btn inline-flex items-center gap-3 text-blue-600 font-black text-xs uppercase tracking-[0.2em] transition-all"
                  >
                    Explore Service <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform duration-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Surface Analyst - Dark Luxury Motif */}
      <section className="py-40 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 water-texture opacity-[0.03]"></div>

        {/* Subtle Scanline Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.01),rgba(0,255,0,0.005),rgba(0,0,255,0.01))] bg-[length:100%_4px,3px_100%] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="reveal-up">
              <span className="text-cyan-400 font-black text-[10px] uppercase tracking-[0.4em] mb-8 block opacity-80">Autonomous Intelligence</span>
              <h3 className="text-5xl lg:text-[4.5rem] font-extrabold mb-12 tracking-tighter leading-[1.1]">Precision <br />Site Analysis</h3>
              <p className="text-slate-400 text-xl lg:text-2xl mb-16 leading-relaxed font-medium opacity-80">
                Leveraging the latest in vision-logic to determine the exact chemical concentration and pressure requirements for your unique facade.
              </p>

              <div className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-3 group/input">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-1 transition-colors group-focus-within/input:text-cyan-400">Target Surface</label>
                    <input
                      type="text"
                      placeholder="e.g., Stucco Siding"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-white focus:outline-none focus:border-cyan-500 focus:bg-white/[0.05] transition-all placeholder:text-slate-700"
                      value={adviceInput.surface}
                      onChange={e => setAdviceInput({ ...adviceInput, surface: e.target.value })}
                    />
                  </div>
                  <div className="space-y-3 group/input">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 ml-1 transition-colors group-focus-within/input:text-cyan-400">Contaminant Type</label>
                    <input
                      type="text"
                      placeholder="e.g., Green Algae"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-white focus:outline-none focus:border-cyan-500 focus:bg-white/[0.05] transition-all placeholder:text-slate-700"
                      value={adviceInput.issue}
                      onChange={e => setAdviceInput({ ...adviceInput, issue: e.target.value })}
                    />
                  </div>
                </div>
                <button
                  onClick={handleGetAdvice}
                  disabled={loadingAdvice}
                  className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black py-6 rounded-2xl transition-all flex items-center justify-center gap-4 shadow-[0_30px_60px_-15px_rgba(6,182,212,0.3)] group active:scale-[0.98]"
                >
                  {loadingAdvice ? (
                    <div className="animate-spin rounded-full h-6 w-6 border-2 border-slate-950 border-t-transparent"></div>
                  ) : (
                    <>Run Diagnostic <Droplets size={24} className="group-hover:rotate-12 group-hover:-translate-y-1 transition-transform duration-500" /></>
                  )}
                </button>
                {adviceResult && (
                  <div className="mt-10 p-10 bg-blue-600/10 border border-blue-500/20 rounded-[2.5rem] animate-in fade-in slide-in-from-top-6 duration-700 glass-morphism shadow-2xl">
                    <div className="flex gap-4 items-start">
                      <Sparkles className="text-cyan-400 w-6 h-6 flex-shrink-0 mt-1" />
                      <p className="text-cyan-100 font-bold leading-relaxed italic text-xl">"{adviceResult}"</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white rounded-[4rem] p-16 shadow-[0_80px_150px_-30px_rgba(0,0,0,0.4)] reveal-up delay-2 border border-white/10 relative overflow-hidden group/form">
              {/* Invisible shine flash on card */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/5 to-transparent -translate-x-full group-hover/form:translate-x-full transition-transform duration-[1.5s] pointer-events-none"></div>

              <h4 className="text-slate-950 text-4xl font-black mb-10 tracking-tight">Request Appraisal</h4>
              <div className="space-y-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Client Name</label>
                  <input type="text" className="w-full p-6 rounded-2xl bg-slate-50 border border-slate-200 text-slate-950 focus:outline-none focus:border-blue-600 transition-all font-medium" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Contact Channel</label>
                  <input type="tel" className="w-full p-6 rounded-2xl bg-slate-50 border border-slate-200 text-slate-950 focus:outline-none focus:border-blue-600 transition-all font-medium" />
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-7 rounded-2xl shadow-2xl transition-all transform hover:scale-[1.02] active:scale-95 shadow-blue-600/30">
                  Send Request to High Tide
                </button>
                <div className="flex items-center justify-center gap-3 mt-6">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">Available for Weekend Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="reveal-up">
        <GoogleReviews />
      </div>

      <div className="reveal-up">
        <FAQSection />
      </div>
    </div>
  );
};