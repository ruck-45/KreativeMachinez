// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import Specialization from "../../globalSubComponents/Specialization";
import Intro from "../../globalSubComponents/Intro";
import { scrollTop } from "../../utils/controllers";
import AboutUs from "./subComponents/AboutUs";
import AboutWork from "./subComponents/AboutWork";
import Leadership from "./subComponents/Leadership";
import Clients from "../../globalSubComponents/Clients";
import CTA from "../../globalSubComponents/CTA";

const About = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("About"));
  scrollTop();

  let callOffset = 650;
  let emailoffset = 1150;
  if (window.innerWidth <= 1024) {
    callOffset = 1000;
    emailoffset = 1650;
  }

  return (
    <div>
      <Intro
        normalHead=" About "
        redHead="Us "
        caption="Your brand's digital success is our mission. With expertise, creativity, and a personal touch, we amplify your online presence. Join us to reshape your narrative, foster connections, and unlock growth."
      />
      <AboutUs />
      <AboutWork />
      <CTA
        text="Want To Boost Your Online Presence ?"
        color="warning"
        showArrow={true}
        text2="Call Us Now !"
        to="../Contact"
        offset={callOffset}
      />
      <Specialization />
      <Leadership />
      <CTA
        text="Maximize Your Impact & Get Noticed Now !"
        color="warning"
        showArrow={true}
        text2="Email Us."
        to="../Contact"
        offset={emailoffset}
      />
      <Clients />
    </div>
  );
};

export default About;
