// Dependencies
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Local Files
import NavBar from "./globalSubComponents/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Pricing from "./components/Pricing/Pricing";
import Services from "./components/Services/Services";
import Auth from "./components/Auth/Auth";
import Profile from "./components/Profile/Profile";
import Blog from "./components/Blog/Blog";
import Privacy from "./components/Privacy/Privacy";
import Footer from "./globalSubComponents/Footer";
import FrequentQuestion from "./globalSubComponents/FrequentQuestion";
import CTA from "./globalSubComponents/CTA";
import QuickContacts from "./globalSubComponents/QuickContacts";
import ScrollToTop from "./globalSubComponents/ScrollToTop";
import { RootState } from "./store/store";
import HomeHero from "./globalAssets/HomeHero.jpg";
import AboutHero from "./globalAssets/About.jpg";
import ContactHero from "./globalAssets/Contact.jpg";
import PricingHero from "./globalAssets/Prices.jpg";
import ServiceHero from "./globalAssets/Services.jpg";
import PrivacyHero from "./globalAssets/privacy.jpg";
import PasswordReset from "./components/ForgetPassword/PasswordReset";
import Robinhood from "./components/Robinhood/Robinhood";

function App() {
  const curTab = useSelector((state: RootState) => state.curTab.value);

  let className = "";
  let background = "linear-gradient(rgba(0,0,0,0.3) 20%,rgba(0,0,0,0.2))";

  switch (curTab) {
    case "Home":
      className = "bg-no-repeat bg-top lg:bg-right-top bg-cover";
      background += `,url(${HomeHero})`;
      break;

    case "About":
      className = "bg-no-repeat bg-top";
      background += `,url(${AboutHero})`;
      break;

    case "Contact":
      className = "bg-no-repeat bg-top";
      background += `,url(${ContactHero})`;
      break;

    case "Pricing":
      className = "bg-no-repeat bg-top";
      background += `,url(${PricingHero})`;
      break;

    case "Services":
      className = "bg-no-repeat bg-top";
      background += `,url(${ServiceHero})`;
      break;

    case "Privacy":
      className = "bg-no-repeat bg-top";
      background += `,url(${PrivacyHero})`;
      break;

    case "Profile":
      className = "bg-no-repeat bg-top";
      background += `,url(${ServiceHero})`;
      break;
    default:
      break;
  }
  return (
    <>
      <div style={{ backgroundImage: background }} className={className}>
        {curTab === "Auth" || curTab === "Password Reset" || curTab === "Robinhood" ? null : <NavBar />}
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Auth" element={<Auth />} />
          <Route path="/Services/*" element={<Services />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Blog/*" element={<Blog />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/ResetPassword" element={<PasswordReset />} />
          <Route path="/Utility" element={<Robinhood />} />
          <Route path="*" element={<Navigate to="/Home" />} />
        </Routes>
      </div>
      {curTab === "Auth" ||
      curTab === "Pricing" ||
      curTab === "Blog" ||
      curTab === "Services" ||
      curTab === "Profile" ||
      curTab === "Privacy" ||
      curTab === "Password Reset" ||
      curTab === "Robinhood" ? null : (
        <FrequentQuestion />
      )}
      {curTab === "Auth" || curTab === "Password Reset" || curTab === "Robinhood" ? null : (
        <CTA text="❝ We Care for your Brand as Passionately as You Do. ❞" color="warning" showArrow={false} />
      )}
      {curTab === "Auth" || curTab === "Password Reset" || curTab === "Robinhood" ? null : <Footer />}
      {curTab === "Auth" || curTab === "Password Reset" || curTab === "Robinhood" ? null : <QuickContacts />}
      {curTab === "Auth" || curTab === "Password Reset" || curTab === "Robinhood" ? null : <ScrollToTop />}
    </>
  );
}

export default App;
