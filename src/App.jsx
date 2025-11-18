import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./Components/ContactUs";
import EmergencyDental from "./Components/EmergencyDental";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import LanguageBar from "./Components/LanguageBar";

import Services from "./Components/Services";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";
import GeneralServices from "./Components/GeneralServices";

function App() {
  return (
    <Router>
      <div className="App">
        <LanguageBar />
        <Header />

        <Routes>
          {/* Home Page with all sections */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <Testimonial />
                <Services />
                <ContactUs />
                <EmergencyDental />
              </>
            }
          />

          {/* Individual General Services Page */}
          <Route path="/general-dentistry" element={<GeneralServices />} />

          {/* You can add more individual service pages */}
          <Route path="/services" element={<Services />} />
          <Route path="/emergency" element={<EmergencyDental />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/testimonials" element={<Testimonial />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
