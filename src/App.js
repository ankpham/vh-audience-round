import React, {useRef} from 'react';
import {Routes, BrowserRouter as Router, Route} 
from 'react-router-dom';

import './style/style.css'

import Home from './pages/Home';
import Selection from './pages/Selection';
import ViewQuestion from './pages/ViewQuestion';

function App() {
  const page = useRef(null);
  const fullScreenButton = useRef(null);

  
  const fullscreen = () => {
    if (page.current.requestFullscreen) {
      page.current.requestFullscreen();
    } else if (page.current.webkitRequestFullscreen) { /* Safari */
      page.current.webkitRequestFullscreen();
    } else if (page.current.msRequestFullscreen) { /* IE11 */
      page.current.msRequestFullscreen();
    }
  }

  return (
    <div ref={page} className="app">
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/selection" element={<Selection/>} exact/>
        <Route path="/view-question/:category" element={<ViewQuestion/>} exact/>
      </Routes>
    </Router>
    {/*remove overflow hidden to add scrollbar and access full screen button*/}
    <button ref={fullScreenButton} style={{right: '0', display: 'flex', position: 'absolute'}} onClick={() => fullscreen()}>Full Screen</button>
    </div>
  );
}

export default App;
