import React from 'react';
import { MainPage } from "./MainPage"
import { ExtraPage } from "./ExtraPage"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PickProductPage from './PickProductPage';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function App() {
  
  return (

    <BrowserRouter>
        <Tabs>
          <Tab label="Home" value="Home" to="/" component={Link} />
          <Tab label="Play" value="Play" to="/bonus" component={Link} />
      </Tabs>
     <div className="App" style={{overflowX: "hidden"}}>
  
      <Routes>
        <Route path="/rhyme" exact={true} element={<MainPage/>}/>
        <Route default path="/" exact={true} element={<PickProductPage/>}/>
        <Route path="/bonus" exact={true} element={<ExtraPage/>}/>
      </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
