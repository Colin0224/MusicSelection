import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const apiUrl = 'http://127.0.0.1:8000/api/sample/';

async function getSampleData() {
  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    const data = await response.json();
    console.log('Data from Django:', data);
    displayData(data);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

function displayData(data) {
  const appDiv = document.getElementById('app');
  if (!appDiv) return;

  // Simple example: Show the message and items in HTML
  appDiv.innerHTML = `
    <h1>${data.message}</h1>
    <ul>
      ${data.items.map(item => `<li>${item}</li>`).join('')}
    </ul>
  `;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


document.addEventListener('DOMContentLoaded', getSampleData);