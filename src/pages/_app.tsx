import type { AppProps } from 'next/app'
import { ThemeProvider } from '../context/ThemeContext'
import '@/styles/globals.css'
import { useEffect } from 'react'
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const preloaderEl = document.getElementById('preloader');
    if (preloaderEl) {
      setTimeout(() => {
        preloaderEl.style.display = 'none';
      }, 1000);
    }
  }, []);

  return (
    <ThemeProvider>
      <Header />
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Component {...pageProps} />
      </div>
      <Footer />
      <a href ="https://d3nkjlgjwt7x6o.cloudfront.net/cg/files/2zwnnkg7nwyo77zo2fm4yx9/Master_e658r.apk?ss=custom_default" target="_blank" className= "downloadButton">
        <span></span>
         <span></span>
         <span></span>
         <span></span>
        Download App</a>
    </ThemeProvider>
  )
} 