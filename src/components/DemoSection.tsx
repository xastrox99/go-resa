"use client"

import { motion } from 'framer-motion'
import { Check, User, Mail, Building, Phone, ArrowRight } from 'lucide-react'

const benefits = [
  {
    title: "Une présentation détaillée des fonctionnalités adaptées aux besoins spécifiques de votre établissement.",
  },
  {
    title: "Analyse des défis spécifiques de votre établissement et des solutions adaptées pour y répondre.",
  },
  {
    title: "Répondez à toutes vos questions concernant les produits Go Résa, leur fonctionnement et leur intégration dans votre établissement.",
  },
]

export default function DemoSection() {
  return (
    <section className="bg-gradient-to-br from-[#4C206A] to-[#3D1956]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2">
        {/* Left Column - Form */}
        <div className="p-8 lg:p-16 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto w-full"
          >
            <h2 className="text-3xl font-bold text-white mb-8">
              Réservez votre démonstration personnalisée
            </h2>
            <form className="space-y-6">
              <div className="relative">
                <User className="absolute left-0 top-3 h-6 w-6 text-white/60" />
                <input
                  type="text"
                  placeholder="Nom et Prénom"
                  className="w-full bg-transparent border-b border-white/30 py-3 pl-8 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-0 top-3 h-6 w-6 text-white/60" />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent border-b border-white/30 py-3 pl-8 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div className="relative">
                <Building className="absolute left-0 top-3 h-6 w-6 text-white/60" />
                <input
                  type="text"
                  placeholder="Établissement"
                  className="w-full bg-transparent border-b border-white/30 py-3 pl-8 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div className="relative">
                <Phone className="absolute left-0 top-3 h-6 w-6 text-white/60" />
                <input
                  type="tel"
                  placeholder="Numéro de téléphone"
                  className="w-full bg-transparent border-b border-white/30 py-3 pl-8 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 w-full bg-white text-[#4C206A] rounded-full px-8 py-3 font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                Programmer la démo
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Right Column - Benefits */}
        <div className="bg-white p-8 lg:p-16 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-lg mx-auto"
          >
            <h2 className="text-3xl font-bold text-[#4C206A] mb-8">
              Qu'attendre de la démo ?
            </h2>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#4C206A] flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {benefit.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

