import type { AppProps } from 'next/app'
import { ThemeProvider } from '../context/ThemeContext'
// import '../styles/globals.css'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
} 