import SearchArtistPage from "./pages/SearchArtistPage"
import HomePage from "./pages/HomePage"
import RecommendedTrackPage from "./pages/RecommendedTrackPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/searchArtist" element={<SearchArtistPage/>}/>
          <Route path="/recommendedTrack" element={<RecommendedTrackPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
