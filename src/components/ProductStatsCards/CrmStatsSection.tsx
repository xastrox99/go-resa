"use client"

import Card from "./Card"
import { PhoneIcon, MessageCircle, Mail, Bell, DollarSign } from 'lucide-react'
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

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
  { label: "Messages envoyés", value: "12,458" },
  { label: "Taux d'ouverture", value: "68%" },
  { label: "Taux de conversion", value: "8.5%" }
]

export default function CrmStatsSection() {
  return (
    <div className="container mx-auto grid gap-6 px-4 py-6 lg:grid-cols-2 lg:items-start">
      {/* Stats Section */}
      <div className="space-y-4">
        {/* Channel Distribution */}
        <Card className="p-5">
          <h3 className="text-base font-medium mb-4 text-gray-900">N° de réservation par canal</h3>
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-[160px] h-[160px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={channelData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
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
            <div className="grid grid-cols-2 gap-3 w-full">
              {channelData.map((channel, index) => {
                const Icon = channel.icon
                return (
                  <div key={index} className="flex items-center gap-2">
                    <div className="p-1.5 rounded-full" style={{ backgroundColor: `${channel.color}15` }}>
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

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="p-4">
            <h3 className="text-sm font-medium mb-1 text-gray-600">Taux d'interaction</h3>
            <p className="text-2xl font-bold text-gray-900">82 %</p>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-2 mb-1">
              <DollarSign className="h-4 w-4 text-gray-600" />
              <h3 className="text-sm font-medium text-gray-600">Chiffre d'affaires</h3>
            </div>
            <p className="text-2xl font-bold text-gray-900">+17%</p>
          </Card>
        </div>

        {/* Additional Stats */}
        <div className="grid gap-4 md:grid-cols-3">
          {additionalStats.map((stat, index) => (
            <Card key={index} className="p-4">
              <h3 className="text-sm font-medium mb-1 text-gray-600">{stat.label}</h3>
              <p className="text-xl font-bold text-gray-900">{stat.value}</p>
            </Card>
          ))}
        </div>

        {/* Performance Chart */}
        <Card className="p-5">
          <h3 className="text-base font-medium mb-4 text-gray-900">Performance des Campagnes</h3>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData} layout="vertical" margin={{ left: 60, right: 20, top: 10, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" horizontal={false} />
                <XAxis type="number" axisLine={false} tickLine={false} domain={[0, 100]} />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  axisLine={false} 
                  tickLine={false} 
                  width={100}
                  tick={{ fontSize: 12, fill: '#6B7280' }}
                />
                <Tooltip 
                  cursor={{ fill: 'rgba(229, 231, 235, 0.4)' }}
                  contentStyle={{ backgroundColor: '#FFFFFF', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}
                />
                <Bar 
                  dataKey="value" 
                  radius={[0, 4, 4, 0]}
                  barSize={16}
                >
                  {performanceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Content Section */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          CRM NEO Engage
        </h2>
        <p className="text-base leading-relaxed text-gray-600">
          Donnez une nouvelle dimension à vos campagnes marketing. Exploitez la puissance de la segmentation pour cibler
          précisément vos clients et leur proposer des messages qui leur parlent vraiment. Atteignez vos clients sur leurs
          canaux préférés au moment idéal. Grâce à des analyses en temps réel et des outils intuitifs, transformez
          chaque interaction en une opportunité de fidélisation et de croissance.
        </p>
        <button className="rounded-full bg-[#8B5CF6] px-6 py-2.5 text-base font-medium text-white transition-all hover:bg-[#7C3AED]">
          En Savoir Plus
        </button>
      </div>
    </div>
  )
}
