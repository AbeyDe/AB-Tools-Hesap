# Deployment Guide

## GitHub Pages Deployment (Automatic)

The project includes GitHub Actions that automatically deploy to GitHub Pages when you push to the main branch.

### Setup:
1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Source: "Deploy from a branch"
4. Branch: "gh-pages"
5. Your app will be live at: `https://yourusername.github.io/ab-tools-calculator`

## Manual Deployment Options

### Netlify
1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy automatically on git push

### Vercel
1. Import your GitHub repository to Vercel
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
npm run build
firebase deploy
```

## Android App Deployment

### Google Play Console Setup:
1. Create developer account ($25 one-time fee)
2. Create new app in Play Console
3. Fill out store listing information
4. Upload APK/AAB file
5. Set up content rating
6. Set pricing (free)
7. Review and publish

### App Store Assets Needed:
- App icon (512x512 PNG)
- Feature graphic (1024x500 PNG)
- Screenshots (phone and tablet)
- App description
- Privacy policy
- Developer contact info

## Testing Deployment

### Local Testing:
```bash
npm run build
npm run preview
```

### Mobile Testing:
1. Deploy to GitHub Pages
2. Open on mobile browser
3. Test "Add to Home Screen" functionality
4. Verify offline capabilities
5. Test all calculator functions

## Performance Optimization

The build is already optimized with:
- Code splitting
- Asset compression
- Service worker caching
- Minified CSS/JS
- Optimized images

## Monitoring

After deployment, monitor:
- Core Web Vitals
- PWA install rates
- User engagement
- Error rates
- Performance metrics