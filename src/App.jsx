import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import './App.css'
import Navbar from './components/Navbar'
import CountryDetailsPage from './pages/CountryDetailsPage'

function App() {
  return (
    <div>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:countryName" element={<CountryDetailsPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App

