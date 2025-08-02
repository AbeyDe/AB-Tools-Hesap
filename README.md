# AB Tools: Calculator

A modern, responsive calculator app built for Android 12+ devices. Features a clean Material Design-inspired interface with PWA capabilities for easy deployment to app stores.

## Features

- ✨ Modern, clean interface optimized for mobile devices
- 🧮 Full calculator functionality (basic arithmetic operations)
- 📱 Progressive Web App (PWA) ready for app store deployment
- 🎨 Material Design-inspired UI with smooth animations
- 📐 Responsive design that works on all screen sizes
- 🔢 Smart number formatting and error handling
- ⚡ Built with React and TypeScript for reliability

## Screenshots

The calculator features:
- Large, easy-to-read display
- Touch-optimized buttons with haptic feedback
- Gradient backgrounds and smooth animations
- Professional AB Tools branding

## Technology Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **PWA**: Vite PWA Plugin
- **Styling**: CSS3 with modern features
- **Icons**: Custom SVG icons

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ab-tools-calculator.git
cd ab-tools-calculator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## PWA Features

This app is configured as a Progressive Web App with:
- Offline functionality
- App-like experience when installed
- Optimized for mobile devices
- Manifest file for app store deployment

## Deployment

### Web Deployment
Deploy the `dist` folder to any static hosting service like:
- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting

### Android App Store
1. Build the production version
2. Use tools like Capacitor or Cordova to package as Android APK
3. Submit to Google Play Store

## Development

### Project Structure
```
src/
├── components/          # React components
│   ├── Calculator.tsx   # Main calculator component
│   ├── Display.tsx      # Display component
│   └── Button.tsx       # Button component
├── utils/              # Utility functions
│   └── calculator.ts   # Calculator logic
├── App.tsx             # Main app component
└── main.tsx           # App entry point
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**AB Tools**

---

Built with ❤️ for Android 12+ devices