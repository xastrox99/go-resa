"use client"

import React, { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Briefcase, Users, Building2, Star, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import DemoSection from '@/components/DemoSection'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const values = [
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Nous croyons en la force du travail d\'équipe et de la synergie entre nos clients et nos employés.'
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    description: 'Nous repoussons constamment les limites pour offrir des solutions à la pointe de la technologie.'
  },
  {
    icon: Star,
    title: 'Excellence',
    description: 'Nous nous efforçons d\'exceller dans tout ce que nous faisons, de la conception à l\'assistance client.'
  },
  {
    icon: Building2,
    title: 'Durabilité',
    description: 'Nous nous engageons à créer des solutions qui contribuent à un avenir plus durable pour l\'industrie hôtelière.'
  },
]

const partnerComments = [
  {
    name: "Marie Dupont",
    role: "Directrice, Hôtel Le Magnifique",
    comment: "Le CRM NEO Engage de GoResa a révolutionné notre approche client. Nous avons vu une augmentation de 30% de notre taux de fidélisation en seulement 6 mois.",
    product: "CRM NEO Engage",
    image: "/images/partners/partner-4.jpg",
    rating: 5
  },
  {
    name: "Jean Martin",
    role: "Propriétaire, Restaurant La Bonne Fourchette",
    comment: "Le Système Web Résa est incroyablement intuitif. Nos réservations en ligne ont augmenté de 50% depuis son implémentation. Cependant, j'aimerais voir plus d'options de personnalisation.",
    product: "Système Web Résa",
    image: "/images/partners/partner-1.jpg",
    rating: 4
  },
  {
    name: "Pierre Lefebvre",
    role: "Manager, Spa Zen & Beauté",
    comment: "L'App Go Résa a simplifié la gestion de nos rendez-vous. Nos clients adorent pouvoir réserver facilement depuis leur smartphone. Un excellent outil, même s'il y a encore quelques petits bugs à corriger.",
    product: "App Go Résa",
    image: "/images/partners/partner-2.jpg",
    rating: 4
  },
  {
    name: "Thomas Moreau",
    role: "Directeur Marketing, Chaîne Hôtelière Étoile",
    comment: "Le Chatbot Chatbox a considérablement réduit la charge de travail de notre équipe de support client. C'est un bon début, mais il y a encore des améliorations à apporter pour le rendre plus naturel dans ses interactions.",
    product: "Chatbot Chatbox",
    image: "/images/partners/partner-3.jpg",
    rating: 3
  }
]

export default function AProposPage() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const goNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Gradient background with improved opacity and blur */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#b8e6d9]/40 via-[#d8e8f0]/40 to-white/80 backdrop-blur-[100px] -z-10" />

        {/* Content container with improved padding and max-width */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="pt-32 pb-24 lg:pt-40 lg:pb-32">
            <div className="flex flex-col-reverse gap-16 lg:flex-row lg:items-center lg:gap-24">
              {/* Left content */}
              <motion.div 
                className="flex-1 order-2 lg:order-1 space-y-6"
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
                  <Briefcase className="w-4 h-4 text-purple-700" />
                  <span className="text-sm font-medium text-purple-700">
                    Notre Histoire
                  </span>
                </motion.div>

                {/* Small title */}
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-lg sm:text-xl font-semibold text-[#4C206A]"
                >
                  Depuis 2015, au service de l'hôtellerie
                </motion.h2>

                {/* Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900"
                >
                  Innovons ensemble pour l'avenir de l'hôtellerie
                </motion.h1>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="text-base sm:text-lg leading-relaxed text-gray-600 max-w-2xl"
                >
                  GoResa transforme la gestion hôtelière avec des solutions innovantes et intuitives. Notre mission est de permettre aux établissements de se concentrer sur l'essentiel : offrir une expérience client exceptionnelle. Grâce à nos outils de pointe, nous simplifions les processus, optimisons les réservations et améliorons l'engagement client, propulsant ainsi l'industrie hôtelière vers un avenir plus efficace et connecté.
                </motion.p>

                {/* Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="flex flex-col gap-4 sm:flex-row sm:items-center pt-4"
                >
                  <motion.a
                    href="#demo-section"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center rounded-xl bg-[#4C206A] px-6 py-3 text-base sm:text-lg font-semibold text-white shadow-lg shadow-purple-500/20 transition-all hover:bg-[#3D1956] hover:shadow-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                  >
                    Demander une Démo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.a>
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
                  
                  <div className="relative">
                    <Image
                      src="/images/a-propos.png"
                      alt="GoResa team collaboration"
                      width={600}
                      height={600}
                      className="relative w-full h-auto rounded-2xl"
                      priority
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Decorative bottom gradient for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nos Valeurs Fondamentales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ces principes guident chacune de nos actions et décisions, façonnant notre approche de l'innovation et du service client.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-gradient-to-br from-[#9333EA]/5 to-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#9333EA]/10 flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-[#9333EA]" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Comments Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ce que disent nos partenaires
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez comment nos solutions transforment le quotidien de nos clients dans l'industrie hôtelière.
            </p>
          </motion.div>
          <div className="relative px-12">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              onSwiper={(swiper: SwiperType) => setSwiper(swiper)}
              className="testimonials-swiper"
              loop={true}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {partnerComments.map((comment, index) => (
                <SwiperSlide key={index}>
                  <div className="text-center px-4 py-8">
                    <div className="mb-6">
                      <Image
                        src={comment.image}
                        alt={comment.name}
                        width={120}
                        height={120}
                        className="rounded-full mx-auto mb-4 object-cover"
                      />
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">{comment.name}</h3>
                      <p className="text-sm text-gray-600 mb-6">{comment.role}</p>
                    </div>
                    <div className="relative">
                      <svg className="absolute top-0 left-0 transform -translate-x-4 -translate-y-6 h-8 w-8 text-gray-200" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="text-gray-600 italic px-8 min-h-[100px]">{comment.comment}</p>
                    </div>
                    <div className="flex justify-center mt-6">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-5 h-5 ${i < comment.rating ? 'text-yellow-400' : 'text-gray-300'} fill-current`} 
                        />
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              onClick={goPrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors focus:outline-none"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={goNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors focus:outline-none"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <div id="demo-section">
        <DemoSection />
      </div>
    </main>
  )
}

