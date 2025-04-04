import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const clerk_key = import.meta.env.VITE_CLERK_KEY;
console.log(import.meta.env)
console.log(import.meta.env.VITE_CLERK_KEY);
console.log(clerk_key);
import { ClerkProvider } from '@clerk/clerk-react';
if(!clerk_key){
  throw new Error("Key was not Found");
}



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey ={clerk_key}>
     <App />
    </ClerkProvider>
  </StrictMode>,
)
