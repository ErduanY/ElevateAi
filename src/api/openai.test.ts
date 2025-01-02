import { vi, describe, it, expect, beforeEach } from 'vitest';
import axios from 'axios';
import { generateWorkoutPlan } from './openai';

vi.mock('axios');
vi.mock('import.meta', () => ({
  env: {
    VITE_OPENAI_API_KEY: 'mocked-api-key'
  }
}));

describe('generateWorkoutPlan', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('should generate a workout plan successfully', async () => {
    const mockResponse = {
      data: {
        choices: [
          {
            message: {
              content: 'Mocked workout plan',
            },
          },
        ],
      },
    };

    vi.mocked(axios.post).mockResolvedValue(mockResponse);

    const prompt = 'Generate a workout plan';
    const result = await generateWorkoutPlan(prompt);

    expect(result).toBe('Mocked workout plan');
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith(
      'https://api.openai.com/v1/chat/completions',
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
          Authorization: 'Bearer mocked-api-key',
          'Content-Type': 'application/json',
        },
      }
    );
  });

  it('should throw an error when API call fails', async () => {
    const errorMessage = 'API error';
    vi.mocked(axios.post).mockRejectedValue(new Error(errorMessage));

    const prompt = 'Generate a workout plan';
    await expect(generateWorkoutPlan(prompt)).rejects.toThrow('Failed to generate workout plan. Please try again later.');

    expect(axios.post).toHaveBeenCalledTimes(1);
  });
});

