
import { Route, Routes} from "react-router-dom";
import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from './Pages/Home/Home'
import Detail from './Pages/Detail/Detail'
import Header from "./Components/Header/Header";
import Playlist from "./Pages/PlayList/PlayList";
import Song from './Components/Song/Song';
import Page404 from './Pages/Page404'
import PlayMusicContext from "./Context/PlayMusicContext";
import { useState } from "react";

function App() {
  const [id, setId] = useState()
  return (
    <div className="App">
      <PlayMusicContext.Provider
        value={
          {
            id: id,
            setId: setId
          }
        }
      >
        <Header/>
          <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />    
                <Route path="/detail" element={<Detail/>} />
                <Route path="/album/:title/:id" element={<Playlist/>}/>
                <Route path="/nghe-si/:id" element={<Detail/>}/>
                <Route path="/:id" element={<Detail/>}/>
                <Route path="/bai-hat/:title/:id" element={<Song/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
            <Song/>
          <Footer />
      </PlayMusicContext.Provider>
        </div>
  );
}

export default App;
