import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route

import Header from './components/Header'; // Import your Header component
import AboutMe from './components/AboutMe'; // Import your AboutMe component
import Portfolio from './components/Portfolio'; // Import your Portfolio component
import Contact from './components/contact'; // Import your Contact component
import Resume from './components/Resume'; // Import your Resume component
import Footer from './components/Footer'; // Import your Footer component

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes> {/* Use Routes instead of Switch */}
            <Route path="/" element={<AboutMe />} /> {/* Use 'element' prop */}
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
