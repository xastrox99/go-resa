"use client"

import { motion } from 'framer-motion'
import { ArrowRight, Bell, Wallet, Info, Download, Users, Star } from 'lucide-react'
import Card from "./Card"
import Link from 'next/link'

const features = [
  {
    title: "Mes réservations",
    icon: Bell,
  },
  {
    title: "Mon Solde",
    icon: Wallet,
  },
  {
    title: "Informations",
    icon: Info,
  }
]

export default function AppGoResa() {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
        {/* Left Column - Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto w-full max-w-[320px]"
        >
          <div className="relative aspect-[9/16]">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-purple-500/5 rounded-[40px]" />
            <div className="relative bg-black rounded-[40px] p-8 shadow-2xl h-full flex flex-col">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold">
                  <span className="text-white">Go</span>
                  <span className="text-purple-400">Résa</span>
                </h3>
              </div>
              <div className="space-y-6 flex-1 flex flex-col justify-center">
                {features.map((feature, index) => (
                  <motion.button
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="w-full bg-[#FFBD5A] hover:bg-[#E5A94F] text-black px-6 py-4 rounded-full font-medium flex items-center justify-between group transition-all"
                  >
                    <span className="text-base">{feature.title}</span>
                    <feature.icon className="w-5 h-5" />
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Application Go Résa
          </h2>
          <p className="text-sm leading-relaxed text-gray-600">
            Accélérez votre croissance avec l'application Partenaire. Simplifiez la collaboration avec vos affiliés en leur offrant une solution intuitive pour suivre leurs performances et leurs commissions en temps réel. Grâce à des notifications instantanées et un suivi clair, vos partenaires restent engagés et motivés à attirer de nouveaux clients. Une application pensée pour créer un réseau solide et booster le succès de votre établissement.
          </p>

          {/* Stats Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-100">
                  <Download className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Téléchargements</p>
                  <p className="text-2xl font-bold text-gray-900">10,000+</p>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-100">
                  <Users className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Utilisateurs actifs</p>
                  <p className="text-2xl font-bold text-gray-900">5,000+</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Rating Card */}
          <Card className="p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-yellow-100">
                  <Star className="w-5 h-5 text-yellow-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Note moyenne</p>
                  <p className="text-2xl font-bold text-gray-900">4.8/5</p>
                </div>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </Card>

          <Link href="/produits/app-go-resa" passHref legacyBehavior>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-lg bg-[#8B5CF6] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#7C3AED]"
          >
            En Savoir Plus
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </Link>
        </motion.div>
      </div>
    </div>
  )
}

