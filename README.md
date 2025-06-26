# 🏍️ Bike Bliss

**Ride with Passion, Ride with Us**

Bike Bliss is a modern, responsive motorcycle e-commerce website built with Next.js 15 and React 19. Experience the thrill of discovering and purchasing premium motorcycles through our beautifully crafted user interface.

## ✨ Features

- **🎨 Modern UI/UX**: Dark theme with purple accents and smooth animations
- **📱 Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **🛍️ Product Showcase**: Featured motorcycle collection with detailed views
- **🔍 Dynamic Routing**: Individual product pages with detailed specifications
- **💫 Smooth Animations**: Powered by Framer Motion for engaging user experience
- **⚡ Fast Performance**: Built with Next.js 15 using Turbopack for lightning-fast development
- **🎯 TypeScript**: Fully typed for enhanced developer experience and code reliability

## 🏍️ Featured Motorcycles

- **Bat Cycle** - The ultimate superhero ride ($500,000)
- **Thunderbolt Sports Bike** - Dominate the streets with unmatched agility ($150,000)
- **Dirt Bike** - Perfect blend of style and performance for off-road adventures

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React, React Icons
- **UI Components**: Radix UI (Accordion)
- **Development**: Turbopack for faster builds

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/dawoodTanvir/Bike-Bliss-NextJS.git
cd Bike-Bliss-NextJS
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
bike-bliss/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with navigation
│   │   ├── page.tsx            # Homepage
│   │   └── products/
│   │       └── [productsID]/   # Dynamic product pages
│   ├── components/
│   │   ├── BikeHero.tsx        # Hero section with main CTA
│   │   ├── Rides.tsx           # Featured motorcycles showcase
│   │   ├── Review.tsx          # Customer testimonials
│   │   ├── FAQ.tsx             # Frequently asked questions
│   │   ├── Footer.tsx          # Site footer
│   │   ├── NavBar.tsx          # Navigation header
│   │   ├── TheEnd.tsx          # Final CTA section
│   │   └── ui/                 # Reusable UI components
│   ├── lib/
│   └── utils/
├── public/
│   └── images/                 # Motorcycle images and assets
└── ...config files
```

## 🎨 Design System

- **Primary Color**: Purple (#7C3AED, #6B46C1)
- **Background**: Dark theme (#14121F)
- **Typography**: Geist font family
- **Responsive Breakpoints**: Mobile-first approach with Tailwind CSS

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 🌟 Key Components

### BikeHero
Main landing section with compelling headline and primary CTA button.

### Rides 
Showcases three featured motorcycles with alternating layouts and purchase options.

### Product Pages
Dynamic routing system for individual motorcycle details with pricing and descriptions.

### FAQ Section
Accordion-style frequently asked questions for customer support.

## 🚀 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

For other deployment options, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide](https://lucide.dev/) and [React Icons](https://react-icons.github.io/react-icons/)

---

**Ready to ride? Visit [Bike Bliss](http://localhost:3000) and discover your perfect motorcycle today! 🏍️**
