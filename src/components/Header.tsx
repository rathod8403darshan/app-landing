import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.jfif" 
                alt="Logo"
                width={40}
                height={40}
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* Login Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleSidebar}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-16 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <nav className="px-4 py-6">
          <ul className="space-y-4">
            <li>
              <Link 
                href="/"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/faq"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link 
                href="/contact"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Login
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header