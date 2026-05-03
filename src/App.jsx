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

// Oral Surgery Sub-Services
import WisdomToothRemoval from "./Components/Services/OralSurgery/WisdomToothRemoval";
import ComplexDentalExtractions from "./Components/Services/OralSurgery/ComplexDentalExtractions";
import DentalImplantPlacement from "./Components/Services/OralSurgery/DentalImplantPlacement";
import BoneGraftingProcedures from "./Components/Services/OralSurgery/BoneGraftingProcedures";
import ManagementOfOralPathology from "./Components/Services/OralSurgery/ManagementOfOralPathology";
import SurgicalExposureTeeth from "./Components/Services/OralSurgery/SurgicalExposureTeeth";

// Cosmetic Dentistry Sub-Services
import VeneersBonding from "./Components/Services/CosmeticDentistry/VeneersBonding";
import BlackTriangleDiastemaClosure from "./Components/Services/CosmeticDentistry/BlackTriangleDiastemaClosure";
import ToothWhitening from "./Components/Services/CosmeticDentistry/ToothWhitening";

// Orthodontics Sub-Services
import Braces from "./Components/Services/Orthodontics/Braces";
import Invisalign from "./Components/Services/Orthodontics/Invisalign";

// Airway Focused Dentistry Sub-Services
import TMJTMD from "./Components/Services/AirwayFocusedDentistry/TMJTMD";
import OralApplianceTherapy from "./Components/Services/AirwayFocusedDentistry/OralApplianceTherapy";
import Bruxism from "./Components/Services/AirwayFocusedDentistry/Bruxism";
import Myobrace from "./Components/Services/AirwayFocusedDentistry/Myobrace";

// Anesthesia Sub-Services
import GeneralAnesthesia from "./Components/Services/Anesthesia/GeneralAnesthesia";
import IntravenousSedation from "./Components/Services/Anesthesia/IntravenousSedation";
import NitrousOxideSedation from "./Components/Services/Anesthesia/NitrousOxideSedation";
import LocalAnesthesia from "./Components/Services/Anesthesia/LocalAnesthesia";
import OralSedation from "./Components/Services/Anesthesia/OralSedation";

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
          <Route path="/services/wisdom-tooth-removal" element={<WisdomToothRemoval />} />
          <Route path="/services/complex-dental-extractions" element={<ComplexDentalExtractions />} />
          <Route path="/services/dental-implant-placement" element={<DentalImplantPlacement />} />
          <Route path="/services/bone-grafting-procedures" element={<BoneGraftingProcedures />} />
          <Route path="/services/management-of-oral-pathology" element={<ManagementOfOralPathology />} />
          <Route path="/services/surgical-exposure-of-teeth" element={<SurgicalExposureTeeth />} />
          <Route path="/services/veneers-and-bonding" element={<VeneersBonding />} />
          <Route path="/services/black-triangle-and-diastema-closure" element={<BlackTriangleDiastemaClosure />} />
          <Route path="/services/tooth-whitening" element={<ToothWhitening />} />
          <Route path="/services/braces" element={<Braces />} />
          <Route path="/services/invisalign" element={<Invisalign />} />
          <Route path="/services/tmj-tmd-treatment" element={<TMJTMD />} />
          <Route path="/services/oral-appliance-therapy" element={<OralApplianceTherapy />} />
          <Route path="/services/bruxism" element={<Bruxism />} />
          <Route path="/services/myobrace" element={<Myobrace />} />
          <Route path="/services/general-anesthesia" element={<GeneralAnesthesia />} />
          <Route path="/services/intravenous-sedation" element={<IntravenousSedation />} />
          <Route path="/services/nitrous-oxide-sedation" element={<NitrousOxideSedation />} />
          <Route path="/services/local-anesthesia" element={<LocalAnesthesia />} />
          <Route path="/services/oral-sedation" element={<OralSedation />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
