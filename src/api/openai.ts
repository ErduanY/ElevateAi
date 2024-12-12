import axios from 'axios';

// Function to generate a workout plan using OpenAI
export const generateWorkoutPlan = async (prompt: string): Promise<string | undefined> => {
  const openaiApiKey = import.meta.env.VITE_OPENAI_API_KEY;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: 'text-davinci-003', // Use the model suitable for your needs
        prompt,
        max_tokens: 150,
        temperature: 0.7, // Controls creativity of the response
      },
      {
        headers: {
          Authorization: `Bearer ${openaiApiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data.choices[0].text;
  } catch (error) {
    console.error('Error generating workout plan:', error);
    return undefined;
  }
};
