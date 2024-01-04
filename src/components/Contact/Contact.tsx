// Dependencies
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import Contactmap from "./subComponents/Contactmap";
import Intro from "../../globalSubComponents/Intro";
import { scrollTop } from "../../utils/controllers";
import Info from "./subComponents/Info";
import EmailForm from "./subComponents/EmailForm";

const Contact = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Contact"));

  const location = useLocation();
  const { offset } = location.state || {};
  scrollTop(offset);

  return (
    <div>
      <Intro
        normalHead=" Contact "
        redHead="Us "
        caption="Need help? Our team is here for you! Reach out for personalized support, whether it's about your website, social media, or any digital marketing need. Contact us via phone or email, and let's make your online journey smooth and successful."
      />
      <Info />
      <EmailForm />
      <Contactmap />
    </div>
  );
};

export default Contact;
