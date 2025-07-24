import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Home from './Pages/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Events from './Pages/Event/Events';
import Contact from './Pages/Contact/Contact';
import NewsDetail from './Pages/News/NewsDetail';
import EventDetail from './Pages/Event/EventDetail';
import NewsPage from './Pages/News/NewsPage';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <Router>
      <Header />
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/news' element= {<NewsPage/>}/>
          <Route path="/news/:id/:title" element={<NewsDetail />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;