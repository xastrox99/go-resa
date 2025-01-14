"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import Card from "./Card"
import { PhoneIcon, MessageCircle, Mail, Bell, DollarSign, ArrowRight, TrendingUp, BarChart3, Percent } from 'lucide-react'
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const channelData = [
  { name: "WhatsApp", value: 45, color: "#25D366", icon: PhoneIcon, messages: "1250 messages" },
  { name: "SMS", value: 25, color: "#55acee", icon: MessageCircle, messages: "694 messages" },
  { name: "Email", value: 20, color: "#FFB74D", icon: Mail, messages: "555 messages" },
  { name: "Notifications", value: 10, color: "#ef5350", icon: Bell, messages: "278 messages" }
]

const performanceData = [
  { name: "Campagne 1", value: 95, color: "#8B5CF6" },
  { name: "Campagne 2", value: 88, color: "#10B981" },
  { name: "Campagne 3", value: 76, color: "#F59E0B" },
  { name: "Campagne 4", value: 82, color: "#EF4444" },
  { name: "Campagne 5", value: 91, color: "#3B82F6" }
]

const additionalStats = [
  { label: "Taux d'interaction", value: "82 %", icon: TrendingUp, color: "bg-purple-100 text-purple-500" },
  { label: "Chiffre d'affaires", value: "+17%", icon: DollarSign, color: "bg-green-100 text-green-500" },
  { label: "Messages envoyés", value: "12,458", icon: BarChart3, color: "bg-blue-100 text-blue-500" },
  { label: "Taux d'ouverture", value: "68%", icon: Mail, color: "bg-yellow-100 text-yellow-500" },
  { label: "Taux de conversion", value: "8.5%", icon: Percent, color: "bg-red-100 text-red-500" }
]

export default function CrmStatsSection() {
  return (
    <motion.div 
      className="container mx-auto px-4 py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        {/* Stats Section */}
        <div className="space-y-6 mb-8 lg:mb-0">
          {/* Channel Distribution */}
          <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
            <Card className="p-6">
              <h3 className="text-sm font-medium mb-6 text-gray-900">N° de réservation par canal</h3>
              <div className="flex flex-col items-center gap-6">
                <div className="relative w-[180px] h-[180px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={channelData}
                        cx="50%"
                        cy="50%"
                        innerRadius={55}
                        outerRadius={75}
                        paddingAngle={4}
                        dataKey="value"
                      >
                        {channelData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-2 gap-4 w-full">
                  {channelData.map((channel, index) => {
                    const Icon = channel.icon
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <div className="p-2 rounded-lg" style={{ backgroundColor: `${channel.color}15` }}>
                          <Icon className="h-4 w-4" style={{ color: channel.color }} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{channel.name}</p>
                          <p className="text-xs text-gray-500">{channel.messages}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Performance Chart */}
          <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
            <Card className="p-6">
              <h3 className="text-sm font-medium mb-6 text-gray-900">Performance des Campagnes</h3>
              <div className="h-[240px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={performanceData} layout="vertical" margin={{ left: 80, right: 20, top: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" horizontal={false} />
                    <XAxis 
                      type="number" 
                      axisLine={false} 
                      tickLine={false} 
                      domain={[0, 100]}
                      tick={{ fontSize: 12, fill: '#6B7280' }}
                    />
                    <YAxis 
                      dataKey="name" 
                      type="category" 
                      axisLine={false} 
                      tickLine={false} 
                      width={80}
                      tick={{ fontSize: 12, fill: '#6B7280' }}
                    />
                    <Tooltip 
                      cursor={{ fill: 'rgba(229, 231, 235, 0.4)' }}
                      contentStyle={{ 
                        backgroundColor: '#FFFFFF', 
                        borderRadius: '8px', 
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                        border: 'none'
                      }}
                    />
                    <Bar 
                      dataKey="value" 
                      radius={[0, 4, 4, 0]}
                      barSize={20}
                    >
                      {performanceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Content Section */}
        <div>
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              CRM NEO Engage
            </h2>
            <p className="text-sm leading-relaxed text-gray-600">
              Donnez une nouvelle dimension à vos campagnes marketing. Exploitez la puissance de la segmentation pour cibler
              précisément vos clients et leur proposer des messages qui leur parlent vraiment. Atteignez vos clients sur leurs
              canaux préférés au moment idéal. Grâce à des analyses en temps réel et des outils intuitifs, transformez
              chaque interaction en une opportunité de fidélisation et de croissance.
            </p>
            <br />
            <Link href="/produits/crm-neo-engage">
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

          {/* Additional Stats */}
          <div className="grid gap-4 sm:grid-cols-2 mt-8">
            {additionalStats.map((stat, index) => (
              <motion.div key={index} {...fadeInUp} transition={{ delay: 0.4 + index * 0.1 }}>
                <Card className="p-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${stat.color}`}>
                      <stat.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

