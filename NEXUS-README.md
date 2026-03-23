# Nexus AI Social Media Portfolio

A high-end, professional Y3K Hyperfuturism portfolio website for Nexus AI Social Media agency.

## 🚀 Features

- **Y3K Hyperfuturism Design** - Deep charcoal/black theme with electric cyan and violet neon accents
- **Hero Section** - Animated heading with glowing gradients and strong CTA
- **Services Showcase** - 3 AI-powered service offerings
- **Process Timeline** - 4-step vertical timeline with scroll animations
- **Case Studies** - PASTOR method implementation showcasing 615% engagement growth
- **Trust Signals** - Fortune 500 client logos and testimonial carousel
- **Contact Form** - Fully functional with Calendly integration
- **Floating AI Chatbot** - Interactive chatbot for lead capture
- **Fully Responsive** - Mobile-friendly design with hamburger menu

## 🛠️ Tech Stack

- **React 19** - Modern React with hooks
- **Tailwind CSS** - Utility-first styling
- **Shadcn/ui** - High-quality UI components
- **Lucide React** - Beautiful icons
- **React Router** - Client-side routing

## 📦 Installation

1. **Extract the zip file**
   ```bash
   unzip nexus-ai-portfolio.zip
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   yarn install
   # or
   npm install
   ```

3. **Start the development server**
   ```bash
   yarn start
   # or
   npm start
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 🏗️ Build for Production

```bash
yarn build
# or
npm run build
```

The optimized production build will be in the `build/` folder, ready to deploy to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

## 📁 Project Structure

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ui/              # Shadcn UI components
│   │   ├── Navbar.jsx       # Navigation header
│   │   ├── Hero.jsx         # Hero section
│   │   ├── Services.jsx     # Services showcase
│   │   ├── Process.jsx      # Process timeline
│   │   ├── CaseStudies.jsx  # Case studies section
│   │   ├── TrustSignals.jsx # Logos & testimonials
│   │   ├── Contact.jsx      # Contact form
│   │   ├── Footer.jsx       # Footer
│   │   └── FloatingChatbot.jsx # AI chatbot
│   ├── hooks/
│   │   └── use-toast.js     # Toast notifications
│   ├── lib/
│   │   └── utils.js         # Utility functions
│   ├── mock.js              # Mock data
│   ├── App.js               # Main app component
│   ├── App.css              # Global styles
│   └── index.js             # Entry point
├── package.json
├── tailwind.config.js
└── craco.config.js
```

## 🎨 Customization

### Update Content

Edit `/src/mock.js` to customize:
- Services descriptions
- Process steps
- Case study details
- Client testimonials
- Company logos

### Change Colors

Edit `/src/index.css` CSS variables:
```css
:root {
  --cyan: #00d9ff;
  --violet: #8b5cf6;
  --background: #000000;
}
```

### Modify Typography

Fonts are loaded from Google Fonts in `/src/App.css`:
- **Rajdhani/Orbitron** - Headings
- **Inter** - Body text

## 🌐 Deployment

### Netlify
```bash
yarn build
# Drag and drop the build/ folder to Netlify
```

### Vercel
```bash
vercel deploy
```

### GitHub Pages
```bash
yarn build
# Push the build folder to gh-pages branch
```

## 📝 Notes

- All data is currently **static/mock data** stored in `/src/mock.js`
- Contact form shows success toast but doesn't send emails (can be integrated with EmailJS, Formspree, etc.)
- Calendly button links to calendly.com (update with your actual Calendly link in Contact.jsx)
- Chatbot is frontend-only (can be integrated with real AI backend)

## 🎯 Key Sections

1. **Hero** - Animated headline with CTA buttons
2. **Services** - AI-Driven Content Strategy, Real-Time Community Management, Predictive Ad Analytics
3. **Process** - Data Extraction → Strategy Synthesis → Creative Execution → ROI Optimization
4. **Case Study** - Lumina Tech success story with PASTOR method
5. **Trust** - Fortune 500 logos + rotating testimonials
6. **Contact** - Form + Calendly integration + contact info

## 💡 Tips

- Images are loaded from Unsplash via CDN
- All animations use CSS transitions (no heavy libraries)
- Mobile-first responsive design
- Optimized for performance with lazy loading

## 📄 License

This is a custom portfolio website. Feel free to modify and use as needed.

## 🤝 Support

For questions or customization help, reach out to the development team.

---

Built with ❤️ using React, Tailwind CSS, and Shadcn/ui
