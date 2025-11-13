"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Filter } from "lucide-react"

export default function CommissionTracker() {
  const commissionStats = [
    { label: "Cards Delivered", value: "0", color: "text-gray-900" },
    { label: "Commission per Card", value: "₹10", color: "text-blue-600" },
    { label: "Available for Payout", value: "₹0", color: "text-green-600" },
    { label: "Pending Payout", value: "₹0", color: "text-orange-500" },
    { label: "Total Earned", value: "₹0", color: "text-green-600" },
  ]

  return (
    <div className="space-y-6">
      {/* Commission Summary */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-3">
          <CardTitle>Commission Summary</CardTitle>
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <Filter className="w-4 h-4" />
            Filters
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {commissionStats.map((stat, index) => (
              <div key={index} className="border rounded-lg p-4 bg-gray-50">
                <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
                <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Monthly Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900">No commission data available</h3>
            <p className="text-sm text-gray-500">Commission will appear after delivering orders</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
