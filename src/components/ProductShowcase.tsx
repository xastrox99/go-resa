"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CrmStatsSection from './ProductStatsCards/CrmStatsSection'
import SystemeWebResa from './ProductStatsCards/SystemeWebResa'
import AppGoResa from './ProductStatsCards/AppGoResa'

const products = [
  {
    id: 1,
    name: "CRM NEO Engage",
    label: "Gestion de la Relation Client",
    component: CrmStatsSection,
  },
  {
    id: 2,
    name: "Système Web Résa",
    label: "Gestion des Réservations",
    component: SystemeWebResa,
  },
  {
    id: 3,
    name: "App Go Resa",
    label: "Application Mobile",
    component: AppGoResa,
  },
  {
    id: 4,
    name: "Chatbot Chatbox",
    label: "Assistant Virtuel",
    component: () => (
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold mb-4">Chatbot Chatbox</h2>
        <p className="text-gray-600">Composant en cours de développement pour l'assistant virtuel Chatbot Chatbox.</p>
      </div>
    ),
  },
]

export default function ProductShowcase() {
  const [currentProductIndex, setCurrentProductIndex] = useState(0)

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white pb-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full bg-purple-100 px-3 py-1"
          >
            <span className="text-xs font-medium text-purple-700">
              {products[currentProductIndex].label}
            </span>
          </motion.div>
        </div>

        {/* Product Navigation */}
        <div className="flex justify-center items-center mb-10 gap-2 flex-wrap">
          {products.map((product, index) => (
            <motion.button
              key={product.id}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                index === currentProductIndex
                  ? 'bg-[#8B5CF6] text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentProductIndex(index)}
            >
              {product.name}
            </motion.button>
          ))}
        </div>

        {/* Product Content */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProductIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              {products[currentProductIndex].component()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

