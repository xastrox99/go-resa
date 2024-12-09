"use client"

import { Menu } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import MobileNavbar from "./MobileNav/MobileNavbar"
import DesktopNavbar from "./DesktopNav/DesktopNavbar"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className={`relative transition-all duration-300 ${
          scrolled ? 'py-2 shadow-md bg-white/80 backdrop-blur-lg' : 'py-4 bg-transparent'
        }`}
      >
        <div className={`absolute inset-0 bg-gradient-to-r from-[#b8e6d9]/60 to-[#d8e8f0]/60 transition-opacity duration-300 ${
          scrolled ? 'opacity-50' : 'opacity-90'
        } -z-10`} />

        <div className="relative flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="relative z-20 transition-transform hover:scale-105">
            <Image
              src="/images/2.svg"
              alt="GoResa Logo"
              width={scrolled ? 80 : 100}
              height={scrolled ? 48 : 60}
              className="object-contain transition-all duration-300"
            />
          </Link>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-20 rounded-md p-2 text-gray-700 hover:bg-white/20 md:hidden"
          >
            <Menu className="h-5 w-5" />
          </motion.button>

          <DesktopNavbar scrolled={scrolled} />

          <AnimatePresence>
            {isOpen && (
              <>
                <MobileNavbar />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/20 md:hidden"
                  onClick={() => setIsOpen(false)}
                  style={{ zIndex: 5 }}
                />
              </>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.nav>
  )
}

