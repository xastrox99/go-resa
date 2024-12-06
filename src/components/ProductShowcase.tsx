"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CrmStatsSection from './ProductStatsCards/CrmStatsSection'

const products = [
  {
    id: 1,
    name: "CRM NEO Engage",
    label: "Gestion de la Relation Client",
    component: CrmStatsSection,
  },
  {
    id: 2,
    name: "Email Marketing",
    label: "Automation & Personnalisation",
    component: () => (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Coming Soon</h2>
          <p className="text-gray-600">Cette section sera bientôt disponible</p>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    name: "Analytics Suite",
    label: "Analyses & Rapports",
    component: () => (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Coming Soon</h2>
          <p className="text-gray-600">Cette section sera bientôt disponible</p>
        </div>
      </div>
    ),
  },
]

export default function ProductShowcase() {
  const [currentProductIndex, setCurrentProductIndex] = useState(0)

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full bg-purple-100 px-4 py-1.5"
            >
              <span className="text-sm font-medium text-purple-700">
                {products[currentProductIndex].label}
              </span>
            </motion.div>
          </div>

          {/* Product Navigation */}
          <div className="flex justify-center items-center mb-16 gap-4 flex-wrap">
            {products.map((product, index) => (
              <motion.button
                key={product.id}
                className={`px-8 py-3 rounded-full transition-all ${
                  index === currentProductIndex
                    ? 'bg-[#8B5CF6] text-white shadow-lg'
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
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                {products[currentProductIndex].component()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

