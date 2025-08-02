# Android App Setup Guide

## Method 1: Using Capacitor (Recommended)

### Prerequisites
- Node.js 16+
- Android Studio
- Java Development Kit (JDK) 11+

### Step 1: Install Capacitor
```bash
npm install @capacitor/core @capacitor/cli @capacitor/android
```

### Step 2: Build the web app
```bash
npm run build
```

### Step 3: Initialize Capacitor
```bash
npx cap init "AB Tools: Calculator" "com.abtools.calculator"
```

### Step 4: Add Android platform
```bash
npx cap add android
```

### Step 5: Copy web assets
```bash
npx cap copy android
```

### Step 6: Open in Android Studio
```bash
npx cap open android
```

### Step 7: Build APK in Android Studio
1. In Android Studio, go to Build → Generate Signed Bundle/APK
2. Choose APK
3. Create a new keystore or use existing
4. Build release APK

## Method 2: Using PWA Builder

### Step 1: Visit PWA Builder
Go to https://www.pwabuilder.com/

### Step 2: Enter your GitHub Pages URL
Enter: `https://yourusername.github.io/ab-tools-calculator`

### Step 3: Generate Android Package
1. Click "Build My PWA"
2. Select "Android" platform
3. Download the generated APK

## Method 3: Manual APK Creation

### Using Android Studio:
1. Create new project with WebView
2. Point WebView to your GitHub Pages URL
3. Configure manifest for calculator permissions
4. Build and sign APK

## Play Store Submission Checklist

### Required Assets:
- [ ] High-res icon (512x512 PNG)
- [ ] Feature graphic (1024x500 PNG)
- [ ] Screenshots (at least 2, up to 8)
- [ ] App description
- [ ] Privacy policy URL
- [ ] Signed APK or AAB file

### App Store Optimization:
- **Title**: "AB Tools: Calculator"
- **Short Description**: "Modern calculator for Android 12+"
- **Keywords**: calculator, math, arithmetic, tools, utility
- **Category**: Tools or Productivity

### Testing Before Upload:
- [ ] Test on multiple Android devices
- [ ] Verify all calculator functions work
- [ ] Check responsive design
- [ ] Test offline functionality
- [ ] Verify PWA install prompt works