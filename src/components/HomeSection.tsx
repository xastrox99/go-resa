"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const HomeSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Gradient background with improved opacity and blur */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#b8e6d9]/40 via-[#d8e8f0]/40 to-white/80 backdrop-blur-[100px] -z-10" />

      {/* Content container with improved padding and max-width */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-32 pb-24 lg:pt-40 lg:pb-32">
          <div className="flex flex-col-reverse gap-16 lg:flex-row lg:items-center lg:gap-24">
            {/* Left content */}
            <motion.div 
              className="flex-1 order-2 lg:order-1 space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Label */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center rounded-full bg-purple-100 px-4 py-1.5"
              >
                <span className="text-sm font-medium text-purple-700">
                  Solution de Gestion Tout-en-Un
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
              >
                Maîtrisez chaque détail de votre établissement
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-xl leading-relaxed text-gray-600"
              >
                Transformez vos défis quotidiens en opportunités concrètes, et
                renforcez la gestion et le succès de votre établissement.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex flex-col gap-4 sm:flex-row sm:items-center"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center rounded-xl bg-[#4C206A] px-8 py-3.5 text-lg font-semibold text-white shadow-lg shadow-purple-500/20 transition-all hover:bg-[#3D1956] hover:shadow-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                  Demander une Démo
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3.5 text-lg font-semibold text-gray-800 shadow-lg shadow-gray-200/50 transition-all hover:bg-gray-50 hover:shadow-gray-300/50 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2"
                >
                  En Savoir Plus
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right content */}
            <motion.div
              className="flex-1 order-1 lg:order-2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="relative">
                {/* Decorative blur effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-100 to-blue-100 opacity-50 blur-2xl" />
                
                <Image
                  src="/images/1.svg"
                  alt="Hero"
                  width={600}
                  height={600}
                  className="relative w-full h-auto rounded-2xl"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative bottom gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white" />
    </section>
  )
}

export default HomeSection
