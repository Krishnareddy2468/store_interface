"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Users, Award, HeadsetIcon, FileText, Lock, ChevronRight } from 'lucide-react'

export default function HomePage() {
  const [expandedPolicy, setExpandedPolicy] = useState<string | null>(null)

  const policies = [
    {
      id: "terms",
      title: "Terms of Service",
      icon: FileText,
      content: "By using the Vestige Store Partner platform, you agree to these terms. Store partners must maintain ethical business practices and comply with all local regulations. Disputes will be resolved through mutual discussion first.",
    },
    {
      id: "privacy",
      title: "Privacy Policy",
      icon: Lock,
      content: "We protect your personal and business data with industry-standard security. Your store information, sales data, and payment details are encrypted and never shared with third parties without consent.",
    },
    {
      id: "commission",
      title: "Commission Structure",
      icon: Award,
      content: "Store partners earn ₹10 commission per card delivery. Commissions are calculated daily and available for payout after reaching the minimum threshold of ₹500. Payouts are processed within 5-7 business days.",
    },
    {
      id: "conduct",
      title: "Code of Conduct",
      icon: Users,
      content: "All store partners must maintain professional conduct, provide excellent customer service, and represent Vestige with integrity. Violations may result in store suspension or termination.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
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
            <h1 className="text-2xl font-bold text-gray-900">Vestige</h1>
          </div>
          <Link href="/login">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Login</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Grow Your Store Business with Vestige
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Manage deliveries, track commissions, and get paid instantly. Join thousands of store partners already earning with Vestige.
          </p>
          <Link href="/login">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg h-12 px-8">
              Get Started Now
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Users, title: "Easy Management", desc: "Manage all your store operations from one dashboard" },
            { icon: Award, title: "Earn More", desc: "₹10 commission per card with daily payouts" },
            { icon: Shield, title: "Secure", desc: "Your data is protected with industry-standard security" },
            { icon: HeadsetIcon, title: "24/7 Support", desc: "Always here to help with your questions" },
          ].map((feature, i) => (
            <div key={i} className="bg-white p-6 rounded-lg border border-gray-200/50 shadow-sm hover:shadow-md transition">
              <feature.icon className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Policies Section */}
      <section className="bg-white border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Important Information</h3>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {policies.map((policy) => {
              const Icon = policy.icon
              return (
                <div
                  key={policy.id}
                  className="bg-slate-50 rounded-lg border border-gray-200/50 overflow-hidden hover:border-blue-300 transition"
                >
                  <button
                    onClick={() => setExpandedPolicy(expandedPolicy === policy.id ? null : policy.id)}
                    className="w-full p-6 flex items-center gap-4 hover:bg-slate-100 transition"
                  >
                    <Icon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <h4 className="font-semibold text-gray-900 text-left flex-1">{policy.title}</h4>
                    <ChevronRight
                      className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${
                        expandedPolicy === policy.id ? "rotate-90" : ""
                      }`}
                    />
                  </button>

                  {expandedPolicy === policy.id && (
                    <div className="px-6 pb-6 text-gray-600 border-t border-gray-200">
                      {policy.content}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 lg:p-12 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl font-bold mb-4">Need Help?</h3>
              <p className="text-blue-100 mb-6 max-w-md">
                Our support team is ready to assist you with any questions or issues.
              </p>
              <a
                href="mailto:support@vestige.com"
                className="inline-flex items-center gap-2 text-white font-semibold hover:text-blue-100 transition"
              >
                <HeadsetIcon className="w-5 h-5" />
                support@vestige.com
              </a>
            </div>
            <div className="flex flex-col gap-3 w-full md:w-auto">
              <Link href="/login" className="w-full md:w-auto">
                <Button size="lg" variant="outline" className="w-full bg-white text-blue-600 hover:bg-blue-50 border-0">
                  Access Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-sm">
          <p>&copy; 2025 Vestige Store Partner. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
