import Header from '@/components/Header'
import Footer from '@/components/Footer'
import React from 'react'

const Home: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <Header />
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1>Home</h1>

        </div>
        <Footer />
    </div>
  )
}

export default Home