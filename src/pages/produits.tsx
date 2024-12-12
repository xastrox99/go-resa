import React from "react";
import { motion } from "framer-motion";
import { Database, Users, Boxes, MessageSquare, ArrowRight, BarChart, Calendar, Phone, Mail, Bell, Clock, CheckCircle, Zap } from 'lucide-react';
import Link from "next/link";

const products = [
  {
    title: "CRM NEO Engage",
    description:
      "Une solution complète de gestion de la relation client qui transforme vos interactions en opportunités de croissance. Optimisez vos campagnes marketing avec une segmentation avancée et une communication multicanale.",
    icon: Database,
    href: "/produits/crm-neo-engage",
    features: [
      "Segmentation client avancée",
      "Communication multicanale",
      "Analyses en temps réel",
      "Automatisation marketing",
    ],
    stats: [
      { label: "Taux de conversion", value: "8.5%" },
      { label: "Taux d'engagement", value: "82%" },
    ],
    color: "purple",
    secondaryIcons: [BarChart, Mail, Bell],
  },
  {
    title: "Système Web Résa",
    description:
      "Gérez vos réservations efficacement avec notre système intuitif. Optimisez votre taux de remplissage, évitez les doubles réservations et offrez une expérience de réservation fluide à vos clients.",
    icon: Calendar,
    href: "/produits/systeme-web-resa",
    features: [
      "Gestion en temps réel",
      "Interface intuitive",
      "Optimisation du remplissage",
      "Statistiques détaillées",
    ],
    stats: [
      { label: "Réservations/mois", value: "1000+" },
      { label: "Satisfaction client", value: "95%" },
    ],
    color: "blue",
    secondaryIcons: [Clock, CheckCircle, Users],
  },
  {
    title: "App Go Résa",
    description:
      "Une application mobile puissante pour gérer vos réservations en déplacement. Restez connecté à votre établissement et gérez vos réservations où que vous soyez.",
    icon: Phone,
    href: "/produits/app-go-resa",
    features: [
      "Interface mobile optimisée",
      "Notifications en temps réel",
      "Gestion hors-ligne",
      "Synchronisation automatique",
    ],
    stats: [
      { label: "Téléchargements", value: "10k+" },
      { label: "Note moyenne", value: "4.8/5" },
    ],
    color: "green",
    secondaryIcons: [Zap, Bell, Boxes],
  },
  {
    title: "Chatbot Chatbox",
    description:
      "Un assistant virtuel intelligent qui répond instantanément aux questions de vos clients. Automatisez votre service client tout en maintenant une expérience personnalisée.",
    icon: MessageSquare,
    href: "/produits/chatbot-chatbox",
    features: [
      "Réponses instantanées",
      "Apprentissage continu",
      "Personnalisation avancée",
      "Intégration multicanale",
    ],
    stats: [
      { label: "Messages traités", value: "100k+" },
      { label: "Taux de résolution", value: "85%" },
    ],
    color: "yellow",
    secondaryIcons: [Users, Clock, CheckCircle],
  },
];

const colorVariants = {
  purple: "bg-purple-50 text-purple-600 border-purple-100",
  blue: "bg-blue-50 text-blue-600 border-blue-100",
  green: "bg-green-50 text-green-600 border-green-100",
  yellow: "bg-yellow-50 text-yellow-600 border-yellow-100",
};

const bgColorVariants = {
  purple: "bg-purple-500",
  blue: "bg-blue-500",
  green: "bg-green-500",
  yellow: "bg-yellow-500",
};

export default function Produits() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Nos Solutions Innovantes
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez notre gamme complète de solutions pour optimiser la gestion
            de votre établissement et améliorer l'expérience de vos clients.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`p-3 rounded-xl ${
                      colorVariants[product.color as keyof typeof colorVariants]
                    }`}
                  >
                    <product.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      {product.title}
                    </h2>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-6 min-h-[80px]">
                  {product.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {product.stats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg p-4 text-center"
                    >
                      <div className="text-lg font-bold text-gray-900">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-8">
                  {product.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    {product.secondaryIcons.map((Icon, index) => (
                      <div
                        key={index}
                        className="p-2 rounded-lg bg-gray-50 text-gray-600"
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                    ))}
                  </div>

                  <Link
                    href={product.href}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm transition-transform hover:scale-105 ${
                      bgColorVariants[product.color as keyof typeof bgColorVariants]
                    }`}
                  >
                    En savoir plus
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

