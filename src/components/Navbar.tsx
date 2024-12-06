"use client"

import { useState, useEffect } from "react"
import { Menu } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
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
        className={`relative ${
          scrolled ? ' shadow-lg bg-white/80 backdrop-blur-lg' : 'py-1'
        } transition-all duration-300`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#b8e6d9] to-[#d8e8f0] opacity-90 -z-10" />

        <div className="relative flex items-center justify-between px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
          <Link href="/" className="relative z-20 transition-transform hover:scale-105">
            <Image
              src="/images/2.svg"
              alt="GoResa Logo"
              width={90}
              height={54}
              className="object-contain"
            />
          </Link>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-20 rounded-md p-2 text-gray-700 hover:bg-white/20 md:hidden"
          >
            <Menu className="h-6 w-6" />
          </motion.button>

          <DesktopNavbar />

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

