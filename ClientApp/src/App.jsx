import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
   const fetchWeather = async () => {
      const response = await fetch('http://localhost:5289/WeatherForecast')
      const data = await response.json()
      console.log(data)
    }
    fetchWeather()
  }, [])

  return (
    <div className="App">
     <h1>Hi just trying</h1>
    </div>
  )
}

export default App
