import Header from "./components/header/header";
import { Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import "./App.css";
import { HomePage } from "./components/Home/homePage";
import Footer from "./components/footer/heroFooter";
import { VaptContaner } from "./services/vaptContanar";
import { useEffect } from "react";
import ConnectWithUsSection from "./services/vapt/contactUs";
import { DevContaner } from "./components/development/devContaner";

function App() {
  const location = useLocation();

  // ✅ Scroll to top on route change
  useEffect(() => {
    console.log("Navigating to:", location.pathname);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="bg-bgColor overflow-x-hidden">
      <Header />
      <Routes key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/Vapt" element={<VaptContaner />} />
        <Route path="/Development" element={<DevContaner />} />
      </Routes>
      {/* <DevContaner /> */}
      <ConnectWithUsSection />

      <Footer />
    </div>
  );
}

export default App;
