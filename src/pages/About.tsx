import React from 'react'
import Header from '../components/Header'
import { Brain, Dumbbell, Zap, Target, Clock, Sparkles } from 'lucide-react'

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};


const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="bg-[#1A1F2E] p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-cyan-500/20 hover:scale-105">
    <div className="text-cyan-400 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);


const About = () => {
  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">About ElevateAI</h1>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xl text-gray-300 mb-6">
            ElevateAI is your personal AI-powered workout planner, designed to help you achieve your fitness goals with customized exercise routines.
          </p>
          <div className="flex justify-center items-center space-x-4">
            <Brain className="text-cyan-400 w-12 h-12" />
            <Dumbbell className="text-blue-500 w-12 h-12" />
            <Zap className="text-yellow-400 w-12 h-12" />
          </div>
        </div>

        <h2 className="text-3xl font-semibold text-center mb-8">Why Choose ElevateAI?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Brain className="w-10 h-10" />}
            title="AI-Powered Personalization"
            description="Our advanced AI tailors workout plans to your unique needs, goals, and preferences."
          />
          <FeatureCard 
            icon={<Target className="w-10 h-10" />}
            title="Goal-Oriented Approach"
            description="Whether you want to build muscle, lose weight, or improve endurance, we've got you covered."
          />
          <FeatureCard 
            icon={<Clock className="w-10 h-10" />}
            title="Time-Efficient Workouts"
            description="Get the most out of your exercise time with optimized routines."
          />
          <FeatureCard 
            icon={<Dumbbell className="w-10 h-10" />}
            title="Equipment Flexibility"
            description="Plans adapt to your available equipment, whether you're at home or in a full gym."
          />
          <FeatureCard 
            icon={<Zap className="w-10 h-10" />}
            title="Dynamic Adjustments"
            description="As you progress, your plan evolves to keep you challenged and motivated."
          />
          <FeatureCard 
            icon={<Sparkles className="w-10 h-10" />}
            title="Holistic Fitness Approach"
            description="We consider all aspects of your fitness journey for comprehensive health benefits."
          />
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Elevate Your Fitness?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of users who have transformed their lives with ElevateAI's personalized workout plans.
          </p>
          <a 
            href="/input-form" 
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
          >
            Get Started Now
          </a>
        </div>
      </main>
    </div>
  )
}

export default About


