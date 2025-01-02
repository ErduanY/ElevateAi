import { Apple, Droplet, Moon, Sun, Utensils, Dumbbell, Heart, Scale } from 'lucide-react'

interface Tip {
  icon: React.ReactNode
  title: string
  description: string
}

const tips: Tip[] = [
  {
    icon: <Apple className="w-6 h-6 text-green-400" />,
    title: "Balanced Diet",
    description: "Aim for a balanced diet with plenty of fruits, vegetables, lean proteins, and whole grains."
  },
  {
    icon: <Droplet className="w-6 h-6 text-blue-400" />,
    title: "Stay Hydrated",
    description: "Drink at least 8 glasses of water a day to keep your body hydrated and functioning optimally."
  },
  {
    icon: <Moon className="w-6 h-6 text-purple-400" />,
    title: "Adequate Sleep",
    description: "Get 7-9 hours of sleep per night to help your body recover and maintain overall health."
  },
  {
    icon: <Sun className="w-6 h-6 text-yellow-400" />,
    title: "Consistency",
    description: "Stick to your workout routine consistently for best results. Aim for at least 3-4 sessions per week."
  },
  {
    icon: <Utensils className="w-6 h-6 text-red-400" />,
    title: "Portion Control",
    description: "Be mindful of portion sizes to maintain a healthy calorie balance."
  },
  {
    icon: <Dumbbell className="w-6 h-6 text-gray-400" />,
    title: "Progressive Overload",
    description: "Gradually increase the weight, frequency, or number of repetitions in your strength training routine."
  },
  {
    icon: <Heart className="w-6 h-6 text-pink-400" />,
    title: "Cardiovascular Health",
    description: "Include both high-intensity and low-intensity cardio exercises in your routine for heart health."
  },
  {
    icon: <Scale className="w-6 h-6 text-indigo-400" />,
    title: "Track Progress",
    description: "Regularly monitor your progress through measurements, photos, or performance metrics to stay motivated."
  }
]

const FitnessTips = () => {
  return (
    <div className="bg-[#1A1F2E] rounded-lg p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">General Fitness Tips</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tips.map((tip, index) => (
          <div key={index} className="bg-[#0B0F1A] p-4 rounded-lg shadow-lg transition-all duration-300 hover:shadow-cyan-500/20 hover:scale-105">
            <div className="flex items-center mb-3">
              {tip.icon}
              <h3 className="ml-2 text-lg font-semibold text-white">{tip.title}</h3>
            </div>
            <p className="text-gray-400 text-sm">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FitnessTips

