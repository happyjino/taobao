import './App.css';
import './css/Home.css'
import './css/TopBar.css'
import './css/ShopList.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './page/Home';
import ShopList from './page/ShopList';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
