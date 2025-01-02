declare global {
  namespace NodeJS {
    interface ProcessEnv {
      VITE_OPENAI_API_KEY: string;
    }
  }
  
  interface ImportMeta {
    env: {
      VITE_OPENAI_API_KEY: string;
    };
  }
}

export {};