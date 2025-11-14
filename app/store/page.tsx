"use client"

import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bell, Settings, LogOut, Package, TrendingUp, DollarSign, Users, AlertCircle } from 'lucide-react'
import StoreDashboard from "@/components/store/store-dashboard"
import CardDeliveries from "@/components/store/card-deliveries"
import CommissionTracker from "@/components/store/commission-tracker"
import MyPayouts from "@/components/store/my-payouts"
import BatchManagement from "@/components/store/batch-management"
import Notifications from "@/components/store/notifications"

interface StoreInfo {
  storeId: string
  name: string
  head: string
  city: string
  mobile: string
}

export default function StorePage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("dashboard")
  const [storeInfo, setStoreInfo] = useState<StoreInfo | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const authData = localStorage.getItem("vestige_auth")
    if (!authData) {
      router.push("/login")
      return
    }
    
    try {
      const parsedAuth = JSON.parse(authData)
      setStoreInfo(parsedAuth)
    } catch (err) {
      router.push("/login")
    } finally {
      setIsLoading(false)
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("vestige_auth")
    localStorage.removeItem("vestige_token")
    router.push("/")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    )
  }

  if (!storeInfo) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
        <div className="flex items-center justify-between px-8 py-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#3b82f6", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#10b981", stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <circle cx="100" cy="100" r="95" fill="url(#grad1)" opacity="0.15" />
                <g transform="translate(100, 100)">
                  <path
                    d="M -30 -20 L -5 25 L 30 -20"
                    stroke="#3b82f6"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M -15 10 L 5 25 L 25 5"
                    stroke="#10b981"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </div>
            <div>
              <h1 className="font-bold text-xl text-gray-900">Store Partner Dashboard</h1>
              <p className="text-sm text-gray-500 font-medium">
                {storeInfo.name} • {storeInfo.city}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="hover:bg-blue-50">
              <Bell className="w-5 h-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-blue-50">
              <Settings className="w-5 h-5 text-gray-600" />
            </Button>
            <div className="w-px h-6 bg-gray-200" />
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-red-600 hover:bg-red-50 font-medium"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-8 py-6">
        {/* Store Info Hero Card */}
        <Card className="mb-8 bg-gradient-to-r from-blue-600 to-blue-700 border-0 text-white shadow-lg">
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-3xl font-bold mb-2">{storeInfo.name}</h2>
                <div className="flex items-center gap-6 text-blue-100 text-sm">
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Store Head: {storeInfo.head}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-2">
                    <Package className="w-4 h-4" />
                    {storeInfo.city}
                  </span>
                  <span>•</span>
                  <span>{storeInfo.mobile}</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                >
                  Support
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Tabs Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8 bg-white p-1 border border-gray-200/50 rounded-lg shadow-sm">
            <TabsTrigger
              value="dashboard"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger
              value="deliveries"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md"
            >
              <Package className="w-4 h-4 mr-2" />
              Deliveries
            </TabsTrigger>
            <TabsTrigger
              value="commission"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Commission
            </TabsTrigger>
            <TabsTrigger
              value="payouts"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md"
            >
              <DollarSign className="w-4 h-4 mr-2" />
              Payouts
            </TabsTrigger>
            <TabsTrigger
              value="batch"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md"
            >
              <AlertCircle className="w-4 h-4 mr-2" />
              Batch
            </TabsTrigger>
            <TabsTrigger
              value="notifications"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md"
            >
              <Bell className="w-4 h-4 mr-2" />
              Updates
            </TabsTrigger>
          </TabsList>

          {/* Tab Contents */}
          <TabsContent value="dashboard" className="space-y-6">
            <StoreDashboard />
          </TabsContent>

          <TabsContent value="deliveries" className="space-y-6">
            <CardDeliveries />
          </TabsContent>

          <TabsContent value="commission" className="space-y-6">
            <CommissionTracker />
          </TabsContent>

          <TabsContent value="payouts" className="space-y-6">
            <MyPayouts />
          </TabsContent>

          <TabsContent value="batch" className="space-y-6">
            <BatchManagement />
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Notifications />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
