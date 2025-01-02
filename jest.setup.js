import { vi } from 'vitest';

// Mock the process.env
vi.mock('process', () => ({
  env: {
    VITE_OPENAI_API_KEY: 'mocked-api-key',
  },
}));



