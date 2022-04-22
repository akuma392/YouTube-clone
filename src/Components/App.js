import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home/Home";
import Footer from "./Footer";
import Download from "./DownLoad/Download";
import Blog from "./Blog";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import SearchPage from "./SearchPage/SearchPage";
import Trending from "./Trending/Trending";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/download/:id" element={<Download />} />
            <Route path="/video/:videoId" element={<VideoPlayer />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/search/:searchId" element={<SearchPage />} />
            <Route path="/trending" element={<Trending />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
