import { Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./pages/home/home"
import MovieInner from './components/movie_inner/movie_inner'




function App() {

  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie_inner/:movieId" element={<MovieInner />} />
      </Routes>
    </>

  )
}

export default App
