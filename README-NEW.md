# Forever Living - Modern React Website

A modern, responsive website for Forever Living Products built with React, Vite, and TailwindCSS.

## 🚀 Features

- ⚡️ **Vite** - Lightning-fast HMR and build times
- ⚛️ **React 18** - Latest React features
- 🎨 **TailwindCSS** - Utility-first CSS framework
- 🎭 **Framer Motion** - Smooth animations and transitions
- 📱 **Fully Responsive** - Mobile-first design
- ♿️ **Accessible** - WCAG compliant
- 🎯 **SEO Optimized** - Meta tags and semantic HTML
- 🚀 **Vercel Ready** - Optimized for deployment

## 📦 Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** TailwindCSS 3
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Deployment:** Vercel

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd osmanforeve-main
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The application will open at `http://localhost:3000`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Vercel will automatically detect Vite and configure settings
4. Deploy!

Or use Vercel CLI:
```bash
npm install -g vercel
vercel
```

### Manual Build

```bash
npm run build
```

The `dist` folder will contain your production-ready files.

## 📁 Project Structure

```
osmanforeve-main/
├── public/
│   └── images/           # Static images
├── src/
│   ├── components/
│   │   ├── layout/       # Layout components (Header, Footer)
│   │   ├── sections/     # Page sections (Hero, Products, etc.)
│   │   └── ui/           # Reusable UI components
│   ├── App.jsx           # Main App component
│   ├── main.jsx          # App entry point
│   └── index.css         # Global styles & Tailwind imports
├── index.html            # HTML entry point
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind configuration
└── vercel.json           # Vercel deployment config
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
theme: {
  extend: {
    colors: {
      primary: { /* your colors */ },
      accent: { /* your colors */ },
    },
  },
}
```

### Content

All content is in the component files under `src/components/sections/`. Edit these files to update:
- Hero section
- Products
- Services
- FAQ
- Contact information

## 📱 Contact Integration

The website integrates with:
- WhatsApp: `https://wa.me/13689976905`
- Email: `Cengsadik2023@Gmail.com`
- Location: Ankara, Türkiye

Update these in the respective component files.

## 🔧 Configuration

### Vite Config
Located in `vite.config.js` - handles build optimization and dev server settings.

### Tailwind Config
Located in `tailwind.config.js` - customize design tokens and theme.

### Vercel Config
Located in `vercel.json` - handles deployment settings, redirects, and headers.

## 📄 License

All rights reserved - Forever Living Company | Osman Aden Hussein

## 🤝 Support

For questions or support, contact:
- WhatsApp: [Contact on WhatsApp](https://wa.me/13689976905)
- Email: Cengsadik2023@Gmail.com

---

Built with ❤️ using modern web technologies

