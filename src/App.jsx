import SearchArtistPage from "./pages/SearchArtistPage"
import HomePage from "./pages/HomePage"
import RecommendedTrackPage from "./pages/RecommendedTrackPage"
import {HashRouter as Router, Route, Routes } from "react-router-dom"


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/searchArtist" element={<SearchArtistPage/>}/>
          <Route path="/recommendedTrack" element={<RecommendedTrackPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
