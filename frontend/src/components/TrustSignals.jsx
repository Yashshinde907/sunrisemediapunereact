import React, { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { fortuneLogos, testimonials } from '../mock';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const TrustSignals = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="trust" className="py-24 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Rajdhani', 'Orbitron', sans-serif" }}>
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Verified Results
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Trusted by industry-leading organizations worldwide
          </p>
        </div>

        <div className="mb-20">
          <div className="bg-gray-900/30 backdrop-blur-sm border border-violet-500/20 rounded-xl p-12">
            <h3 className="text-center text-gray-400 text-sm uppercase tracking-wider mb-8">
              Fortune 500 Companies We've Partnered With
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
              {fortuneLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 border border-cyan-500/10 hover:border-cyan-500/30"
                >
                  <div className="text-gray-400 hover:text-cyan-400 transition-colors font-semibold text-sm">
                    {logo.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h3>

          <div className="relative">
            <Card className="bg-gradient-to-br from-gray-900/50 to-gray-900/30 border-2 border-cyan-500/30 backdrop-blur-sm">
              <CardContent className="p-12">
                <Quote className="w-12 h-12 text-cyan-400/30 mb-6" />
                <blockquote className="text-xl text-gray-200 leading-relaxed mb-8">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].author}
                    className="w-16 h-16 rounded-full border-2 border-cyan-500"
                  />
                  <div>
                    <div className="font-bold text-white text-lg">
                      {testimonials[currentTestimonial].author}
                    </div>
                    <div className="text-gray-400">
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial
                        ? 'bg-cyan-400 w-8'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;