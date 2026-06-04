![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)
![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.x-0055FF?logo=framer)
![EmailJS](https://img.shields.io/badge/EmailJS-3.x-FF6B6B)
![Vite](-646CFF?logo=vite)

📺 ABC Television Manufacturing - Complete Documentation
🚀 Project Overview
ABC Television Manufacturing is a modern, fully responsive web application for a TV manufacturing company. The platform showcases television products, allows browsing through various models, and enables customers to submit order requests directly to the sales team.

✨ Key Features
Responsive Design - Seamless experience across all devices (mobile, tablet, desktop)

Product Catalog - Browse through LED, OLED, and QLED television models

Product Filtering - Filter by category and search by product name

Product Details - Detailed specifications, image gallery with zoom, key features

Order Request System - Integrated with EmailJS for automated quote requests

Modern Animations - Smooth transitions, 3D card effects, parallax scrolling

Glassmorphism UI - Modern translucent design elements with backdrop blur

Interactive Components - Hover effects, typewriter text, particle background

🛠️ Technology Stack
Technology	Version	Purpose
React	18.x	Frontend framework
Vite	5.x	Build tool & dev server
React Router DOM	6.x	Client-side routing
Tailwind CSS	4.x	Utility-first styling
Framer Motion	11.x	Advanced animations
React Hook Form	7.x	Form handling
Zod	3.x	Schema validation
EmailJS	3.x	Email integration
React Icons	5.x	Icon library
📁 Project Structure
text
tv-manufacturing/
├── public/
│   └── images/
│       └── products/           # Product images (placeholders used)
├── src/
│   ├── assets/                 # Static assets (icons, logos)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx      # Navigation with glass effect
│   │   │   ├── Footer.jsx      # Footer with wave separator
│   │   │   └── Layout.jsx      # Main layout wrapper
│   │   ├── product/
│   │   │   ├── ProductCard.jsx # 3D tilt card component
│   │   │   ├── ProductGrid.jsx # Filterable product grid
│   │   │   ├── ImageGallery.jsx# Interactive gallery with lightbox
│   │   │   └── SpecsTable.jsx  # Product specifications table
│   │   ├── home/
│   │   │   ├── HeroSection.jsx # Hero with particle background
│   │   │   └── FeaturedProducts.jsx # Staggered featured products
│   │   ├── form/
│   │   │   └── OrderRequestForm.jsx # Animated order form
│   │   └── ui/
│   │       ├── Modal.jsx       # Reusable modal component
│   │       └── ScrollToTop.jsx # Floating scroll button
│   ├── data/
│   │   └── products.js         # Product data (JSON array)
│   ├── pages/
│   │   ├── HomePage.jsx        # Landing page
│   │   ├── ProductListingPage.jsx # All products
│   │   ├── ProductDetailPage.jsx  # Single product view
│   │   ├── OrderRequestPage.jsx   # Order form page
│   │   └── AboutPage.jsx       # Company information
│   ├── hooks/
│   │   └── useProducts.js      # Custom products hook
│   ├── lib/
│   │   ├── emailjs.js          # EmailJS configuration
│   │   └── helpers.js          # Utility functions
│   ├── App.jsx                 # Main app with routing
│   ├── main.jsx                # Entry point
│   └── index.css               # Tailwind v4 configuration
├── .env                        # Environment variables
├── index.html
├── package.json
├── vite.config.js
└── README.md
🎨 Styling & Animations Features
Tailwind CSS v4 Customizations
css
/* Custom theme variables */
@theme {
  --font-heading: "Poppins", sans-serif;
  --font-body: "Inter", sans-serif;
  --color-brand-500: #5c7cfa;
  --color-accent-500: #fcc419;
}

/* Custom utilities */
@utility btn-primary { ... }
@utility btn-accent { ... }
Animation Highlights
Component	Animation
Hero Section	Particle background + typewriter text
Product Cards	3D tilt on hover, staggered entrance
Image Gallery	Smooth transitions, zoom lightbox
Navigation	Sticky glass effect, scroll indicator
Form	Success toast, focus scale effects
Scroll Button	Floating action button with spring
🔧 Installation & Setup
Prerequisites
Node.js (v18 or higher)

npm or yarn package manager

Step 1: Clone & Install
bash
# Create new project
npm create vite@latest tv-manufacturing -- --template react
cd tv-manufacturing

# Install dependencies
npm install react-router-dom react-hook-form @hookform/resolvers zod @emailjs/browser framer-motion react-icons
npm install -D tailwindcss @tailwindcss/vite
Step 2: Configure Vite
vite.config.js

javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
Step 3: Environment Variables
Create .env file in root directory:

env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
Step 4: EmailJS Setup
Create an account at EmailJS

Create an Email Service (Gmail, Outlook, etc.)

Create an Email Template with these variables:

{{customer_name}}

{{customer_email}}

{{customer_phone}}

{{customer_country}}

{{customer_company}}

{{product_name}}

{{quantity}}

{{message}}

{{submission_date}}

Copy your credentials to the .env file

Step 5: Run Development Server
bash
npm run dev
Visit http://localhost:5173

Step 6: Production Build
bash
npm run build
npm run preview
📱 Pages & Routes
Route	Page	Description
/	HomePage	Hero section, featured products, CTA
/products	ProductListingPage	All products with filters
/products/:slug	ProductDetailPage	Single product details
/request-order	OrderRequestPage	Order request form
/about	AboutPage	Company information
🧩 Component Documentation
ProductCard Component
jsx
<ProductCard product={productObject} />
3D tilt effect on hover

Glassmorphism background

Animated image zoom

Category badge with animation

ImageGallery Component
jsx
<ImageGallery images={arrayOfImageUrls} />
Thumbnail navigation

Smooth image transitions

Lightbox modal on click

Hover zoom effect

OrderRequestForm Component
jsx
<OrderRequestForm />
Zod schema validation

React Hook Form integration

Loading spinner animation

Success/error toast messages

Auto-fills product from URL param

🎯 Customization Guide
Changing Colors
Edit src/index.css:

css
@theme {
  --color-brand-500: #5c7cfa;  /* Primary brand color */
  --color-brand-600: #4c6ef5;
  --color-brand-700: #4263eb;
  --color-accent-500: #fcc419;  /* Accent color */
  --color-accent-600: #fab005;
}
Adding Products
Edit src/data/products.js:

javascript
export const products = [
  {
    id: "4",
    name: "Your TV Model Name",
    slug: "your-tv-slug",
    category: "OLED|QLED|LED",
    screenSize: 65,
    resolution: "4K UHD",
    display: "Display technology",
    smartTV: "OS Name",
    connectivity: "HDMI, USB, WiFi",
    audio: "Speaker specs",
    dimensions: "W x H x D mm",
    weight: "Weight in kg",
    priceRange: "$price range",
    features: ["Feature 1", "Feature 2"],
    images: ["/images/products/your-image-1.jpg", "/images/products/your-image-2.jpg"],
    isFeatured: true|false
  }
];
Adding Real Images
Place images in public/images/products/

Update image paths in products.js:

javascript
images: ["/images/products/tv-model-front.jpg"]
🌐 Browser Support
Browser	Version
Chrome	90+
Firefox	88+
Safari	14+
Edge	90+
Opera	76+
📦 Production Deployment
Deploy to Netlify
bash
npm run build
# Drag dist/ folder to Netlify
Deploy to Vercel
bash
npm install -g vercel
vercel
Deploy to GitHub Pages
bash
npm run build
npm install -g gh-pages
gh-pages -d dist
🔒 Environment Variables (Production)
When deploying, set these environment variables in your hosting platform:

text
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
🐛 Troubleshooting
Issue: Tailwind CSS not working
Solution: Ensure @tailwindcss/vite is installed and vite.config.js includes tailwindcss() plugin.

Issue: EmailJS not sending
Solution: Check .env variables are correct and template IDs match exactly.

Issue: Images not loading
Solution: Verify image paths - use absolute paths starting with /images/

Issue: Build errors
Solution: Clear cache: rm -rf node_modules/.vite and rebuild.

📄 License
This project is proprietary and confidential. All rights reserved.

📞 Support
For technical support or inquiries:

Documentation Version: 1.0.0

Last Updated: December 2026

🙏 Acknowledgments
Tailwind CSS team for the amazing v4 framework

Framer Motion for the buttery smooth animations

EmailJS for seamless email integration
