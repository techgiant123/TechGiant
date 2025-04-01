import Header from "./components/header/header";
import { Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import "./App.css";
import { HomePage } from "./components/Home/homePage";
import Footer from "./components/footer/heroFooter";
import { VaptContaner } from "./services/vaptContanar";
import { useEffect } from "react";
import ConnectWithUsSection from "./services/vapt/contactUs";
import { DevContaner } from "../src/services/development/devContaner";
import MarketingPage from "./services/markating/markating";

function App() {
  const location = useLocation();
  useEffect(() => {
    console.log("Navigating to:", location.pathname);
    window.scrollTo(0, 0);
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [location.pathname]);

  return (
    <div className="bg-bgColor overflow-x-hidden">
      <Header />
      <Routes key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/Vapt" element={<VaptContaner />} />
        <Route path="/Development" element={<DevContaner />} />
        <Route path="/Marketing" element={<MarketingPage />} />
      </Routes>
      {/* <DevContaner /> */}
      <ConnectWithUsSection />
      <Footer />
    </div>
  );
}

export default App;