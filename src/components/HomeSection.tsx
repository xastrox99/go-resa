"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Info, Briefcase } from 'lucide-react'
import { Users, Building2, Star, TrendingUp } from 'lucide-react'
import CountUp from 'react-countup'

const HomeSection = () => {
  const stats = [
    {
      icon: Users,
      value: 2000,
      label: "Utilisateurs Actifs",
      color: "text-blue-600",
      position: { bottom: '10%', left: '25%' },
      size: 'small',
      suffix: '+'
    },
    {
      icon: Building2,
      value: 200,
      label: "Établissements",
      color: "text-purple-600",
      position: { top: '5%', right: '25%' },
      size: 'medium',
      suffix: '+'
    },
    {
      icon: Star,
      value: 98,
      label: "Satisfaction",
      color: "text-yellow-600",
      position: { top: '40%', left: '10%' },
      size: 'small',
      suffix: '%'
    },
    {
      icon: TrendingUp,
      value: 35,
      label: "Croissance Annuelle",
      color: "text-green-600",
      position: { bottom: '25%', right: '15%' },
      size: 'medium',
      suffix: '%'
    }
  ]

  // Animation variants for floating effect
  const floatingAnimation = {
    initial: (index: number) => ({
      y: 0,
      transition: {
        delay: index * 0.2,
      },
    }),
    animate: (index: number) => ({
      y: [0, -10, 0],
      transition: {
        delay: index * 0.2,
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      },
    }),
  }

  return (
    <section className="relative overflow-hidden">
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
                className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-1.5"
              >
                <Briefcase className="w-4 h-4 text-purple-700" />
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
                <motion.a
                  href="#demo-section"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center rounded-xl bg-[#4C206A] px-8 py-3.5 text-lg font-semibold text-white shadow-lg shadow-purple-500/20 transition-all hover:bg-[#3D1956] hover:shadow-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                  Demander une Démo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3.5 text-lg font-semibold text-gray-800 shadow-lg shadow-gray-200/50 transition-all hover:bg-gray-50 hover:shadow-gray-300/50 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2"
                >
                  En Savoir Plus
                  <Info className="ml-2 h-5 w-5" />
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
                
                <div className="relative">
                  <Image
                    src="/images/women_home.png"
                    alt="Hero"
                    width={600}
                    height={600}
                    className="relative w-full h-auto max-w-2xl mx-auto"
                    priority
                  />
                  
                  {/* Animated Stats */}
                  <div className="absolute inset-0">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        className="absolute"
                        custom={index}
                        initial="initial"
                        animate="animate"
                        variants={floatingAnimation}
                        style={stat.position}
                      >
                        <div className={`bg-white bg-opacity-80 backdrop-blur-sm rounded-xl shadow-lg p-3 ${
                          stat.size === 'large' ? 'min-w-[160px]' :
                          stat.size === 'medium' ? 'min-w-[140px]' :
                          'min-w-[120px]'
                        }`}>
                          <stat.icon className={`${
                            stat.size === 'large' ? 'w-8 h-8' :
                            stat.size === 'medium' ? 'w-7 h-7' :
                            'w-6 h-6'
                          } ${stat.color}`} />
                          <div className={`mt-2 font-bold text-gray-900 ${
                            stat.size === 'large' ? 'text-2xl' :
                            stat.size === 'medium' ? 'text-xl' :
                            'text-lg'
                          }`}>
                            <CountUp end={stat.value} duration={2.5} suffix={stat.suffix || ''} />
                          </div>
                          <div className={`font-medium text-gray-600 ${
                            stat.size === 'large' ? 'text-sm' :
                            stat.size === 'medium' ? 'text-xs' :
                            'text-[10px]'
                          }`}>
                            {stat.label}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
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

