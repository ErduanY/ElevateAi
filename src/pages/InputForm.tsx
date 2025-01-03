import React, { useState } from 'react';
import Header from '../components/Header';
import FormData from '../Interface/Iform';
import { generateWorkoutPlan } from '../api/openai';
import { usePDF } from 'react-to-pdf';
import FitnessTips from '../components/FitnessTips';

const InputForm = () => {
  // State för att hantera formdata, träningsschema och felmeddelanden
  const [formData, setFormData] = useState<FormData>({
    gender: '',
    age: '',
    height: '',
    weight: '',
    goals: '',
    days: '',
    activityLevel: '',
    bodyFat: '',
    equipment: '',
  });

  const [workoutPlan, setWorkoutPlan] = useState<
    Array<{ day: string; exercises: Array<{ name: string; setsReps: string; link: string }> }> | null
  >(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Hook för att skapa PDF av träningsplanen
  const { toPDF, targetRef } = usePDF({ filename: 'workout-plan.pdf' });

  // Hantera ändringar i formulärfältet
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Hantera formulärets data och generera träningsplan
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null); // Nollställ eventuella tidigare fel
    setLoading(true); // Aktivera laddningsstatus
    setWorkoutPlan(null); // Nollställ tidigare träningsplan

    // Skapa prompt som skickas till OpenAI
    const prompt = `
    Generate a personalized weekly workout plan for a user based on the following data:
    - Gender: ${formData.gender}
    - Age: ${formData.age}
    - Weight: ${formData.weight}
    - Height: ${formData.height}
    - Fitness goal: ${formData.goals}
    - Workout days per week: ${formData.days}
    - Activity level: ${formData.activityLevel}
    - Body fat percentage: ${formData.bodyFat}
    - Available equipment: ${formData.equipment}

    **Output Format**:
    Return ONLY a valid JSON structure, without any code blocks or additional text, formatted as follows:
    [
      {
        "day": "Day X: Descriptive Title",
        "exercises": [
          {
            "name": "Exercise Name",
            "setsReps": "Number of sets and reps",
            "link": "YouTube URL"
          }
        ]
      },
      ...
    ]
    Do NOT include markdown formatting, explanations, or any other text in the response. Only JSON output.
    `;

    try {
      // Anropa API för att generera träningsplan
      const result = await generateWorkoutPlan(prompt);
      const parsedPlan = JSON.parse(result); // Parsar resultatet som JSON
      setWorkoutPlan(parsedPlan); // Uppdatera state med träningsplanen
    } catch (error) {
      console.error('Error generating workout plan:', error);
      setError('Failed to generate workout plan. Ensure all fields are filled and try again.');
    } finally {
      setLoading(false); // Avsluta laddningsstatus
    }
  };

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
          {/* Formulär för att samla in data */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Skapa formulärfält baserat på data */}
              {[
                { name: 'gender', label: 'Gender', options: ['Male', 'Female', 'Other'] },
                { name: 'age', label: 'Age', options: Array.from({ length: 83 }, (_, i) => `${i + 13} years`) },
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
                    {options.map((option) => (
                      <option key={option} value={option.toLowerCase()}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* Knapp för att generera träningsplan */}
            <div className="flex justify-center mt-12">
              <button
                type="submit"
                disabled={loading}
                className={`px-12 py-4 ${
                  loading
                    ? 'bg-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-90'
                } text-white rounded-full transition-opacity font-semibold text-xl`}
              >
                {loading ? 'Generating...' : 'Generate plan'}
              </button>
            </div>
          </form>

          {/* Felmeddelande */}
          {error && (
            <div className="mt-6 p-4 bg-red-600 text-white rounded">
              <p>{error}</p>
            </div>
          )}

          {/* Visa träningsplan och möjlighet att ladda ner som PDF */}
          {workoutPlan && Array.isArray(workoutPlan) && (
            <div ref={targetRef} className="mt-12 p-6 bg-[#1A1F2E] rounded">
              <h2 className="text-2xl font-bold mb-4">Your Workout Plan:</h2>
              {workoutPlan.map((day, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">{day.day}</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {day.exercises.map((exercise, idx) => (
                      <li key={idx}>
                        <p className="text-gray-300">
                          <span className="font-semibold">{exercise.name}</span> - {exercise.setsReps}
                        </p>
                        {exercise.link && (
                          <a
                            href={exercise.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-400 hover:underline"
                          >
                            Watch Video
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="mt-6 flex justify-center">
                <button
                  onClick={() => toPDF()}
                  className="px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors font-semibold"
                >
                  Download PDF
                </button>
              </div>
            </div>
          )}
        </div>
        {/* Tipssektion */}
        <FitnessTips />
      </div>
    </div>
  );
};

export default InputForm;
