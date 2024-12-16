"use client"

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { MessageSquare, Clock, Zap, Star, ArrowRight } from 'lucide-react'
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"
import Card from "./Card"
import Link from 'next/link'

const chatData = [
  { name: "Réservations", value: 40, color: "#8B5CF6" },
  { name: "Support", value: 30, color: "#10B981" },
  { name: "Informations", value: 20, color: "#F59E0B" },
  { name: "Autres", value: 10, color: "#EF4444" }
]

const performanceData = [
  { name: "Lun", value: 85 },
  { name: "Mar", value: 92 },
  { name: "Mer", value: 78 },
  { name: "Jeu", value: 95 },
  { name: "Ven", value: 89 },
  { name: "Sam", value: 97 },
  { name: "Dim", value: 88 }
]

export default function ChatbotChatbox() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Chatbot Chatbox
          </h1>
          <p className="text-sm text-gray-600 mb-4">
            Optimisez votre service client avec notre Chatbot intelligent. Disponible 24/7, il répond instantanément aux questions fréquentes, gère les réservations et fournit des informations précises. Réduisez la charge de travail de votre équipe tout en offrant une expérience client fluide et personnalisée.
          </p>
          <Link href="/produits/chatbot-chatbox" passHref legacyBehavior>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-lg bg-[#8B5CF6] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#7C3AED]"
          >
            En Savoir Plus
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </Link>
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Distribution Chart */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Distribution des conversations</h3>
            <div className="flex items-center justify-between">
              <div className="w-40 h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chatData}
                      cx="50%"
                      cy="50%"
                      innerRadius={35}
                      outerRadius={50}
                      paddingAngle={4}
                      dataKey="value"
                    >
                      {chatData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2">
                {chatData.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-sm text-gray-600">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Performance Chart */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Performance hebdomadaire</h3>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis hide domain={[0, 100]} />
                  <Bar dataKey="value" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        {/* Metrics */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-xl">
                <MessageSquare className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Conversations</p>
                <p className="text-2xl font-bold text-gray-900">1,458</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-xl">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Temps moyen</p>
                <p className="text-2xl font-bold text-gray-900">2m 35s</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-xl">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Taux de résolution</p>
                <p className="text-2xl font-bold text-gray-900">94%</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Satisfaction Rating */}
        <Card className="p-6 max-w-md mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-yellow-50 rounded-xl">
                <Star className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Satisfaction client</p>
                <p className="text-2xl font-bold text-gray-900">4.8/5</p>
              </div>
            </div>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

