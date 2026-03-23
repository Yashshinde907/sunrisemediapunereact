import React, { useEffect, useRef, useState } from 'react';
import { processSteps } from '../mock';
import { CheckCircle2 } from 'lucide-react';

const Process = () => {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const stepRefs = useRef([]);

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSteps((prev) => [...new Set([...prev, index])]);
            }
          });
        },
        { threshold: 0.3 }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section id="process" className="py-24 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNjgsODUsMjQ3LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Rajdhani', 'Orbitron', sans-serif" }}>
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              The Sunrise Media Process
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A systematic, AI-driven approach to social media domination
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-violet-500 to-cyan-500 hidden md:block"></div>

          {processSteps.map((step, index) => (
            <div
              key={step.id}
              ref={(el) => (stepRefs.current[index] = el)}
              className={`relative mb-16 md:ml-20 transition-all duration-700 ${
                visibleSteps.includes(index)
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="absolute -left-24 top-0 hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 border-4 border-black shadow-lg shadow-cyan-500/50">
                <span className="text-white font-bold text-xl">{step.id}</span>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm border-2 border-violet-500/20 rounded-lg p-8 hover:border-violet-500 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/20">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                      {step.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;