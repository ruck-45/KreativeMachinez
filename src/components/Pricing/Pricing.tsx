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
        caption="Discover Transparent Pricing & Answers to Your Question. Explore Our packages and find the perfect fit. Your journey to excellence begins now. "
      />
      <PricingOptions />
      <Banner />
      <FAQAccordion />
    </div>
  );
};

export default Pricing;
