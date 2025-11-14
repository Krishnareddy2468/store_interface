"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AlertCircle, Eye, EyeOff } from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const [storeId, setStoreId] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Demo credentials (no database needed)
  const demoStores = [
    { storeId: "BHAINSA_STORE", password: "demo123", name: "Bhainsa Store", head: "K.GOUTHAM", mobile: "9494941146" },
    { storeId: "DEMO_STORE", password: "password123", name: "Demo Store", head: "John Doe", mobile: "9999999999" },
  ]

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 500))

      // Check credentials
      const store = demoStores.find((s) => s.storeId === storeId && s.password === password)

      if (store) {
        // Store auth in localStorage
        const authData = {
          storeId: store.storeId,
          name: store.name,
          head: store.head,
          city: store.name.replace(" Store", ""),
          mobile: store.mobile,
          loginTime: new Date().toISOString(),
        }
        localStorage.setItem("vestige_auth", JSON.stringify(authData))
        localStorage.setItem("vestige_token", "token_" + Math.random().toString(36))

        // Redirect to store dashboard
        router.push("/store")
      } else {
        setError("Invalid Store ID or Password. Try BHAINSA_STORE / demo123")
      }
    } catch (err) {
      setError("Login failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex items-center justify-center px-4">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16">
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
        </div>

        {/* Login Card */}
        <Card className="bg-white/95 backdrop-blur-sm border border-white/50 shadow-2xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">Store Partner Login</h1>
          <p className="text-gray-600 text-center mb-8">Access your dashboard and manage your store</p>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            {/* Store ID Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Store ID</label>
              <input
                type="text"
                placeholder="e.g., BHAINSA_STORE"
                value={storeId}
                onChange={(e) => setStoreId(e.target.value.toUpperCase())}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
                disabled={isLoading}
              />
              <p className="text-xs text-gray-500 mt-1">Demo: BHAINSA_STORE</p>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3.5 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">Demo: demo123</p>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              disabled={isLoading || !storeId || !password}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold h-11 rounded-lg transition"
            >
              {isLoading ? "Logging in..." : "Login to Dashboard"}
            </Button>
          </form>

          {/* Demo Info */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-xs font-semibold text-blue-900 mb-2">Demo Credentials:</p>
            <ul className="text-xs text-blue-800 space-y-1">
              <li>• Store ID: <span className="font-mono">BHAINSA_STORE</span></li>
              <li>• Password: <span className="font-mono">demo123</span></li>
            </ul>
          </div>
        </Card>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <a href="/" className="text-sm text-gray-600 hover:text-blue-600 transition">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}
