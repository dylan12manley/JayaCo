import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import 'dotenv/config';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

import './index.css';
import App from './App.jsx';
import firebaseConfig from './firebaseConfig.js';

// Initialize Firebase
// const firebaseConfig = {
//   apiKey: process.env.VITE_API_KEY,
//   authDomain: process.env.ITE_AUTH_DOMAIN,
//   projectId: process.env.VITE_PROJECT_ID,
//   storageBucket: process.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: process.env.VITE_MESSAGE_SENDER_ID,
//   appId: process.env.VITE_APP_ID,
//   measurementId: process.env.VITE_MEASUREMENT_ID,
// };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
