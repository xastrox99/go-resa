"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Users,
  Star,
  Zap,
  Boxes,
  Bell,
  Sparkles,
} from "lucide-react";
import DemoSection from "@/components/DemoSection";

const features = [
  {
    title: "Gestion des réservations",
    description:
      "Gérez facilement toutes vos réservations, confirmations et annulations depuis votre téléphone.",
    icon: Boxes,
    benefits: [
      "Notifications en temps réel",
      "Confirmation instantanée",
      "Suivi des réservations",
    ],
  },
  {
    title: "Communication client",
    description:
      "Communiquez directement avec vos clients via l'application pour des confirmations, des rappels ou des offres spéciales.",
    icon: Bell,
    benefits: [
      "Messagerie intégrée",
      "Notifications push",
      "Personnalisation des messages",
    ],
  },
  {
    title: "Suivi des performances",
    description:
      "Suivez les performances de votre établissement en temps réel avec des données clés et des analyses.",
    icon: Zap,
    benefits: [
      "Tableaux de bord intuitifs",
      "Rapports de performance",
      "Indicateurs clés",
    ],
  },
  {
    title: "Gestion des partenaires",
    description:
      "Gérez vos partenariats et suivez les commissions générées par vos affiliés.",
    icon: Users,
    benefits: [
      "Suivi des commissions",
      "Gestion des affiliés",
      "Rapports de partenariat",
    ],
  },
];

const stats = [
  {
    value: "4.8/5",
    label: "Note moyenne des utilisateurs",
    icon: Star,
    color: "text-yellow-500",
  },
  {
    value: "10k+",
    label: "Téléchargements",
    icon: Download,
    color: "text-green-500",
  },
  {
    value: "5k+",
    label: "Utilisateurs actifs",
    icon: Users,
    color: "text-purple-500",
  },
];

export default function AppGoResaPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Gradient background with improved opacity and blur */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#b8e6d9]/40 via-[#d8e8f0]/40 to-white/80 backdrop-blur-[100px] -z-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
          <div className="pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-30 lg:pb-32">
            <div className="flex flex-col-reverse gap-16 lg:flex-row lg:items-center lg:gap-24">
              {/* Left Content */}
              <motion.div
                className="flex-1 order-2 lg:order-1 space-y-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-1.5">
                  <Sparkles className="w-4 h-4 text-purple-700" />
                  <span className="text-sm font-medium text-purple-700">
                    Application Mobile
                  </span>
                </div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                  App Go Résa
                </h1>

                <p className="text-base sm:text-lg leading-relaxed text-gray-600">
                  Accélérez votre croissance avec l'application Partenaire.
                  Simplifiez la collaboration avec vos affiliés en leur offrant
                  une solution intuitive pour suivre leurs performances et leurs
                  commissions en temps réel.
                </p>

                <div className="flex flex-wrap gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white/80 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3 shadow-sm"
                    >
                      <div className={`${stat.color}`}>
                        <stat.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-lg font-bold text-gray-900">
                          {stat.value}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600">
                          {stat.label}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      document
                        .getElementById("demo-section")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center justify-center rounded-xl bg-[#4C206A] px-6 py-3 text-base sm:text-lg font-semibold text-white shadow-lg shadow-purple-500/20 transition-all hover:bg-[#3D1956] hover:shadow-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  >
                    Demander une démo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.button>
                </div>
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

                  {/* Phone Mockup */}
                  <div className="relative mx-auto w-full max-w-[320px]">
                    <div className="relative aspect-[9/16]">
                      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-purple-500/5 rounded-[30px]" />
                      <div className="relative bg-black rounded-[30px] p-8 shadow-2xl h-full flex flex-col">
                        {/* Phone Mockup Content */}
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
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Decorative bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* Features Section */}
      <section className="relative py-20 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white opacity-70" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-900"
          >
            Fonctionnalités Principales
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {feature.benefits.map((benefit, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center rounded-full bg-purple-50 px-2.5 py-0.5 text-xs font-medium text-purple-700"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Form Section */}
      <div id="demo-section">
        <DemoSection />
      </div>
    </main>
  );
}
