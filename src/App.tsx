import { config } from 'dotenv';
config();

import './App.css'

function App() {
  const openaiApiKey = process.env.OPENAI_API_KEY;

console.log("Your API Key:", openaiApiKey); 

}

export default App
