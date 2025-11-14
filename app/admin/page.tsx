"use client"

import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Package, TrendingUp, Printer, Truck, CheckCircle, Users, DollarSign, MessageSquare, LogOut, Filter, Search, Plus, Eye, Edit, Trash2, Download, BarChart3, FileText, Calendar, Timer, CreditCard } from 'lucide-react'

export default function AdminDashboard() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const isAuth = localStorage.getItem("admin_auth") === "true"
    if (!isAuth) {
      router.push("/admin/login")
    } else {
      setIsLoading(false)
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("admin_auth")
    localStorage.removeItem("admin_token")
    router.push("/")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    )
  }

  // Demo data
  const stats = {
    totalOrders: 0,
    pendingOrders: 0,
    printedCards: 0,
    dispatchedCards: 0,
    totalStores: 2,
    totalRevenue: 0,
    todayOrders: 0
  }

  const demoStores = [
    {
      id: "1",
      storeName: "BHAINSA_STORE",
      city: "Bhainsa",
      contactPerson: "K.GOUTHAM",
      phone: "9494941146",
      status: "Active",
      orders: 0,
      performance: 0
    },
    {
      id: "2",
      storeName: "DEMO_STORE",
      city: "Demo City",
      contactPerson: "John Doe",
      phone: "9999999999",
      status: "Active",
      orders: 0,
      performance: 0
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
        <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
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
              <h1 className="font-bold text-lg text-gray-900">Admin Dashboard</h1>
              <p className="text-xs text-gray-500">Manage Vestige PVC ID card orders, stores, and analytics</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="/admin/whatsapp" className="text-sm text-gray-600 hover:text-blue-600 flex items-center gap-1">
              <MessageSquare className="w-4 h-4" />
              WhatsApp Center
            </a>
            <a href="/admin/analytics" className="text-sm text-gray-600 hover:text-blue-600 flex items-center gap-1">
              <BarChart3 className="w-4 h-4" />
              Analytics
            </a>
            <div className="w-px h-6 bg-gray-200" />
            <Button
              variant="ghost"
              className="text-red-600 hover:text-red-700 hover:bg-red-50 font-medium"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-8">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-xs">Total Orders</p>
                  <p className="text-2xl font-bold">{stats.totalOrders}</p>
                  <p className="text-xs text-blue-200">+{stats.todayOrders} today</p>
                </div>
                <Package className="w-8 h-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-yellow-100 text-xs">Pending</p>
                  <p className="text-2xl font-bold">{stats.pendingOrders}</p>
                  <p className="text-xs text-yellow-200">Awaiting print</p>
                </div>
                <Timer className="w-8 h-8 text-yellow-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-xs">Printed</p>
                  <p className="text-2xl font-bold">{stats.printedCards}</p>
                  <p className="text-xs text-purple-200">Ready to dispatch</p>
                </div>
                <Printer className="w-8 h-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-indigo-100 text-xs">Dispatched</p>
                  <p className="text-2xl font-bold">{stats.dispatchedCards}</p>
                  <p className="text-xs text-indigo-200">In transit</p>
                </div>
                <Truck className="w-8 h-8 text-indigo-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-xs">Active Stores</p>
                  <p className="text-2xl font-bold">{stats.totalStores}</p>
                  <p className="text-xs text-green-200">Partners</p>
                </div>
                <Users className="w-8 h-8 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-emerald-100 text-xs">Revenue</p>
                  <p className="text-2xl font-bold">₹{stats.totalRevenue}</p>
                  <p className="text-xs text-emerald-200">Total earned</p>
                </div>
                <TrendingUp className="w-8 h-8 text-emerald-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="orders" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8 bg-white p-1 border border-gray-200 rounded-lg">
            <TabsTrigger value="orders" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Orders Management
            </TabsTrigger>
            <TabsTrigger value="stores" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Store Partners
            </TabsTrigger>
            <TabsTrigger value="payouts" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Payout Control
            </TabsTrigger>
            <TabsTrigger value="reports" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Reports & Analytics
            </TabsTrigger>
            <TabsTrigger value="whatsapp" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              WhatsApp Center
            </TabsTrigger>
          </TabsList>

          {/* Orders Tab */}
          <TabsContent value="orders">
            <Card className="bg-white">
              <CardHeader className="bg-gray-50 border-b">
                <div className="flex items-center justify-between">
                  <CardTitle>Orders Management</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filters
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Export Report
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center py-12">
                  <Package className="w-16 h-16 text-gray-200 mx-auto mb-4" />
                  <p className="text-gray-500">No orders found yet</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Stores Tab */}
          <TabsContent value="stores">
            <Card className="bg-white">
              <CardHeader className="bg-gray-50 border-b">
                <div className="flex items-center justify-between">
                  <CardTitle>Store Partner Management</CardTitle>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Add New Store
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50">
                        <TableHead>Store Name</TableHead>
                        <TableHead>City</TableHead>
                        <TableHead>Contact Person</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Login Credentials</TableHead>
                        <TableHead>Orders</TableHead>
                        <TableHead>Performance</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {demoStores.map((store) => (
                        <TableRow key={store.id}>
                          <TableCell className="font-medium">{store.storeName}</TableCell>
                          <TableCell>{store.city}</TableCell>
                          <TableCell>{store.contactPerson}</TableCell>
                          <TableCell>{store.phone}</TableCell>
                          <TableCell>
                            <Badge className="bg-green-100 text-green-800">{store.status}</Badge>
                          </TableCell>
                          <TableCell>
                            <Button size="sm" variant="outline" className="text-xs">
                              Create Login
                            </Button>
                          </TableCell>
                          <TableCell>{store.orders} delivered</TableCell>
                          <TableCell>
                            <div className="w-16 bg-gray-200 rounded-full h-2">
                              <div className="h-2 rounded-full bg-green-500" style={{ width: `${store.performance}%` }}></div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-1">
                              <Button size="sm" variant="outline"><Edit className="w-4 h-4" /></Button>
                              <Button size="sm" variant="outline"><MessageSquare className="w-4 h-4" /></Button>
                              <Button size="sm" variant="outline" className="text-red-600"><Trash2 className="w-4 h-4" /></Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Payouts Tab */}
          <TabsContent value="payouts">
            <Card className="bg-white">
              <CardHeader className="bg-gray-50 border-b">
                <CardTitle>Payout Control</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-4 gap-4 mb-6">
                  <Card className="bg-orange-50 border-orange-200">
                    <CardContent className="p-4">
                      <p className="text-sm text-orange-600">Pending Requests</p>
                      <p className="text-2xl font-bold text-orange-700">0</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-green-50 border-green-200">
                    <CardContent className="p-4">
                      <p className="text-sm text-green-600">Approved Payouts</p>
                      <p className="text-2xl font-bold text-green-700">0</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-4">
                      <p className="text-sm text-blue-600">Total Paid</p>
                      <p className="text-2xl font-bold text-blue-700">₹0</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-purple-50 border-purple-200">
                    <CardContent className="p-4">
                      <p className="text-sm text-purple-600">Bank Approvals</p>
                      <p className="text-2xl font-bold text-purple-700">0</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="text-center py-12">
                  <DollarSign className="w-16 h-16 text-gray-200 mx-auto mb-4" />
                  <p className="text-gray-500">No payout requests yet</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports">
            <Card className="bg-white">
              <CardHeader className="bg-gray-50 border-b">
                <CardTitle>Reports & Analytics</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <Card className="border-2 border-blue-200 bg-blue-50">
                    <CardContent className="p-6 text-center">
                      <FileText className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                      <h3 className="font-semibold mb-4">Daily Reports</h3>
                      <Button variant="outline" size="sm" className="w-full mb-2">
                        <Download className="w-4 h-4 mr-2" />
                        CSV Report
                      </Button>
                      <Button variant="outline" size="sm" className="w-full">
                        <Download className="w-4 h-4 mr-2" />
                        PDF Report
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-green-200 bg-green-50">
                    <CardContent className="p-6 text-center">
                      <Calendar className="w-12 h-12 text-green-500 mx-auto mb-4" />
                      <h3 className="font-semibold mb-4">Weekly Reports</h3>
                      <Button variant="outline" size="sm" className="w-full mb-2">
                        <Download className="w-4 h-4 mr-2" />
                        CSV Report
                      </Button>
                      <Button variant="outline" size="sm" className="w-full">
                        <Download className="w-4 h-4 mr-2" />
                        PDF Report
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-purple-200 bg-purple-50">
                    <CardContent className="p-6 text-center">
                      <BarChart3 className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                      <h3 className="font-semibold mb-4">Monthly Reports</h3>
                      <Button variant="outline" size="sm" className="w-full mb-2">
                        <Download className="w-4 h-4 mr-2" />
                        CSV Report
                      </Button>
                      <Button variant="outline" size="sm" className="w-full">
                        <Download className="w-4 h-4 mr-2" />
                        PDF Report
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* WhatsApp Tab */}
          <TabsContent value="whatsapp">
            <Card className="bg-white">
              <CardHeader className="bg-gray-50 border-b">
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-green-500" />
                  WhatsApp Automation Center
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-3 gap-6">
                  <Card className="border-2 border-green-200 bg-green-50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4">Quick Notifications</h3>
                      <div className="space-y-2">
                        <Button className="w-full bg-green-500 hover:bg-green-600 text-white text-sm">
                          Notify Pending Orders
                        </Button>
                        <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white text-sm">
                          Notify Printed Cards
                        </Button>
                        <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white text-sm">
                          Notify Dispatched
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-blue-200 bg-blue-50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4">Automation Settings</h3>
                      <div className="space-y-3">
                        <label className="flex items-center gap-2">
                          <input type="checkbox" defaultChecked className="rounded" />
                          <span className="text-sm">Auto-notify on status change</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input type="checkbox" defaultChecked className="rounded" />
                          <span className="text-sm">Daily summary to stores</span>
                        </label>
                        <Button variant="outline" size="sm" className="w-full mt-4">
                          Save Settings
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-purple-200 bg-purple-50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4">Message Templates</h3>
                      <div className="space-y-2">
                        <Button variant="outline" size="sm" className="w-full text-left justify-start">
                          Order Confirmation
                        </Button>
                        <Button variant="outline" size="sm" className="w-full text-left justify-start">
                          Payment Received
                        </Button>
                        <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white text-sm mt-2">
                          <Plus className="w-4 h-4 mr-2" />
                          Add Template
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
