// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import FAQAccordion from "./subComponents/FAQAccordion";
import Banner from "./subComponents/Banner";
import Intro from "../../globalSubComponents/Intro";
import PricingOptions from "./subComponents/PricingOptions";
import { scrollTop } from "../../utils/controllers";

const Pricing = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Pricing"));
  scrollTop();

  return (
    <div>
      <Intro
        normalHead=" Pricing "
        redHead="& FAQ "
        caption="Explore our Pricing to discover transparent and competitive rates for our digital marketing services. Uncover detailed answers to common queries in FAQ section, ensuring clarity and confidence in your decision. "
      />
      <PricingOptions />
      <Banner />
      <FAQAccordion />
    </div>
  );
};

export default Pricing;
