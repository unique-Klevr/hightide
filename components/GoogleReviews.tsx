import React from 'react';
import { TESTIMONIALS, BRAND } from '../constants';
import { Star, CheckCircle2, ExternalLink } from 'lucide-react';

export const GoogleReviews: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header with Google Rating Summary */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="reveal-up">
            <h2 className="text-blue-600 font-black text-sm uppercase tracking-[0.3em] mb-4">Real Results</h2>
            <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">Customer Reviews</h3>
          </div>
          
          <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 flex items-center gap-6 reveal-in">
            <div className="flex flex-col items-center border-r border-slate-100 pr-6">
              <span className="text-4xl font-black text-slate-900 leading-none mb-1">5.0</span>
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-yellow-400 fill-current" />)}
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Google Rating</span>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-700 mb-1">Based on 120+ Reviews</p>
              <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-widest">
                <CheckCircle2 size={14} /> Verified Business
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Horizontal Scroll / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review, i) => (
            <div 
              key={review.id} 
              className={`bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col h-full transition-all duration-500 group hover-lift reveal-up`}
              style={{ animationDelay: `${0.1 + (i * 0.1)}s` }}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-black text-xl transition-transform duration-500 group-hover:scale-110">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 leading-none mb-1 group-hover:text-blue-600 transition-colors">{review.name}</h4>
                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">{review.location}</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-yellow-400 fill-current" />)}
                </div>
              </div>
              
              <div className="flex-grow">
                <p className="text-slate-600 leading-relaxed italic mb-6">
                  "{review.content}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-50 flex justify-between items-center mt-auto">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_\"G\"_logo.svg" alt="Google" className="w-3 h-3" />
                  Posted on Google
                </span>
                <button className="text-blue-600 hover:text-blue-700 text-xs font-bold flex items-center gap-1 uppercase tracking-widest group-hover:gap-2 transition-all">
                  View Source <ExternalLink size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center reveal-up">
          <p className="text-slate-500 font-medium mb-6">Want to see more? Check out our 5-star profile on Google Maps.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all transform hover:scale-105"
            >
              Write a Review
            </button>
            <a 
              href={`tel:${BRAND.phone}`}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg transform hover:scale-105"
            >
              Book Your Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};