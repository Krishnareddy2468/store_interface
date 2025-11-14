"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AlertCircle, Eye, EyeOff } from 'lucide-react'

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Demo admin credentials
  const adminCreds = {
    email: "admin@vestige.com",
    password: "admin123"
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 500))

      if (email === adminCreds.email && password === adminCreds.password) {
        localStorage.setItem("admin_auth", "true")
        localStorage.setItem("admin_token", "token_" + Math.random().toString(36))
        router.push("/admin")
      } else {
        setError("Invalid Admin Email or Password. Try admin@vestige.com / admin123")
      }
    } catch (err) {
      setError("Login failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 flex items-center justify-center px-4">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />

      <div className="relative z-10 w-full max-w-md">
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

        <Card className="bg-white/95 backdrop-blur-sm border border-white/50 shadow-2xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">Admin Login</h1>
          <p className="text-gray-600 text-center mb-8">Manage Vestige PVC ID Card Operations</p>

          <form onSubmit={handleLogin} className="space-y-5">
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Admin Email</label>
              <input
                type="email"
                placeholder="e.g., admin@vestige.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
                disabled={isLoading}
              />
              <p className="text-xs text-gray-500 mt-1">Demo: admin@vestige.com</p>
            </div>

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
              <p className="text-xs text-gray-500 mt-1">Demo: admin123</p>
            </div>

            <Button
              type="submit"
              disabled={isLoading || !email || !password}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold h-11 rounded-lg transition"
            >
              {isLoading ? "Logging in..." : "Login as Admin"}
            </Button>
          </form>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-xs font-semibold text-blue-900 mb-2">Demo Credentials:</p>
            <ul className="text-xs text-blue-800 space-y-1">
              <li>• Email: <span className="font-mono">admin@vestige.com</span></li>
              <li>• Password: <span className="font-mono">admin123</span></li>
            </ul>
          </div>
        </Card>

        <div className="text-center mt-6 space-y-2">
          <a href="/" className="text-sm text-gray-600 hover:text-blue-600 transition block">
            ← Back to Home
          </a>
          <a href="/login" className="text-sm text-gray-600 hover:text-blue-600 transition">
            Store Partner Login
          </a>
        </div>
      </div>
    </div>
  )
}
