import React, { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;

    const text = heading.textContent;
    heading.textContent = '';
    heading.style.opacity = '1';

    let index = 0;
    const typeText = () => {
      if (index < text.length) {
        heading.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 50);
      }
    };

    setTimeout(typeText, 500);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDIxNywyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center pt-24 md:pt-0">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-8 animate-fade-in">        
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-cyan-300">AI-Powered Sunrise Media </span>
        </div>

        <h1
          ref={headingRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight opacity-0"
          style={{ fontFamily: "'Rajdhani', 'Orbitron', sans-serif" }}
        >
          <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            Scaling Brands via Intelligent Social
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '1s' }}>
          Transform your social media presence with cutting-edge AI technology.
          Data-driven strategies that deliver measurable, exponential growth.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="group relative bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600 text-white text-lg px-8 py-6 rounded-lg shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300"
          >
            Request an AI Audit
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            onClick={() => {
              const element = document.getElementById('case-studies');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 rounded-lg border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
          >
            View Results
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '2s' }}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">615%</div>
            <div className="text-sm text-gray-400">Avg. Engagement Boost</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-violet-400 mb-2">500+</div>
            <div className="text-sm text-gray-400">Campaigns Optimized</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">$50M+</div>
            <div className="text-sm text-gray-400">Ad Spend Managed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-violet-400 mb-2">98%</div>
            <div className="text-sm text-gray-400">Client Retention</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Hero;