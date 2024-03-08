// Dependencies
import { useDispatch } from "react-redux";
import { updateTab } from "../../store/curTabSlice";

import RobinNav from "./subComponents/RobinNav";
import Footer from "./subComponents/Footer";
import HeroSection from "./subComponents/HeroSection";
import Testimonials from "./subComponents/Testimonials";
import Help from "./subComponents/Help";
import Protection from "./subComponents/Protection";
import Join from "./subComponents/Join";
import Achievement from "./subComponents/Achievement";
import Youtube from "./subComponents/Youtube";
import Popover from "./subComponents/Popover";

const Robinhood = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Robinhood"));

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <div>
      <Popover />
      <RobinNav />
      <HeroSection />
      <Testimonials />
      <Help />
      <Protection />
      <Join />
      <Achievement />
      <Youtube />
      <Footer />
    </div>
  );
};

export default Robinhood;
