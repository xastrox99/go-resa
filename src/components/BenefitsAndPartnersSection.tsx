"use client"

import { Copy, X, Megaphone, Brain, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const benefits = [
  {
    icon: Copy,
    color: "bg-blue-50",
    iconColor: "text-blue-400",
    title: "Éliminez",
    subtitle: "les doubles réservations"
  },
  {
    icon: X,
    color: "bg-orange-50",
    iconColor: "text-orange-400",
    title: "Limiter le",
    subtitle: "nombre des annulations"
  },
  {
    icon: Megaphone,
    color: "bg-green-50",
    iconColor: "text-green-400",
    title: "Maximiser",
    subtitle: "l'efficacité de vos initiatives marketing"
  },
  {
    icon: Brain,
    color: "bg-purple-50",
    iconColor: "text-purple-400",
    title: "Rester présent",
    subtitle: "dans l'esprit des clients"
  },
  {
    icon: MessageCircle,
    color: "bg-emerald-50",
    iconColor: "text-emerald-400",
    title: "Faciliter les",
    subtitle: "échanges avec les clients et les partenaires"
  }
]

const partners = [
  { 
    name: "React", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
  },
  { 
    name: "Docker", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" 
  },
  { 
    name: "PostgreSQL", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" 
  },
  { 
    name: "Apple", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" 
  },
  { 
    name: "Java", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" 
  },
  { 
    name: "Spring", 
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" 
  }
]

const BenefitCard = ({ icon: Icon, color, iconColor, title, subtitle }: {
  icon: any
  color: string
  iconColor: string
  title: string
  subtitle: string
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="flex flex-col items-center text-center"
  >
    <div className={`w-20 h-20 ${color} rounded-[24px] mb-5 flex items-center justify-center`}>
      <Icon className={`w-10 h-10 ${iconColor}`} />
    </div>
    <h3 className="text-lg font-bold text-gray-900 mb-2">
      {title}
    </h3>
    <p className="text-base text-gray-600 leading-relaxed max-w-[200px]">
      {subtitle}
    </p>
  </motion.div>
)

export default function BenefitsAndPartnersSection() {
  return (
    <section className="relative py-12 overflow-hidden">
      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>

      {/* Partners Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-center mb-16 text-gray-900"
        >
          NOS PARTENAIRES
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-16">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={90}
                height={90}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-75 hover:opacity-100"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

