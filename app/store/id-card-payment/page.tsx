"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, Copy } from 'lucide-react'

export default function IDCardPaymentPage() {
  const router = useRouter()
  const [paymentCompleted, setPaymentCompleted] = useState(false)
  const [copied, setCopied] = useState(false)

  const invoiceData = {
    invoiceNumber: "VID-2025-" + Math.random().toString(36).substring(7).toUpperCase(),
    date: new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" }),
    amount: 100,
    description: "Vestige PVC ID Card",
  }

  const handleCopyUPI = () => {
    navigator.clipboard.writeText("vestige@upi")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handlePaymentComplete = () => {
    setPaymentCompleted(true)
    setTimeout(() => {
      router.push("/store")
    }, 3000)
  }

  if (paymentCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex items-center justify-center px-4">
        <Card className="bg-white shadow-2xl p-12 max-w-md text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment Successful!</h1>
          <p className="text-gray-600 mb-6">Your ID card application is processing. You will receive a WhatsApp confirmation shortly.</p>
          <p className="text-sm text-gray-500">Redirecting to dashboard...</p>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
        <div className="flex items-center justify-between px-8 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.back()}
              className="hover:bg-blue-50"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-2xl font-bold text-gray-900">Payment Invoice</h1>
          </div>
        </div>
      </header>

      <main className="px-8 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Invoice Card */}
          <Card className="bg-white shadow-lg p-12 mb-8 border-2 border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">INVOICE</h2>
              <p className="text-gray-500 mt-2">Vestige PVC ID Card Application</p>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-8 pb-8 border-b-2 border-gray-200">
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase mb-2">From</p>
                <p className="font-semibold text-gray-900">Vestige India</p>
                <p className="text-sm text-gray-600">Store Partner Portal</p>
                <p className="text-sm text-gray-600">support@vestige.com</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Invoice Details</p>
                <p className="text-sm text-gray-900"><strong>Invoice #:</strong> {invoiceData.invoiceNumber}</p>
                <p className="text-sm text-gray-900"><strong>Date:</strong> {invoiceData.date}</p>
              </div>
            </div>

            {/* Line Items */}
            <div className="mb-8">
              <table className="w-full mb-6">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left py-3 text-gray-900 font-semibold">Description</th>
                    <th className="text-right py-3 text-gray-900 font-semibold">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 text-gray-700">{invoiceData.description}</td>
                    <td className="text-right py-4 text-gray-900 font-semibold">₹{invoiceData.amount}</td>
                  </tr>
                </tbody>
              </table>

              {/* Total */}
              <div className="flex justify-end mb-2">
                <div className="w-48">
                  <div className="flex justify-between py-3 border-t-2 border-b-2 border-gray-900">
                    <span className="font-bold text-gray-900">TOTAL:</span>
                    <span className="font-bold text-2xl text-blue-600">₹{invoiceData.amount}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Terms */}
            <div className="pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">Thank you for your business. Please retain this invoice for your records.</p>
            </div>
          </Card>

          {/* Payment Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* UPI Payment */}
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 border-2 border-blue-300 hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">₹</div>
                <h3 className="text-lg font-bold text-gray-900">UPI Payment</h3>
              </div>
              <p className="text-sm text-gray-700 mb-4">Fast & Secure Payment</p>
              <div className="bg-white rounded-lg p-3 font-mono text-sm font-semibold text-center mb-4 border border-gray-300">
                vestige@upi
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={handleCopyUPI}
                  variant="outline"
                  className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  {copied ? "✓ Copied" : "Copy UPI"}
                </Button>
                <Button
                  onClick={handlePaymentComplete}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Paid
                </Button>
              </div>
            </Card>

            {/* Bank Transfer */}
            <Card className="bg-gradient-to-br from-green-50 to-green-100 p-6 border-2 border-green-300 hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">🏦</div>
                <h3 className="text-lg font-bold text-gray-900">Bank Transfer</h3>
              </div>
              <p className="text-sm text-gray-700 mb-4">Direct Bank Transfer</p>
              <div className="bg-white rounded-lg p-3 text-sm mb-4 border border-gray-300 space-y-1">
                <p><strong>Account:</strong> Vestige India</p>
                <p><strong>Bank:</strong> ICICI Bank</p>
                <p><strong>Amount:</strong> ₹{invoiceData.amount}</p>
              </div>
              <Button
                onClick={handlePaymentComplete}
                variant="outline"
                className="w-full border-green-600 text-green-600 hover:bg-green-50"
              >
                Confirm Payment
              </Button>
            </Card>
          </div>

          {/* Back to Store */}
          <div className="text-center">
            <Button
              variant="ghost"
              onClick={() => router.push("/store")}
              className="text-gray-600 hover:text-gray-900"
            >
              ← Return to Store Dashboard
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
