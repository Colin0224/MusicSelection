import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const apiUrl = 'http://127.0.0.1:8000/api/sample/';

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    }
    fetchData();
  }, []);

  if (!data) return <p>Loading data...</p>;

  return (
    <div>
      <h1>{data.message}</h1>
      <ul>
        {data.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
