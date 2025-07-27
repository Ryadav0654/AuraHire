'use client'

import { useState } from 'react'

const plans = {
  monthly: [
    {
      title: 'Free',
      price: '$0',
      frequency: '/mo',
      description: 'Get started with basic resume analysis.',
      features: ['Upload 1 Resume', 'View Resume Score', '5 Job Track Entries'],
      buttonText: 'Start for Free',
      highlighted: false,
    },
    {
      title: 'Monthly',
      price: '$12',
      frequency: '/mo',
      description: 'For active job seekers using AI tools.',
      features: [
        'Unlimited Resumes',
        'AI Resume Suggestions',
        '50 Saved Jobs',
        'Email Application Reminders',
        'PDF Resume Insights',
      ],
      buttonText: 'Upgrade to Monthly',
      highlighted: true,
    },
    {
      title: 'Yearly',
      price: '$99',
      frequency: '/yr',
      description: 'Best for power users with long-term goals.',
      features: [
        'All Monthly Features',
        '200 Job Saves',
        'ATS Score Breakdown',
        'Export Job Tracker',
        'Priority Email Support',
      ],
      buttonText: 'Go Yearly',
      highlighted: false,
    },
  ],
  yearly: [
    {
      title: 'Free',
      price: '$0',
      frequency: '/yr',
      description: 'Get started with basic resume analysis.',
      features: ['Upload 1 Resume', 'View Resume Score', '5 Job Track Entries'],
      buttonText: 'Start for Free',
      highlighted: false,
    },
    {
      title: 'Monthly',
      price: '$120',
      frequency: '/yr',
      description: 'For active job seekers using AI tools (Annual Billing).',
      features: [
        'Unlimited Resumes',
        'AI Resume Suggestions',
        '50 Saved Jobs',
        'Email Application Reminders',
        'PDF Resume Insights',
      ],
      buttonText: 'Upgrade to Monthly',
      highlighted: true,
    },
    {
      title: 'Yearly',
      price: '$99',
      frequency: '/yr',
      description: 'Best for power users with long-term goals.',
      features: [
        'All Monthly Features',
        '200 Job Saves',
        'ATS Score Breakdown',
        'Export Job Tracker',
        'Priority Email Support',
      ],
      buttonText: 'Go Yearly',
      highlighted: false,
    },
  ],
}

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

  const toggleCycle = () => {
    setBillingCycle((prev) => (prev === 'monthly' ? 'yearly' : 'monthly'))
  }

  const currentPlans = plans[billingCycle]

  return (
    <main className="min-h-screen dark:bg-[#111a2e] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-3">Pricing Plans</h1>
        <p className="text-gray-400 mb-8">AI Resume Analysis + Smart Job Tracker. Built for job seekers.</p>

        {/* Toggle Switch */}
        <div className="flex justify-center items-center mb-10 space-x-4">
          <span className={`text-sm ${billingCycle === 'monthly' ? 'text-blue-400' : 'text-gray-500'}`}>Monthly</span>
          <button
            onClick={toggleCycle}
            className="w-12 h-6 bg-gray-700 rounded-full flex items-center px-1"
          >
            <span
              className={`w-4 h-4 rounded-full bg-blue-500 transition-transform transform ${
                billingCycle === 'yearly' ? 'translate-x-6' : ''
              }`}
            />
          </button>
          <span className={`text-sm ${billingCycle === 'yearly' ? 'text-blue-400' : 'text-gray-500'}`}>Yearly</span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentPlans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-xl border p-6 shadow-md transition transform hover:scale-105 ${
                plan.highlighted
                  ? 'border-blue-500 bg-gradient-to-b from-gray-800 to-gray-900'
                  : 'border-gray-800 bg-gray-900'
              }`}
            >
              {/* MOST POPULAR Badge */}
              {plan.title === 'Monthly' && (
                <div className="absolute top-0 right-0 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-tr-xl rounded-bl-xl">
                  MOST POPULAR
                </div>
              )}

              <h2 className="text-2xl font-bold">{plan.title}</h2>
              <p className="text-gray-400 mb-4 text-sm">{plan.description}</p>
              <div className="text-4xl font-semibold mb-6">
                {plan.price}
                <span className="text-base font-normal text-gray-400">{plan.frequency}</span>
              </div>
              <ul className="text-sm text-gray-300 space-y-3 mb-6">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-green-400 mr-2">✔</span> {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2 rounded-lg font-semibold ${
                  plan.highlighted
                    ? 'bg-blue-500 hover:bg-blue-600 text-white'
                    : 'bg-gray-800 hover:bg-gray-700 text-gray-200'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
