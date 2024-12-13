"use client"

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, CheckCircle, Globe, Users, Handshake, TrendingUp } from 'lucide-react';
import DemoSection from '@/components/DemoSection';
import {Card} from '@/components/ui/card'; // Import the Card component

const features = [
  {
    title: "Réseau international",
    description: "Accédez à un réseau mondial de partenaires et d'opportunités commerciales.",
    icon: Globe,
    benefits: ["Présence mondiale", "Opportunités transfrontalières", "Partage d'expertise"]
  },
  {
    title: "Support dédié",
    description: "Bénéficiez d'un support technique et commercial personnalisé pour votre réussite.",
    icon: Users,
    benefits: ["Assistance 24/7", "Ressources exclusives", "Conseils stratégiques"]
  },
  {
    title: "Formations exclusives",
    description: "Participez à des formations avancées pour maîtriser nos solutions et développer vos compétences.",
    icon: Sparkles,
    benefits: ["Webinaires experts", "Certifications", "Ateliers pratiques"]
  },
  {
    title: "Croissance accélérée",
    description: "Boostez votre croissance grâce à notre programme de partenariat structuré et nos outils marketing.",
    icon: TrendingUp,
    benefits: ["Leads qualifiés", "Outils marketing", "Incentives attractifs"]
  },
];

const stats = [
  {
    value: "500+",
    label: "Partenaires actifs",
    icon: Handshake,
    color: "text-blue-500"
  },
  {
    value: "50+",
    label: "Pays représentés",
    icon: Globe,
    color: "text-green-500"
  },
  {
    value: "30%",
    label: "Croissance annuelle du réseau",
    icon: TrendingUp,
    color: "text-purple-500"
  }
];

export default function PartnerNetworkPage() {
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
                  <Handshake className="w-4 h-4 text-purple-700" />
                  <span className="text-sm font-medium text-purple-700">
                    Réseau de Partenaires
                  </span>
                </motion.div>
                
                {/* Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
                >
                  Rejoignez le Réseau de Partenaires GoRésa
                </motion.h1>
                
                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-base sm:text-lg leading-relaxed text-gray-600"
                >
                  Devenez partenaire de GoRésa et accédez à un monde d'opportunités. Notre réseau de partenaires 
                  bénéficie d'un support dédié, de formations exclusives et d'outils marketing pour développer votre activité. 
                  Ensemble, créons des solutions innovantes pour nos clients.
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
                    Devenir partenaire
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
                    src="/images/partner.png"
                    alt="Partner Network Illustration"
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
            Avantages du Programme Partenaires
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

