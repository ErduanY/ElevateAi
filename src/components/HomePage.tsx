import { Link } from 'react-router-dom'
import { Timer, Dumbbell } from 'lucide-react'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          <span className="text-white">Create a Full </span>
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Fitness Program
          </span>
          <span className="text-white"> </span>
          <Dumbbell className="w-12 h-12 inline-block mx-2 text-yellow-400" />
          <span className="text-white"> in </span>
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">30</span>
          <span className="text-white"> Seconds </span>
          <Timer className="w-12 h-12 inline-block text-white" />
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12">
          Unlock your potential and take charge of your fitness journey with our cutting-edge fitness program generator. 
          Whether you're aiming to build strength or lose weight, our app has you covered.
        </p>

        <Link to="/input-form" className="px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:opacity-90 transition-opacity">
          Start Now
        </Link>
      </div>
    </div>
  )
}

export default HomePage
