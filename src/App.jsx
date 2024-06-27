import SearchArtistPage from "./pages/SearchArtistPage"
import HomePage from "./pages/HomePage"
import { BrowserRouter, Route, Routes } from "react-router-dom"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/searchArtist" element={<SearchArtistPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
