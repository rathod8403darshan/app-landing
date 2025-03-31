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
    </ThemeProvider>
  )
} 