"use client"

import { Star, Users, Calendar, Clock, Table2, Crown, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Card from "./Card"
import Link from 'next/link'

const tables = [
  { id: 'T1', capacity: '4P', status: 'available' },
  { id: 'T2', capacity: '4P', status: 'occupied' },
  { id: 'T3', capacity: '4P', status: 'occupied' },
  { id: 'T4', capacity: '4P', status: 'occupied' },
  { id: 'T5', capacity: '4P', status: 'available' },
  { id: 'T6', capacity: '4P', status: 'reserved' },
  { id: 'T7', capacity: '4P', status: 'occupied' },
  { id: 'T8', capacity: '4P', status: 'occupied' },
  { id: 'T9', capacity: '4P', status: 'occupied' },
  { id: 'T10', capacity: '4P', status: 'available' },
  { id: 'T11', capacity: '4P', status: 'reserved' },
  { id: 'T12', capacity: '4P', status: 'occupied' }
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function SystemeWebResa() {
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
        {/* Content Section - Left column */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Système Web Résa
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              Optimisez la gestion de vos réservations avec Résa Système. Organisez vos tables en temps 
              réel, évitez les doubles réservations et maximisez le remplissage de votre établissement. 
              Offrez à vos clients une expérience fluide grâce à une interface intuitive qui simplifie 
              les réservations en ligne et au téléphone.
            </p>
          </div>
          <Link href="/produits/systeme-web-resa" passHref legacyBehavior>
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

        {/* Stats Section - Right column */}
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Stats Cards */}
          <div className="grid gap-3 md:grid-cols-2">
            <motion.div {...fadeInUp}>
              <Card className="p-3 bg-blue-50/50">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-gray-500" />
                  <h3 className="text-xs font-medium text-gray-500">Pax</h3>
                </div>
                <p className="text-2xl font-bold text-gray-900">589</p>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
              <Card className="p-3 bg-blue-50/50">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <h3 className="text-xs font-medium text-gray-500">N° Résa</h3>
                </div>
                <p className="text-2xl font-bold text-gray-900">248</p>
              </Card>
            </motion.div>
          </div>

          {/* Elite Status Card */}
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <Card className="p-3 bg-green-50/50">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2">
                    <Crown className="h-4 w-4 text-yellow-500" />
                    <h3 className="text-lg font-bold text-gray-900">Élite</h3>
                  </div>
                  <p className="text-xs text-gray-600">9 réservations</p>
                </div>
                <p className="text-lg font-bold text-gray-900">60 548 MAD</p>
              </div>
              <div className="flex gap-0.5 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Reservation Card */}
          <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
            <Card className="p-3">
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <p className="text-sm font-medium text-gray-900">Sara Adam</p>
                    </div>
                    <p className="text-xs text-gray-500 ml-6">21:00</p>
                  </div>
                  <div className="border-l pl-4">
                    <div className="flex items-center gap-2">
                      <Table2 className="h-4 w-4 text-gray-500" />
                      <p className="text-sm font-medium text-gray-900">5 Adultes, 2 Enfants</p>
                    </div>
                    <p className="text-xs text-gray-500 ml-6">T14</p>
                  </div>
                </div>
                <span className="px-2 py-0.5 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                  Confirmé
                </span>
              </div>
            </Card>
          </motion.div>

          {/* Table Grid */}
          <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
            <Card className="p-3">
              <div className="grid grid-cols-4 gap-2">
                {tables.map((table) => (
                  <div
                    key={table.id}
                    className={`p-1.5 rounded-lg text-center ${
                      table.status === 'occupied' ? 'bg-blue-50 text-blue-800' :
                      table.status === 'reserved' ? 'bg-gray-100 text-gray-800' :
                      'bg-white text-gray-800 border border-gray-200'
                    }`}
                  >
                    <p className="text-xs font-medium">{table.id}</p>
                    <p className="text-[10px]">{table.capacity}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

