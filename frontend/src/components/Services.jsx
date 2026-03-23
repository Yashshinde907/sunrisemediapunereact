import React from 'react';
import { Brain, Users, TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { servicesData } from '../mock';

const iconMap = {
  Brain: Brain,
  Users: Users,
  TrendingUp: TrendingUp
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Rajdhani', 'Orbitron', sans-serif" }}>
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive AI-powered solutions designed to dominate the social media landscape
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <Card
                key={service.id}
                className="group relative bg-gray-900/50 border-2 border-cyan-500/20 hover:border-cyan-500 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 hover:-translate-y-2 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;