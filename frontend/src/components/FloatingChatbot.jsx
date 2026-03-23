// import React, { useState } from 'react';
// import { MessageCircle, X, Send } from 'lucide-react';
// import { Button } from './ui/button';
// import { Input } from './ui/input';
// import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

// const FloatingChatbot = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     { id: 1, text: "Hi! I'm the Sunrise Media AI assistant. How can I help you today?", sender: 'bot' }
//   ]);
//   const [inputValue, setInputValue] = useState('');

//   const handleSend = () => {
//     if (!inputValue.trim()) return;

//     const userMessage = { id: Date.now(), text: inputValue, sender: 'user' };
//     setMessages([...messages, userMessage]);
//     setInputValue('');

//     // Mock bot response
//     setTimeout(() => {
//       const botResponse = {
//         id: Date.now() + 1,
//         text: "Thanks for your message! A team member will respond shortly. In the meantime, feel free to explore our services above.",
//         sender: 'bot'
//       };
//       setMessages((prev) => [...prev, botResponse]);
//     }, 1000);
//   };

//   return (
//     <>
//       {!isOpen && (
//         <Button
//           onClick={() => setIsOpen(true)}
//           className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600 shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300 z-50 hover:scale-110"
//         >
//           <MessageCircle className="w-6 h-6 text-white" />
//         </Button>
//       )}

//       {isOpen && (
//         <Card className="fixed bottom-8 right-8 w-96 h-[500px] bg-gray-900 border-2 border-cyan-500/30 shadow-2xl z-50 flex flex-col">
//           <CardHeader className="bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border-b border-cyan-500/30 flex-shrink-0">
//             <div className="flex items-center justify-between">
//               <CardTitle className="text-white flex items-center gap-2">
//                 <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
//                 Sunrise Media AI Assistant
//               </CardTitle>
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={() => setIsOpen(false)}
//                 className="text-gray-400 hover:text-white"
//               >
//                 <X className="w-5 h-5" />
//               </Button>
//             </div>
//           </CardHeader>
//           <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
//             {messages.map((message) => (
//               <div
//                 key={message.id}
//                 className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
//               >
//                 <div
//                   className={`max-w-[80%] px-4 py-2 rounded-lg ${
//                     message.sender === 'user'
//                       ? 'bg-gradient-to-r from-cyan-500 to-violet-500 text-white'
//                       : 'bg-gray-800 text-gray-200'
//                   }`}
//                 >
//                   {message.text}
//                 </div>
//               </div>
//             ))}
//           </CardContent>
//           <div className="p-4 border-t border-cyan-500/30 flex-shrink-0">
//             <div className="flex gap-2">
//               <Input
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//                 onKeyPress={(e) => e.key === 'Enter' && handleSend()}
//                 placeholder="Type your message..."
//                 className="bg-gray-800 border-cyan-500/30 text-white focus:border-cyan-400"
//               />
//               <Button
//                 onClick={handleSend}
//                 size="icon"
//                 className="bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600"
//               >
//                 <Send className="w-4 h-4" />
//               </Button>
//             </div>
//           </div>
//         </Card>
//       )}
//     </>
//   );
// };

// export default FloatingChatbot;


// // Code for the WhatsApp button, which is currently not in use but can be easily integrated if needed.
// // import React from 'react';
// // import { MessageCircle } from 'lucide-react'; // Lucide's closest WhatsApp-style icon
// // import { Button } from './ui/button'; 

// // const WhatsAppButton = () => {
// //   const phoneNumber = "917709692919"; 
// //   const message = encodeURIComponent("Hello! I'm interested in your services.");
  
// //   // FIXED: Added the "/" after wa.me and used ${} correctly
// //   const whatsappUrl = `https://wa.me{phoneNumber}?text=${message}`;

// //   return (
// //     <Button
// //       asChild
// //       className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#128C7E] shadow-2xl transition-all duration-300 z-50 hover:scale-110 flex items-center justify-center p-0"
// //     >
// //       <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
// //         {/* MessageCircle is the best Lucide replacement for the WA logo */}
// //         <MessageCircle className="w-8 h-8 text-white fill-white" />
// //       </a>
// //     </Button>
// //   );
// // };

// // export default WhatsAppButton;


import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! I'm the Sunrise Media AI assistant. How can I help you today?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const scrollRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage = { id: Date.now(), text: inputValue, sender: 'user' };
    setMessages([...messages, userMessage]);
    setInputValue('');

    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: "Thanks for your message! A team member will respond shortly.",
        sender: 'bot'
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600 shadow-2xl shadow-cyan-500/50 transition-all duration-300 hover:scale-110 flex items-center justify-center"
        >
          <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-white" />
        </Button>
      )}

      {/* Chat Card */}
      {isOpen && (
        <Card className="flex flex-col w-[calc(100vw-2rem)] sm:w-96 h-[70vh] sm:h-[500px] max-h-[600px] bg-gray-900 border-2 border-cyan-500/30 shadow-2xl overflow-hidden transition-all duration-300">
          
          {/* Header */}
          <CardHeader className="p-4 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border-b border-cyan-500/30">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm md:text-base text-white flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                Sunrise Media AI
              </CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white h-8 w-8"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </CardHeader>

          {/* Messages Area */}
          <CardContent 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-cyan-500/20"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-2 rounded-2xl text-sm md:text-base shadow-sm ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-cyan-500 to-violet-500 text-white rounded-tr-none'
                      : 'bg-gray-800 text-gray-200 rounded-tl-none border border-gray-700'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </CardContent>

          {/* Input Area */}
          <div className="p-4 border-t border-cyan-500/30 bg-gray-900/50">
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              className="flex gap-2"
            >
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-gray-800 border-cyan-500/30 text-white focus:ring-1 focus:ring-cyan-500 text-sm"
              />
              <Button
                type="submit"
                size="icon"
                className="shrink-0 bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </Card>
      )}
    </div>
  );
};

export default FloatingChatbot;
