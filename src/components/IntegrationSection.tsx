"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { PieChart, MessageCircle, Clock, Filter, RefreshCw, Users, LayoutGrid, Bell, Zap, Sparkles, ArrowRight } from 'lucide-react'

interface Feature {
  title: string
  description: string
  icon: React.ElementType
  color: string
}

const features: Feature[] = [
  {
    title: "Rapports statistiques avancés",
    description: "Analyses détaillées et visualisation des données en temps réel",
    icon: PieChart,
    color: "text-pink-400",
  },
  {
    title: "Gestion Multicanal des Campagnes",
    description: "Intégration de WhatsApp, Email, SMS et notifications push",
    icon: MessageCircle,
    color: "text-yellow-400",
  },
  {
    title: "Réservations en temps réel",
    description: "Gestion dynamique des réservations et disponibilités",
    icon: Clock,
    color: "text-green-400",
  },
  {
    title: "Segmentation client avancée",
    description: "Ciblage précis avec filtres dynamiques et statiques",
    icon: Filter,
    color: "text-purple-400",
  },
  {
    title: "Synchronisation des données",
    description: "Mise à jour en temps réel entre tous les systèmes",
    icon: RefreshCw,
    color: "text-blue-400",
  },
  {
    title: "Coordination interne",
    description: "Amélioration de la communication entre les équipes",
    icon: Users,
    color: "text-indigo-400",
  },
  {
    title: "Plan de salle dynamique",
    description: "Gestion visuelle et interactive des espaces",
    icon: LayoutGrid,
    color: "text-cyan-400",
  },
  {
    title: "Rappels automatisés",
    description: "Confirmations et rappels personnalisés pour les clients",
    icon: Bell,
    color: "text-rose-400",
  },
]

const FeatureCard: React.FC<Feature> = ({ title, description, icon: Icon, color }) => (
  <motion.div 
    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 h-full border border-white/10 group hover:bg-white/10 transition-all duration-300"
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300, damping: 30 }}
  >
    <div className={`${color} mb-4 flex items-center justify-between`}>
      <Icon className="w-6 h-6" />
      <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
      {title}
    </h3>
    <p className="text-sm text-gray-700 leading-relaxed">
      {description}
    </p>
  </motion.div>
)

export default function IntegrationSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Exact gradient from the design */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#b8e6d9] via-[#d8e8f0] to-white opacity-40" />
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-2 bg-indigo-100 rounded-full mb-4">
            <Zap className="w-6 h-6 text-indigo-600 mr-2" />
            <span className="text-sm font-semibold text-indigo-600">Intégrations Puissantes</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-yellow-400 mr-3" />
            API et intégrations flexibles
            <Sparkles className="w-8 h-8 text-yellow-400 ml-3" />
          </h2>
          <p className="text-md text-gray-800 max-w-3xl mx-auto flex items-center justify-center">
            Une suite complète d'outils pour optimiser votre gestion et améliorer l'expérience client
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              className="h-full"
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

