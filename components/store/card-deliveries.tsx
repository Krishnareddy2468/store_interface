"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Filter, Download, Eye } from "lucide-react"

export default function CardDeliveries() {
  const [searchTerm, setSearchTerm] = useState("")
  const [deliveries] = useState([])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Delivery Management</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Search and Filter Bar */}
        <div className="flex gap-3">
          <Input
            placeholder="Search orders..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1"
          />
          <Button variant="outline" className="gap-2 bg-transparent">
            <Filter className="w-4 h-4" />
            Filters
          </Button>
          <Button variant="outline" className="gap-2 bg-transparent">
            <Download className="w-4 h-4" />
            Export Report
          </Button>
        </div>

        {/* Deliveries Table */}
        <div className="overflow-x-auto border rounded-lg">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead>Customer Name</TableHead>
                <TableHead>Vestige ID</TableHead>
                <TableHead>Mobile</TableHead>
                <TableHead>Order ID</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {deliveries.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-12">
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                          />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-900">No orders found</h3>
                      <p className="text-sm text-gray-500">No orders have been assigned to your store yet</p>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                deliveries.map((delivery, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{delivery.customerName}</TableCell>
                    <TableCell>{delivery.vestigeId}</TableCell>
                    <TableCell>{delivery.mobile}</TableCell>
                    <TableCell>{delivery.orderId}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{delivery.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <Eye className="w-4 h-4" />
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
