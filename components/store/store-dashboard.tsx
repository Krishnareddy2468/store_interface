"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Package, Clock, CheckCircle, Wallet } from "lucide-react"

export default function StoreDashboard() {
  const stats = [
    {
      title: "Cards Received",
      value: "0",
      description: "Ready for delivery",
      icon: Package,
      bgColor: "bg-blue-600",
      textColor: "text-blue-600",
    },
    {
      title: "Pending Delivery",
      value: "0",
      description: "Awaiting pickup",
      icon: Clock,
      bgColor: "bg-orange-500",
      textColor: "text-orange-500",
    },
    {
      title: "Delivered Today",
      value: "0",
      description: "Successfully handed over",
      icon: CheckCircle,
      bgColor: "bg-green-600",
      textColor: "text-green-600",
    },
    {
      title: "Available Payout",
      value: "₹0",
      description: "Ready to withdraw",
      icon: Wallet,
      bgColor: "bg-green-700",
      textColor: "text-green-700",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className={`${stat.bgColor} text-white rounded-lg shadow-lg`}>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-base font-semibold">{stat.title}</CardTitle>
              <stat.icon className="w-8 h-8 opacity-80" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold mb-1">{stat.value}</div>
            <p className="text-sm opacity-90">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
