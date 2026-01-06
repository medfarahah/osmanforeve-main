# 🚀 Deployment Guide

## Prerequisites

Before deploying, ensure:
- ✅ All dependencies are installed (`npm install`)
- ✅ Build completes successfully (`npm run build`)
- ✅ Images are in `public/images/` folder
- ✅ Contact information is updated in components

## Option 1: Vercel (Recommended) ⭐

### Why Vercel?
- ✨ Zero configuration for Vite
- 🚀 Automatic deployments on git push
- 🌍 Global CDN
- 🔒 Free HTTPS
- 📊 Analytics included

### Steps:

#### A. Using Vercel Dashboard (Easiest)

1. **Prepare Your Code**
```bash
# Initialize git if not already done
git init
git add .
git commit -m "React Forever Living Website"
```

2. **Push to GitHub**
```bash
# Create a new repository on GitHub first, then:
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git branch -M main
git push -u origin main
```

3. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login (use GitHub account)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will detect Vite automatically
   - Click "Deploy"
   - Done! ✨

#### B. Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

### Configuration
Your `vercel.json` is already configured:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

## Option 2: Netlify

### Using Netlify Dashboard

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`

2. **Deploy**
   - Drag & drop the `dist` folder, OR
   - Connect GitHub repository

### Using Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Production deploy
netlify deploy --prod
```

## Option 3: GitHub Pages

1. **Install gh-pages**
```bash
npm install --save-dev gh-pages
```

2. **Add to package.json**
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
},
"homepage": "https://YOUR-USERNAME.github.io/YOUR-REPO"
```

3. **Configure base in vite.config.js**
```js
export default defineConfig({
  base: '/YOUR-REPO/',
  // ... rest of config
})
```

4. **Deploy**
```bash
npm run deploy
```

## Option 4: Cloudflare Pages

1. **Using Dashboard**
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)
   - Pages → Create a project
   - Connect GitHub
   - Build settings:
     - Build command: `npm run build`
     - Build output directory: `dist`

2. **Using Wrangler CLI**
```bash
npm install -g wrangler
wrangler pages publish dist
```

## Option 5: Traditional Web Hosting

For cPanel, FTP, or traditional hosting:

1. **Build the project**
```bash
npm run build
```

2. **Upload `dist` folder contents**
   - Use FTP client (FileZilla, etc.)
   - Upload all files from `dist/` to your web root
   - Usually: `public_html/` or `www/`

3. **Configure .htaccess** (if Apache)
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## Post-Deployment Checklist

After deployment, verify:

- ✅ Homepage loads correctly
- ✅ All images display properly
- ✅ Navigation works smoothly
- ✅ Mobile menu functions
- ✅ WhatsApp link opens correctly
- ✅ Contact form validation works
- ✅ FAQ accordion expands/collapses
- ✅ All sections are accessible
- ✅ Animations play smoothly
- ✅ SEO meta tags are correct

## Testing Your Deployment

### Performance Testing
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

### Mobile Testing
- Chrome DevTools (F12 → Toggle device toolbar)
- Real device testing
- [BrowserStack](https://www.browserstack.com/)

### SEO Testing
- [Google Search Console](https://search.google.com/search-console)
- View source to verify meta tags
- Test structured data

## Continuous Deployment

### Vercel/Netlify with GitHub
Once set up, every push to main branch auto-deploys:

```bash
# Make changes
git add .
git commit -m "Update content"
git push

# Site automatically updates! 🎉
```

## Environment Variables

If you need environment variables:

### Vercel
```bash
# Dashboard: Settings → Environment Variables
# Or via CLI:
vercel env add
```

### Netlify
```bash
# Dashboard: Site settings → Environment variables
# Or netlify.toml:
[build.environment]
  VITE_API_URL = "https://api.example.com"
```

### .env file (for local development only)
```env
VITE_WHATSAPP_NUMBER=13689976905
VITE_EMAIL=Cengsadik2023@Gmail.com
```

**Note:** Never commit `.env` to git!

## Custom Domain

### Vercel
1. Go to project → Settings → Domains
2. Add your domain
3. Update DNS records as instructed

### Netlify
1. Domain settings → Add custom domain
2. Configure DNS

## SSL Certificate

All major platforms (Vercel, Netlify, Cloudflare) provide free automatic HTTPS.

For traditional hosting, use [Let's Encrypt](https://letsencrypt.org/).

## Troubleshooting

### Build fails on deployment
```bash
# Test build locally first
npm run build

# Check for errors in:
# - Missing dependencies
# - File path issues
# - Image references
```

### 404 on refresh
- Ensure SPA redirect is configured
- Check `vercel.json` rewrites
- Add `.htaccess` for Apache
- Configure nginx if needed

### Images not loading
- Images must be in `public/images/`
- Use absolute paths: `/images/photo.jpg`
- Not relative: `./images/photo.jpg`
- Check file names (case-sensitive on Linux)

### Slow loading
- Optimize images (compress, use WebP)
- Enable caching headers (already in vercel.json)
- Use lazy loading (already implemented)
- Check bundle size: `npm run build`

## Need Help?

- 📚 [Vercel Docs](https://vercel.com/docs)
- 📚 [Netlify Docs](https://docs.netlify.com)
- 💬 Contact: [WhatsApp](https://wa.me/13689976905)

---

Happy deploying! 🚀

