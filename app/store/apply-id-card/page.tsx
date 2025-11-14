"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, FileText, CreditCard, MessageCircle, Package, CheckCircle } from 'lucide-react'

export default function ApplyIDCardPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    fullName: "",
    vestigeId: "",
    mobileNumber: "",
    address: "",
    profilePhoto: null as File | null,
    nearestStore: "",
  })

  const steps = [
    { number: 1, title: "Fill Application Form", icon: FileText },
    { number: 2, title: "Secure Payment", icon: CreditCard },
    { number: 3, title: "WhatsApp Confirmation", icon: MessageCircle },
    { number: 4, title: "Delivery & Completion", icon: Package },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFormData((prev) => ({
        ...prev,
        profilePhoto: e.target.files![0],
      }))
    }
  }

  const handleNextStep = () => {
    if (currentStep === 1) {
      // Validate step 1
      if (!formData.fullName || !formData.vestigeId || !formData.mobileNumber || !formData.address) {
        alert("Please fill all required fields")
        return
      }
    }
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleReviewApplication = () => {
    // Go to payment page
    router.push("/store/id-card-payment")
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
            <h1 className="text-2xl font-bold text-gray-900">Apply for Vestige PVC ID Card</h1>
          </div>
        </div>
      </header>

      <main className="px-8 py-8">
        {/* Steps Progress */}
        <div className="mb-12">
          <h2 className="text-center text-gray-900 font-semibold mb-8">Complete your ID card application in 4 simple steps</h2>
          <div className="grid grid-cols-4 gap-4">
            {steps.map((step) => {
              const StepIcon = step.icon
              const isActive = currentStep === step.number
              const isCompleted = currentStep > step.number

              return (
                <div
                  key={step.number}
                  className={`p-6 rounded-lg border-2 text-center transition ${
                    isActive
                      ? "border-blue-500 bg-blue-50 shadow-lg"
                      : isCompleted
                      ? "border-green-500 bg-green-50"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : isCompleted
                        ? "bg-green-600 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {isCompleted ? <CheckCircle className="w-6 h-6" /> : <StepIcon className="w-6 h-6" />}
                  </div>
                  <h3 className="font-semibold text-gray-900">Step {step.number}</h3>
                  <p className="text-sm text-gray-600 mt-1">{step.title}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Form Content */}
        {currentStep === 1 && (
          <Card className="bg-white shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Application Details</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Personal Information</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Vestige ID *</label>
                    <input
                      type="text"
                      name="vestigeId"
                      placeholder="Enter your Vestige ID"
                      value={formData.vestigeId}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Mobile Number *</label>
                    <input
                      type="tel"
                      name="mobileNumber"
                      placeholder="Enter your mobile number"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Address *</label>
                    <textarea
                      name="address"
                      placeholder="Enter your complete address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <p className="text-xs text-gray-500 mt-1">0/500 characters</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Documents Upload</h4>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Profile Photo *</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                      id="profilePhoto"
                    />
                    <label htmlFor="profilePhoto" className="cursor-pointer">
                      <div className="text-gray-400 mb-2">📸</div>
                      <p className="text-gray-600">Click to upload photo</p>
                      <p className="text-xs text-gray-500 mt-1">Max 10MB • Will be compressed automatically</p>
                    </label>
                    {formData.profilePhoto && (
                      <p className="text-sm text-green-600 mt-2">✓ {formData.profilePhoto.name}</p>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Delivery Store</h4>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Select Nearest Store *</label>
                  <select
                    name="nearestStore"
                    value={formData.nearestStore}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Choose your nearest store for pickup</option>
                    <option value="bhainsa">Bhainsa Store</option>
                    <option value="hyderabad">Hyderabad Store</option>
                    <option value="bangalore">Bangalore Store</option>
                  </select>
                </div>
              </div>

              <Button
                onClick={handleNextStep}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold h-12 rounded-lg"
              >
                Review Application
              </Button>
            </div>
          </Card>
        )}

        {/* Step 2, 3, 4 - Placeholder */}
        {currentStep > 1 && currentStep < 4 && (
          <Card className="bg-white shadow-lg p-8 max-w-2xl mx-auto text-center">
            <p className="text-gray-600 mb-6">Step {currentStep} content</p>
            <Button
              onClick={handleNextStep}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold"
            >
              Continue to Next Step
            </Button>
          </Card>
        )}

        {/* Step 4 - Completion */}
        {currentStep === 4 && (
          <Card className="bg-white shadow-lg p-8 max-w-2xl mx-auto text-center">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
            <p className="text-gray-600">Your ID card application has been successfully submitted. Click below to proceed with payment.</p>
            <Button
              onClick={handleReviewApplication}
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8"
            >
              Proceed to Payment
            </Button>
          </Card>
        )}
      </main>
    </div>
  )
}
