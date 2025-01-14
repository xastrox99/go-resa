"use client"

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Code, ExternalLink, RefreshCw, Sparkles, Zap, CheckCircle, Lock } from 'lucide-react';
import DemoSection from '@/components/DemoSection';
import {Card} from '@/components/ui/card';

const features = [
  {
    title: "API RESTful",
    description: "Une API RESTful moderne avec documentation OpenAPI pour une intégration facile et rapide. Profitez d'endpoints intuitifs et d'une structure cohérente pour tous vos besoins de réservation.",
    icon: Code,
    benefits: ["Architecture RESTful", "Documentation OpenAPI", "Endpoints intuitifs"]
  },
  {
    title: "Webhooks",
    description: "Recevez des notifications en temps réel sur les événements importants. Configurez facilement des webhooks pour être informé des nouvelles réservations, modifications ou annulations.",
    icon: Zap,
    benefits: ["Notifications en temps réel", "Configuration facile", "Synchronisation instantanée"]
  },
  {
    title: "Documentation complète",
    description: "Une documentation exhaustive et détaillée pour vous guider à chaque étape de l'intégration. Accédez à des guides, des exemples de code et un support technique dédié.",
    icon: ExternalLink,
    benefits: ["Guides d'intégration", "Exemples de code", "Support technique"]
  },
  {
    title: "SDKs multilingues",
    description: "Simplifiez le développement avec nos SDKs disponibles pour plusieurs langages de programmation. Intégrez facilement GoRésa dans vos applications existantes.",
    icon: Code,
    benefits: ["Python, JavaScript, PHP, Java", "Intégration rapide", "Maintenance simplifiée"]
  },
  {
    title: "Authentification sécurisée",
    description: "Protégez vos données et celles de vos clients avec notre système d'authentification OAuth2 robuste, conforme aux normes de l'industrie.",
    icon: Lock,
    benefits: ["OAuth2", "Sécurité renforcée", "Conformité aux normes"]
  },
  {
    title: "Rate Limiting intelligent",
    description: "Profitez d'un contrôle intelligent du taux de requêtes pour une utilisation équitable et optimale de l'API, assurant stabilité et disponibilité pour tous les utilisateurs.",
    icon: RefreshCw,
    benefits: ["Utilisation équitable", "Stabilité assurée", "Haute disponibilité"]
  }
];

const stats = [
  {
    value: "10M+",
    label: "Appels API par mois",
    icon: RefreshCw,
    color: "text-green-500"
  },
  {
    value: "99.99%",
    label: "Taux de disponibilité",
    icon: CheckCircle,
    color: "text-blue-500"
  },
  {
    value: "24/7",
    label: "Support technique",
    icon: Zap,
    color: "text-purple-500"
  }
];

export default function ApiIntegrationPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Gradient background with improved opacity and blur */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#b8e6d9]/40 via-[#d8e8f0]/40 to-white/80 backdrop-blur-[100px] -z-10" />

        {/* Content container with improved padding and max-width */}
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
                {/* Label */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-1.5"
                >
                  <Code className="w-4 h-4 text-purple-700" />
                  <span className="text-sm font-medium text-purple-700">
                    Intégration API Puissante
                  </span>
                </motion.div>
                
                {/* Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
                >
                  API GoRésa : Intégrez la puissance de la réservation
                </motion.h1>
                
                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-base sm:text-lg leading-relaxed text-gray-600"
                >
                  Exploitez notre API robuste pour intégrer les fonctionnalités de réservation de GoRésa directement dans vos applications. 
                  Simplifiez vos processus, améliorez l'expérience utilisateur et boostez votre efficacité avec une intégration fluide et puissante.
                </motion.p>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="flex flex-wrap gap-4"
                >
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
                        <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                        <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center justify-center rounded-xl bg-[#4C206A] px-6 py-3 text-base sm:text-lg font-semibold text-white shadow-lg shadow-purple-500/20 transition-all hover:bg-[#3D1956] hover:shadow-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  >
                    Commencer l'intégration
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
                    src="/images/api.png"
                    alt="API Integration Illustration"
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
      Fonctionnalités Clés de l'API
    </motion.h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + index * 0.1 }}
          className="group"
        >
          <Card className="h-full overflow-hidden bg-gradient-to-br from-purple-50 to-white border-none shadow-sm hover:shadow-md transition-all duration-300">
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-purple-100 rounded-xl group-hover:bg-purple-200 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
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
          </Card>
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

