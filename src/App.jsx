// src/App.jsx
// main.jsx or App.jsx
import 'bootstrap/dist/css/bootstrap.min.css';

import TopBar from './components/TopBar';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import WhatWeDo from './components/WhatWeDo';
import Awards from './components/Awards';
import Hire from './components/Hire.jsx';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <TopBar />
      <Navigation />
      <Hero />
      <WhoWeAre/>
      < WhatWeDo />
      <Awards/>
      < Hire/> 
      <Footer/>
      
    </>
  );
}

export default App;
