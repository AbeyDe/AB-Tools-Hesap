import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.abtools.calculator',
  appName: 'AB Tools: Calculator',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  android: {
    minWebViewVersion: 100,
    allowMixedContent: false
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: "#667eea",
      showSpinner: false
    },
    StatusBar: {
      style: 'dark',
      backgroundColor: '#667eea'
    }
  }
};

export default config;