"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Filter, Download } from "lucide-react"

export default function BatchManagement() {
  const [batches] = useState([])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Batch Management</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Search and Filter Bar */}
        <div className="flex gap-3">
          <Input placeholder="Search batch ID..." className="flex-1" />
          <Button variant="outline" className="gap-2 bg-transparent">
            <Filter className="w-4 h-4" />
            Filters
          </Button>
          <Button variant="outline" className="gap-2 bg-transparent">
            <Download className="w-4 h-4" />
            Export Report
          </Button>
        </div>

        {/* Batches Table */}
        <div className="overflow-x-auto border rounded-lg">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead>Batch ID</TableHead>
                <TableHead>Total Cards</TableHead>
                <TableHead>Received</TableHead>
                <TableHead>Delivered</TableHead>
                <TableHead>Pending</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {batches.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-12">
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 7l-8-4-8 4m0 0l8 4m-8-4v10l8 4m0-10l8 4m-8-4v10l8 4 8-4v-10l-8-4-8 4v10l8 4"
                          />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-gray-900">No batches found</h3>
                      <p className="text-sm text-gray-500">Card batches will appear here once assigned</p>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                batches.map((batch, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{batch.batchId}</TableCell>
                    <TableCell>{batch.totalCards}</TableCell>
                    <TableCell>{batch.received}</TableCell>
                    <TableCell>{batch.delivered}</TableCell>
                    <TableCell>{batch.pending}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{batch.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
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
