import axios from 'axios';

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY || 'mocked-api-key';




export const generateWorkoutPlan = async (prompt: string): Promise<string> => {
  try {
    const response = await axios.post(
      OPENAI_API_URL,
      {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a personal trainer. Provide customized workout plans based on user goals, preferences, and fitness levels.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        max_tokens: 1000, 
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

   
    return response.data.choices[0].message.content.trim();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('Error generating workout plan:', error.response?.data || error.message);
    throw new Error('Failed to generate workout plan. Please try again later.');
  }
};
