"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Filter } from "lucide-react"

export default function MyPayouts() {
  const [bankInfo, setBankInfo] = useState({
    accountHolderName: "Not set",
    ifscCode: "Not set",
    preferredMode: "Bank Transfer",
    bankName: "Not set",
    accountNumber: "Not set",
  })

  const payoutHistory = []

  return (
    <div className="space-y-6">
      {/* Bank Information Card */}
      <Card>
        <CardHeader>
          <CardTitle>Bank Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-gray-600">Account Holder Name</label>
              <p className="text-lg font-semibold mt-1">{bankInfo.accountHolderName}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">IFSC Code</label>
              <p className="text-lg font-semibold mt-1">{bankInfo.ifscCode}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Preferred Mode</label>
              <p className="text-lg font-semibold mt-1">{bankInfo.preferredMode}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Bank Name</label>
              <p className="text-lg font-semibold mt-1">{bankInfo.bankName}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Account Number</label>
              <p className="text-lg font-semibold mt-1">{bankInfo.accountNumber}</p>
            </div>
          </div>
          <Button className="mt-4">Edit Bank Details</Button>
        </CardContent>
      </Card>

      {/* Payout Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Request Payout */}
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="pt-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-bold text-lg text-green-700">Request Payout</h3>
                <p className="text-sm text-green-600 mt-1">Available: ₹0</p>
              </div>
              <svg className="w-12 h-12 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Request Payout</Button>
            <p className="text-xs text-green-600 mt-2">Minimum payout: ₹500</p>
          </CardContent>
        </Card>

        {/* Pending Payout */}
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="pt-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-bold text-lg text-blue-700">Pending Payout</h3>
                <p className="text-sm text-blue-600 mt-1">Amount: ₹0</p>
              </div>
              <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v2h-2zm0-6h2v6h-2zm.99-5C6.47 6 5 7.48 5 9h2c0-.55.45-1 1-1s1 .45 1 1c0 1-1 1.5-1 2.5v.5h2c0-.5 1-1 1-2.5 0-1.66-1.34-3-3-3z" />
              </svg>
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white cursor-not-allowed opacity-50" disabled>
              Processing...
            </Button>
            <p className="text-xs text-blue-600 mt-2">Will be processed soon</p>
          </CardContent>
        </Card>
      </div>

      {/* Payout History */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-3">
          <CardTitle>Payout History</CardTitle>
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <Filter className="w-4 h-4" />
            Filters
          </Button>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto border rounded-lg">
            <Table>
              <TableHeader className="bg-gray-50">
                <TableRow>
                  <TableHead>Request ID</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Request Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Processed Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payoutHistory.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-12">
                      <div className="flex flex-col items-center justify-center">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <h3 className="font-semibold text-gray-900">No payout history</h3>
                        <p className="text-sm text-gray-500">Your payout requests will appear here</p>
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  payoutHistory.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.requestId}</TableCell>
                      <TableCell>{item.amount}</TableCell>
                      <TableCell>{item.requestDate}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">{item.status}</Badge>
                      </TableCell>
                      <TableCell>{item.processedDate}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
