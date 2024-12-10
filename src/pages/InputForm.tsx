import React, { useState } from 'react'
import Header from '../components/Header'
import FormData from '../Interface/Iform'

const InputForm = () => {
  const [formData, setFormData] = useState<FormData>({
    gender: '',
    age: '',
    height: '',
    weight: '',
    goals: '',
    days: '',
    activityLevel: '',
    bodyFat: '',
    equipment: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form data:', formData)
    
  }

  return (
    <div className="min-h-screen w-full bg-[#0B0F1A] text-white flex flex-col">
      <Header />
      <div className="flex-grow px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Let's get started...</h1>
          <p className="text-gray-400">
            A personalized workout plan tailored to your goals!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { name: 'gender', label: 'Gender', options: ['Male', 'Female', 'Other'] },
                { name: 'age', label: 'Age', options: Array.from({ length: 83 }, (_, i) => `${i + 18} years`) },
                { name: 'height', label: 'Height', options: Array.from({ length: 61 }, (_, i) => `${i + 140} cm`) },
                { name: 'weight', label: 'Weight', options: Array.from({ length: 151 }, (_, i) => `${i + 40} kg`) },
                { name: 'goals', label: 'Goals', options: ['Build Muscle', 'Lose Weight', 'Maintain', 'Improve Strength', 'Improve Endurance'] },
                { name: 'days', label: 'Days to workout', options: Array.from({ length: 7 }, (_, i) => `${i + 1} days/week`) },
                { name: 'activityLevel', label: 'Activity level', options: ['Sedentary', 'Lightly Active', 'Moderately Active', 'Very Active', 'Extra Active'] },
                { name: 'bodyFat', label: 'Bodyfat', options: Array.from({ length: 41 }, (_, i) => `${i + 5}%`) },
                { name: 'equipment', label: 'Equipment', options: ['No Equipment', 'Basic (Dumbbells)', 'Full Gym', 'Home Gym'] },
              ].map(({ name, label, options }) => (
                <div key={name} className="relative">
                  <select
                    name={name}
                    value={formData[name as keyof FormData]}
                    onChange={handleChange}
                    className="block appearance-none w-full bg-[#1A1F2E] border border-gray-800 text-white py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-[#252B3B] focus:border-gray-700"
                  >
                    <option value="">{label}</option>
                    {options.map(option => (
                      <option key={option} value={option.toLowerCase()}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <button 
                type="submit"
                className="px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full hover:opacity-90 transition-opacity font-semibold text-xl"
              >
                Generate plan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default InputForm

