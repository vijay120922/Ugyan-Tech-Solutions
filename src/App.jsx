import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Courses from './pages/Courses';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import WhyChooseUs from './pages/WhyChooseUs';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/why-choose-us" element={<WhyChooseUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
     
    </Routes>
  );
}

export default App;
