import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { useToast } from '../hooks/use-toast';
import { Mail, Phone, MapPin, Send, Rocket, TrendingUp, Zap, Heart, ShieldCheck, Lightbulb, BarChart3 } from 'lucide-react';


const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const trustPoints = [
    { icon: <TrendingUp className="w-4 h-4 text-cyan-400" />, text: "Predict trends before they peak" },
    { icon: <Zap className="w-4 h-4 text-violet-400" />, text: "Scale engagement with AI precision" },
    { icon: <Heart className="w-4 h-4 text-pink-400" />, text: "Minimize churn, maximize loyalty" },
    { icon: <ShieldCheck className="w-4 h-4 text-emerald-400" />, text: "Eliminate wasted ad spend" },
    { icon: <Lightbulb className="w-4 h-4 text-yellow-400" />, text: "Fuse data with human creativity" },
    { icon: <BarChart3 className="w-4 h-4 text-blue-400" />, text: "Own your niche with 24/7 insights" },
];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Rajdhani', 'Orbitron', sans-serif" }}>
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Let's Scale Your Brand
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Schedule your free AI audit and discover your growth potential
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="bg-gray-900/50 border-2 border-cyan-500/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-white" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Full Name</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-800/50 border-cyan-500/30 text-white focus:border-cyan-400 focus:ring-cyan-400"
                    placeholder="Sunrise Media "
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Email Address</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-800/50 border-cyan-500/30 text-white focus:border-cyan-400 focus:ring-cyan-400"
                    placeholder="sunrisemediapune@gmail.com"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Company Name</label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-gray-800/50 border-cyan-500/30 text-white focus:border-cyan-400 focus:ring-cyan-400"
                    placeholder="Sunrise Media Pvt Ltd."
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-gray-800/50 border-cyan-500/30 text-white focus:border-cyan-400 focus:ring-cyan-400 min-h-[120px]"
                    placeholder="Tell us about your social media goals..."
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600 text-white shadow-lg shadow-cyan-500/50 transition-all duration-200"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-cyan-500/10 to-violet-500/10 border-2 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-500 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center flex-shrink-0">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                        Let’s Build Your Digital Future, Together
                      </h3>

                      {/* Visual Trust Grid */}
                      <div className="grid grid-cols-1 gap-3 mt-4">
                        {trustPoints.map((item, index) => (
                          <div key={index} className="flex items-center space-x-3 bg-white/5 border border-white/10 p-2 rounded-lg hover:bg-white/10 transition-colors">
                            {item.icon}
                            <span className="text-gray-300 text-xs font-medium">{item.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-2 border-violet-500/30 backdrop-blur-sm">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <div className="text-white font-medium">sunrisemediapune@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Phone</div>
                    <div className="text-white font-medium">+91 7070 852323</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Location</div>
                    <div className="text-white font-medium">Pune, Maharashtra</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;