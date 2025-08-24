"use client"

import type React from "react"
import { useState } from "react"
import { FormInputs, VanishTextarea } from "../../components/ui/vanish-input"
import { Button } from "@/components/ui/button"

export default function WorkWithMeForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiry: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", company: "", inquiry: "" })
    }, 3000)
  }

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <div className="animate-bounce mb-8 flex justify-center">
              <div className="w-16 h-16 bg-teal-400 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Thank You!</h2>
            <p className="text-gray-300 text-base sm:text-lg">
              Your message has been sent successfully. I'll get back to you soon!
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:pl-40">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <div className="text-left mb-8 sm:mb-12">
            <h4 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              Want to <span className="text-teal-400">work</span> with me?
            </h4>
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed text-justify">
              Let's discuss what you want to build and how we can bring your vision to life. Fill out the form below to
              get started!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            <div className="grid gap-6 sm:gap-8">
              <FormInputs
                label="Name"
                type="text"
                value={formData.name}
                onChange={handleInputChange("name")}
                required
              />

              <FormInputs
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={handleInputChange("email")}
                required
              />

              <FormInputs
                label="Company Name (Optional)"
                type="text"
                value={formData.company}
                onChange={handleInputChange("company")}
              />

              <VanishTextarea
                label="Tell us about your inquiry"
                value={formData.inquiry}
                onChange={handleInputChange("inquiry")}
                required
              />
            </div>

            <div className="pt-6 sm:pt-8">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto bg-black-400 hover:bg-white text-gray-400 hover:text-black font-semibold py-3 px-6 sm:py-4 sm:px-8 transition-all duration-300 transform disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none border border-gray-400 rounded-lg"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent animate-spin"></div>
                    Sending...
                  </div>
                ) : (
                  "Submit Form"
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}