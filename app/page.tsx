"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

export default function TipCalculator() {
  const [bill, setBill] = useState<string>('')
  const [tipPercentage, setTipPercentage] = useState<number>(0)
  const [customTip, setCustomTip] = useState<string>('')
  const [numberOfPeople, setNumberOfPeople] = useState<string>('')

  const tipAmount = bill && numberOfPeople && (tipPercentage || customTip)
    ? (parseFloat(bill) * (parseFloat(customTip || tipPercentage.toString()) / 100)) / parseFloat(numberOfPeople)
    : 0

  const totalAmount = bill && numberOfPeople && (tipPercentage || customTip)
    ? (parseFloat(bill) + (parseFloat(bill) * (parseFloat(customTip || tipPercentage.toString()) / 100))) / parseFloat(numberOfPeople)
    : 0

  const handleReset = () => {
    setBill('')
    setTipPercentage(0)
    setCustomTip('')
    setNumberOfPeople('')
  }

  const canReset = bill || tipPercentage || customTip || numberOfPeople

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-very-dark-cyan tracking-wider">
          SPLI
          <br />
          TTER
        </h1>
      </div>

      <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 grid md:grid-cols-2 gap-8">
        {/* Left Column - Input Section */}
        <div className="space-y-8">
          {/* Bill Input */}
          <div>
            <label className="block text-dark-grayish-cyan text-sm mb-2">
              Bill
            </label>
            <Input
              type="number"
              placeholder="0"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
              icon="$"
            />
          </div>

          {/* Select Tip % */}
          <div>
            <label className="block text-dark-grayish-cyan text-sm mb-2">
              Select Tip %
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[5, 10, 15, 25, 50].map((percentage) => (
                <Button
                  key={percentage}
                  variant={tipPercentage === percentage ? "default" : "secondary"}
                  className="py-3 text-xl font-bold"
                  onClick={() => {
                    setTipPercentage(percentage)
                    setCustomTip('')
                  }}
                >
                  {percentage}%
                </Button>
              ))}
              <Input
                type="number"
                placeholder="Custom"
                value={customTip}
                onChange={(e) => {
                  setCustomTip(e.target.value)
                  setTipPercentage(0)
                }}
                className="placeholder:text-dark-grayish-cyan/50"
              />
            </div>
          </div>

          {/* Number of People Input */}
          <div>
            <label className="block text-dark-grayish-cyan text-sm mb-2">
              Number of People
            </label>
            <Input
              type="number"
              placeholder="0"
              value={numberOfPeople}
              onChange={(e) => setNumberOfPeople(e.target.value)}
              icon="👤"
            />
          </div>
        </div>

        {/* Right Column - Results Section */}
        <div className="bg-very-dark-cyan rounded-2xl p-6 md:p-8 flex flex-col justify-between">
          <div className="space-y-6">
            {/* Tip Amount */}
            <div className="flex justify-between items-center">
              <div>
                <p className="text-white text-sm">Tip Amount</p>
                <p className="text-grayish-cyan text-xs">/ person</p>
              </div>
              <p className="result-amount">
                ${tipAmount.toFixed(2)}
              </p>
            </div>

            {/* Total Amount */}
            <div className="flex justify-between items-center">
              <div>
                <p className="text-white text-sm">Total</p>
                <p className="text-grayish-cyan text-xs">/ person</p>
              </div>
              <p className="result-amount">
                ${totalAmount.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Reset Button */}
          <Button
            onClick={handleReset}
            disabled={!canReset}
            className="mt-8 w-full bg-strong-cyan text-very-dark-cyan py-3 text-xl font-bold hover:bg-opacity-75 transition-opacity focus:outline-none focus:ring-2 focus:ring-strong-cyan disabled:opacity-25 disabled:cursor-not-allowed"
          >
            RESET
          </Button>
        </div>
      </div>
    </div>
  )
}