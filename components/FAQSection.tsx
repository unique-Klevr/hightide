
import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';
import { Plus, Minus } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-black text-sm uppercase tracking-[0.3em] mb-4">Common Questions</h2>
          <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">Expert Answers</h3>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div 
              key={index} 
              className={`border rounded-3xl transition-all duration-300 ${openIndex === index ? 'border-blue-500 bg-blue-50/30' : 'border-slate-100 bg-white'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 lg:p-8 text-left"
              >
                <span className={`text-lg font-bold ${openIndex === index ? 'text-blue-600' : 'text-slate-900'}`}>
                  {item.question}
                </span>
                <div className={`flex-shrink-0 ml-4 p-2 rounded-full transition-colors ${openIndex === index ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-8 px-6 lg:px-8' : 'max-h-0'}`}
              >
                <p className="text-slate-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
