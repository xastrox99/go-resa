"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  Users,
  Sparkles,
  Star,
} from "lucide-react";
import DemoSection from "@/components/DemoSection";

const features = [
  {
    title: "Gestion des réservations en temps réel",
    description:
      "Visualisez et gérez toutes vos réservations en temps réel, optimisant ainsi la gestion de votre espace et le service client.",
    icon: Calendar,
    benefits: [
      "Vue d'ensemble en temps réel",
      "Gestion des tables",
      "Notifications instantanées",
    ],
  },
  {
    title: "Optimisation du taux de remplissage",
    description:
      "Maximisez votre taux de remplissage grâce à une gestion efficace des réservations et des tables.",
    icon: CheckCircle,
    benefits: [
      "Planification optimisée",
      "Réduction des temps d'attente",
      "Augmentation des revenus",
    ],
  },
  {
    title: "Interface intuitive et facile à utiliser",
    description:
      "Une interface utilisateur simple et intuitive pour une gestion des réservations sans tracas.",
    icon: Clock,
    benefits: [
      "Navigation facile",
      "Fonctionnalités claires",
      "Prise en main rapide",
    ],
  },
  {
    title: "Statistiques et rapports détaillés",
    description:
      "Accédez à des statistiques et des rapports détaillés pour suivre vos performances et prendre des décisions éclairées.",
    icon: Users,
    benefits: [
      "Analyse des données",
      "Rapports personnalisés",
      "Suivi des performances",
    ],
  },
];

const stats = [
  {
    value: "95%",
    label: "Taux de satisfaction client",
    icon: Star,
    color: "text-yellow-500",
  },
  {
    value: "1000+",
    label: "Réservations par mois",
    icon: Calendar,
    color: "text-green-500",
  },
];

export default function SystemeWebResaPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Gradient background with improved opacity and blur */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#b8e6d9]/40 via-[#d8e8f0]/40 to-white/80 backdrop-blur-[100px] -z-10" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
          <div className="pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-30 lg:pb-32">
            <div className="flex flex-col-reverse gap-16 lg:flex-row lg:items-center lg:gap-24">
              {/* Left content */}
              <motion.div
                className="flex-1 order-2 lg:order-1 space-y-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-1.5">
                  <Sparkles className="w-4 h-4 text-purple-700" />
                  <span className="text-sm font-medium text-purple-700">
                    Solution de réservation intuitive
                  </span>
                </div>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                  Système Web Résa
                </h1>

                <p className="text-base sm:text-lg leading-relaxed text-gray-600">
                  Gérez vos réservations efficacement avec notre système
                  intuitif. Optimisez votre taux de remplissage, évitez les
                  doubles réservations et offrez une expérience de réservation
                  fluide à vos clients.
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

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
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
                    src="/images/resa-pos.png"
                    alt="Système Web Résa Illustration"
                    width={600}
                    height={400}
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
