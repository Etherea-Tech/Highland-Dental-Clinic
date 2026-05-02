import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./Components/ContactUs";
import EmergencyDental from "./Components/EmergencyDental";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import LanguageBar from "./Components/LanguageBar";

import Services from "./Components/Services";
import Testimonial from "./Components/Testimonial";
import TeamSection from "./Components/TeamSection";
import Footer from "./Components/Footer";
import GeneralServices from "./Components/GeneralServices";
import EmergencyDentalSmall from "./Components/EmergencyDentalSmall";
import OurTeam from "./Components/OurTeam";

// General Dentistry Sub-Services
import DentalExamCleaning from "./Components/Services/General/DentalExamCleaning";
import ToothColouredRestorations from "./Components/Services/General/ToothColouredRestorations";
import RootCanals from "./Components/Services/General/RootCanals";
import Extractions from "./Components/Services/General/Extractions";
import CrownBridge from "./Components/Services/General/CrownBridge";
import NightguardsSportsguards from "./Components/Services/General/NightguardsSportsguards";
import EmergencyDentalCare from "./Components/Services/General/EmergencyDentalCare";

function App() {
  return (
    <Router>
      <div className="App dark:bg-myblack min-h-screen transition-colors duration-300">
        <LanguageBar />
        <Header />

        <Routes>
          {/* Home Page with all sections */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <EmergencyDentalSmall />
                <TeamSection />
                <Testimonial />
                <Services />
                <ContactUs />
               
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
          <Route path="/team" element={<OurTeam />} />
          
          {/* General Dentistry Sub-Service Routes */}
          <Route path="/services/dental-exam-and-cleaning" element={<DentalExamCleaning />} />
          <Route path="/services/tooth-coloured-restorations" element={<ToothColouredRestorations />} />
          <Route path="/services/root-canals" element={<RootCanals />} />
          <Route path="/services/extractions" element={<Extractions />} />
          <Route path="/services/crown-and-bridge-procedures" element={<CrownBridge />} />
          <Route path="/services/nightguards-and-sportsguards" element={<NightguardsSportsguards />} />
          <Route path="/services/emergency-dental-care" element={<EmergencyDentalCare />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
