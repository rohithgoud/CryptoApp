import React  from 'react'
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Exchanges from './components/Exchanges';
import Coins from './components/Coins';
import Coindetails from './components/Coindetails';
import Signup from './components/Signup';
import Nft from './components/Nft';
import NftDetails from './components/NftDetails';




function App() {

  return (
    <div>
    
      <Router>
        <Routes>
       
          <Route index element={<Home/>} />
          <Route path='/exchanges' element={<Exchanges/>} />
          <Route path='/coins' element={<Coins/>} />
          <Route path="/coin/:id" element={<Coindetails/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/Nft" element={<Nft/>} />
          <Route path="/Nft/:id" element={<NftDetails/>} />
         
        </Routes>
      </Router>
      
  
    </div>
  );
}

export default App;
