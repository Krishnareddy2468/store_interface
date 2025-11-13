"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bell, AlertCircle, CheckCircle, Info } from "lucide-react"

export default function Notifications() {
  const [notifications] = useState([
    {
      id: 1,
      type: "info",
      title: "New Cards Received",
      message: "You have received 10 new PVC ID cards for delivery.",
      timestamp: "2 hours ago",
      read: false,
    },
    {
      id: 2,
      type: "success",
      title: "Payout Processed",
      message: "Your payout request of ₹500 has been processed successfully.",
      timestamp: "1 day ago",
      read: true,
    },
    {
      id: 3,
      type: "warning",
      title: "Pending Deliveries",
      message: "You have 5 pending deliveries. Please complete them soon.",
      timestamp: "3 days ago",
      read: true,
    },
  ])

  const getIcon = (type) => {
    switch (type) {
      case "success":
        return <CheckCircle className="w-5 h-5 text-green-600" />
      case "warning":
        return <AlertCircle className="w-5 h-5 text-orange-500" />
      case "error":
        return <AlertCircle className="w-5 h-5 text-red-600" />
      default:
        return <Info className="w-5 h-5 text-blue-600" />
    }
  }

  const getBgColor = (type) => {
    switch (type) {
      case "success":
        return "bg-green-50 border-green-200"
      case "warning":
        return "bg-orange-50 border-orange-200"
      case "error":
        return "bg-red-50 border-red-200"
      default:
        return "bg-blue-50 border-blue-200"
    }
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Notifications</CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Mark All Read
            </Button>
            <Button variant="outline" size="sm">
              Clear All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {notifications.length === 0 ? (
            <div className="text-center py-12">
              <Bell className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900">No notifications</h3>
              <p className="text-sm text-gray-500">You're all caught up!</p>
            </div>
          ) : (
            <div className="space-y-3">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`flex gap-4 p-4 border rounded-lg ${getBgColor(notification.type)} ${!notification.read ? "ring-2 ring-blue-500" : ""}`}
                >
                  <div className="flex-shrink-0 mt-0.5">{getIcon(notification.type)}</div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900">{notification.title}</h4>
                        <p className="text-sm text-gray-700 mt-1">{notification.message}</p>
                      </div>
                      {!notification.read && <Badge>New</Badge>}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">{notification.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
