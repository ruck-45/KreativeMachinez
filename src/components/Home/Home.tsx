// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import HeroSection from "./subComponents/HeroSection";
import WhyChooseUs from "./subComponents/WhyChooseUs";
import Offer from "./subComponents/Offer";
import Achievement from "./subComponents/Achievement";
import Help from "./subComponents/Help";
import Services from "./subComponents/Services";
import Specialization from "../../globalSubComponents/Specialization";
import Clients from "../../globalSubComponents/Clients";
import CTA from "../../globalSubComponents/CTA";
import Youtube from "./subComponents/Youtube";
import Testimonials from "./subComponents/Testimonials";
import { scrollTop } from "../../utils/controllers";

const Home = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Home"));
  scrollTop();

  let callOffset = 650;
  let emailoffset = 1150;
  if (window.innerWidth <= 1024) {
    callOffset = 1000;
    emailoffset = 1650;
  }

  return (
    <div>
      <HeroSection />
      <WhyChooseUs />
      <CTA
        text="Want To Boost Your Online Presence ?"
        color="warning"
        showArrow={true}
        text2="Call Us Now !"
        to="../Contact"
        offset={callOffset}
      />
      <Services />
      <Offer />
      <Achievement />
      <Youtube />
      <CTA
        text="Maximize Your Impact & Get Noticed Now !"
        color="warning"
        showArrow={true}
        text2="Email Us."
        to="../Contact"
        offset={emailoffset}
      />
      <Clients />
      <Help />
      <CTA
        text="Want Digital Success ? We've got you covered."
        color="warning"
        showArrow={true}
        text2="Call Us Now!"
        to="../Contact"
        offset={callOffset}
      />
      <Specialization />
      <Testimonials />
    </div>
  );
};

export default Home;
