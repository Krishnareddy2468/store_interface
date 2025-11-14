"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Users, Award, HeadsetIcon, FileText, Lock, ChevronRight, Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react'

export default function HomePage() {
  const [expandedPolicy, setExpandedPolicy] = useState<string | null>(null)
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null)

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

  const faqs = [
    {
      id: "faq-1",
      question: "How long does it take to get my ID card?",
      answer: "Typically 7-10 business days from payment confirmation to store pickup availability. This includes application processing (1-2 days), card printing and quality check (3-5 days), and delivery to store (2-3 days)."
    },
    {
      id: "faq-2",
      question: "What is the total cost of the PVC ID card?",
      answer: "The cost is ₹100 for the PVC ID card. This includes professional printing, security features, and delivery to your selected store. No hidden charges."
    },
    {
      id: "faq-3",
      question: "Can I change my pickup store after applying?",
      answer: "Store changes are possible before card production begins. If you need to change your store, contact us immediately at support@vestige.com or call +91 79955 03807."
    },
    {
      id: "faq-4",
      question: "What documents do I need to collect my ID card?",
      answer: "You'll need: valid government-issued photo ID, order confirmation number, mobile number used for application, and OTP verification sent to your registered mobile."
    },
    {
      id: "faq-5",
      question: "Is my personal information secure?",
      answer: "Yes, we use bank-level security with advanced encryption. Your data is never shared with third parties and is stored securely. We comply with all data protection regulations."
    },
    {
      id: "faq-6",
      question: "What if I made an error in my application?",
      answer: "Contact us within 1 hour of submission before payment is processed. After payment, corrections may require submitting a new application. Call +91 79955 03807 for assistance."
    },
    {
      id: "faq-7",
      question: "How do I become a store partner?",
      answer: "Visit our login page and create your store account with your basic information. Once verified, you'll get access to the store dashboard to manage card deliveries and track commissions."
    },
    {
      id: "faq-8",
      question: "When will I receive my first commission?",
      answer: "Commissions are credited within 5-7 business days after successful card delivery. You need to reach the minimum payout threshold of ₹500 before you can request withdrawal."
    }
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

      {/* About Section */}
      <section className="bg-slate-50 border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">About Vestige PVC ID Card Service</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
            We are the official provider of Vestige PVC ID cards, offering secure, professional, and reliable identification services to Vestige members across India through our extensive network of authorized stores.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg border border-gray-200/50 shadow-sm">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h4>
              <p className="text-gray-600">
                To provide Vestige members with high-quality, secure, and professionally designed PVC ID cards that serve as official identification within the Vestige network. We are committed to maintaining the highest standards of security, quality, and customer service.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200/50 shadow-sm">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h4>
              <p className="text-gray-600">
                To be the most trusted and efficient ID card service provider for Vestige members, leveraging technology and our nationwide network to deliver exceptional service and maintain the integrity of Vestige identification systems.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "Bank-Level Security", desc: "Advanced encryption and secure data handling" },
              { icon: Award, title: "Premium Quality", desc: "High-grade PVC with professional printing" },
              { icon: Users, title: "Nationwide Network", desc: "Authorized stores across India" },
              { icon: Clock, title: "Quick Processing", desc: "7-10 business days delivery" },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-gray-200/50 text-center">
                <feature.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h5 className="text-2xl font-bold text-gray-900 mb-2">{feature.title}</h5>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white border-t border-gray-200/50">
        <div className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
          <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">Frequently Asked Questions</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center mb-12">
            Find answers to common questions about our Vestige PVC ID card service
          </p>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-slate-50 rounded-lg border border-gray-200/50 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-slate-100 transition text-left"
                >
                  <h4 className="font-semibold text-gray-900">{faq.question}</h4>
                  <ChevronRight
                    className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${
                      expandedFaq === faq.id ? "rotate-90" : ""
                    }`}
                  />
                </button>

                {expandedFaq === faq.id && (
                  <div className="px-6 pb-6 text-gray-600 border-t border-gray-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Support Section */}
      <section className="bg-slate-50 border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Get in Touch</h3>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg border border-gray-200/50 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Phone Support</h4>
              <p className="text-gray-600 mb-3">Call us for immediate assistance</p>
              <a href="tel:+917995503807" className="text-blue-600 font-medium hover:underline">
                +91 79955 03807
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200/50 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Email Support</h4>
              <p className="text-gray-600 mb-3">Send us your queries anytime</p>
              <a href="mailto:vestigepvcidcard@gmail.com" className="text-blue-600 font-medium hover:underline">
                vestigepvcidcard@gmail.com
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200/50 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Business Hours</h4>
              <p className="text-gray-600 text-sm">
                Mon-Fri: 9 AM - 6 PM<br/>
                Sat: 10 AM - 4 PM<br/>
                Sun: Closed
              </p>
            </div>
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
