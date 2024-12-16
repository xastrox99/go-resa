"use client"

import { motion } from "framer-motion"
import { ArrowRight, Check, Sparkles, Zap, Clock, Shield, Users, BarChart } from 'lucide-react'
import DemoSection from '@/components/DemoSection'

const benefits = [
  {
    icon: Clock,
    title: "Configuration rapide",
    description: "Mise en place en quelques minutes, sans configuration complexe."
  },
  {
    icon: Shield,
    title: "Sans engagement",
    description: "Testez toutes les fonctionnalités sans engagement ni carte bancaire."
  },
  {
    icon: Users,
    title: "Support dédié",
    description: "Accompagnement personnalisé pendant toute la période d'essai."
  },
  {
    icon: BarChart,
    title: "Données réelles",
    description: "Testez avec vos propres données pour une expérience authentique."
  }
]

const features = [
  "CRM NEO Engage - Gestion complète de la relation client",
  "Système Web Résa - Plateforme de réservation en ligne",
  "App Go Résa - Application mobile de gestion",
  "Chatbot Chatbox - Assistant virtuel intelligent",
  "API Integration - Connexion avec vos outils existants",
  "Tableau de bord personnalisable",
  "Rapports et analyses détaillés",
  "Support technique prioritaire"
]

export default function DemoGratuite() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-white" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-1.5 mb-6"
            >
              <Sparkles className="w-5 h-5 text-purple-700" />
              <span className="text-sm font-medium text-purple-700">
                Essai gratuit de 14 jours
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
            >
              Découvrez la puissance de GoResa
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-xl text-gray-600 mb-8"
            >
              Transformez la gestion de votre établissement avec notre suite complète d'outils. 
              Commencez votre essai gratuit dès aujourd'hui.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Tout ce qui est inclus dans votre démo gratuite
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Accédez à toutes les fonctionnalités premium pendant votre période d'essai. 
                Aucune limitation, découvrez GoResa dans son intégralité.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-green-500 mt-1" />
                    <span className="text-gray-600">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-100 to-blue-100 opacity-50 blur-2xl" />
              <img
                src="/images/demo-preview.webp"
                alt="GoResa Dashboard Preview"
                className="relative rounded-2xl mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Demo Form Section */}
      <section className="pt-16 sm:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Commencez votre essai gratuit
            </h2>
            <p className="text-xl text-gray-600">
              Remplissez le formulaire ci-dessous pour accéder à votre démo personnalisée. 
              Notre équipe vous contactera rapidement pour vous accompagner dans la prise en main.
            </p>
          </motion.div>
        </div>
        <DemoSection />
      </section>
    </main>
  )
}

