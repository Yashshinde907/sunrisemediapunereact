import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { caseStudy } from '../mock';
import { TrendingUp, Users, DollarSign, Eye, Target } from 'lucide-react';

const iconMap = {
  TrendingUp: TrendingUp,
  Users: Users,
  DollarSign: DollarSign,
  Eye: Eye
};

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Rajdhani', 'Orbitron', sans-serif" }}>
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Proven Results
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real campaigns, measurable outcomes, extraordinary growth
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="bg-gray-900/50 border-2 border-cyan-500/30 backdrop-blur-sm overflow-hidden">
            <div className="bg-gradient-to-r from-cyan-500/10 to-violet-500/10 p-8 border-b border-cyan-500/20">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-32 h-16 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm border border-cyan-500/30">
                  <span className="text-2xl font-bold text-cyan-400 ml-5">{caseStudy.client}</span>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                    {caseStudy.client} Case Study
                  </h3>
                  <Badge className="bg-gradient-to-r from-cyan-500 to-violet-500 text-white border-0">
                    B2B SaaS Success Story
                  </Badge>
                </div>
              </div>
            </div>

            <CardContent className="p-8 space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-violet-500 rounded-full"></div>
                  <h4 className="text-xl font-bold text-cyan-400">Problem</h4>
                </div>
                <p className="text-gray-300 leading-relaxed pl-4">{caseStudy.problem}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-violet-500 rounded-full"></div>
                  <h4 className="text-xl font-bold text-cyan-400">Approach</h4>
                </div>
                <p className="text-gray-300 leading-relaxed pl-4">{caseStudy.approach}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-violet-500 rounded-full"></div>
                  <h4 className="text-xl font-bold text-cyan-400">Solution</h4>
                </div>
                <p className="text-gray-300 leading-relaxed pl-4">{caseStudy.solution}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-violet-500 rounded-full"></div>
                  <h4 className="text-xl font-bold text-cyan-400">Team</h4>
                </div>
                <p className="text-gray-300 leading-relaxed pl-4">{caseStudy.team}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-violet-400" />
                  <h4 className="text-xl font-bold text-violet-400">Objectives & Key Results</h4>
                </div>
                <ul className="space-y-2 pl-4">
                  {caseStudy.okrs.map((okr, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>{okr}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-cyan-500/20">
                <h4 className="text-2xl font-bold text-center mb-8" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                  <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                    Campaign Results
                  </span>
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {caseStudy.results.map((result, index) => {
                    const IconComponent = iconMap[result.icon];
                    return (
                      <div
                        key={index}
                        className="text-center p-6 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 rounded-lg border border-cyan-500/20 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
                      >
                        <IconComponent className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                        <div className="text-3xl font-bold text-white mb-2">{result.value}</div>
                        <div className="text-sm text-gray-400">{result.metric}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;