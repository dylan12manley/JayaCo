import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import 'dotenv/config';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import store from './app/store';
import { Provider } from 'react-redux';

// Temporary Fix for firebaseConfig
import firebaseConfig from './firebaseConfig.js';

import App from './App.jsx';
import './index.css';

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
  // <StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </StrictMode>
);
