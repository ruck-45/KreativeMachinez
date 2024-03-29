// Dependencies
import { FaArrowCircleRight } from "react-icons/fa";
import { Button } from "@nextui-org/react";
import { GiProgression } from "react-icons/gi";
import { IoIosInformationCircle } from "react-icons/io";

// Local Files
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="robin-HeroSection flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-[1rem] w-[100%] px-[3rem] py-[2rem]">
        <GiProgression className="text-white text-[5rem] txtShadow" />
        <p className="txtShadow text-[white] text-2xl font-semibold">InvestNow Retirement</p>

        <div className="flex flex-col items-center text-center text-[3rem] lg:text-[3.5rem] font-['Roboto'] font-bold leading-[3.4rem] lg:leading-[4rem] txtShadow">
          <span className="text-[white]">
            <span className="text-[#F5A524]">Benefit</span> with
          </span>
          <span className="text-[white]">
            <span className="text-[#F5A524]">Robinhood Gold </span> in just moments!
          </span>
        </div>

        <p className="text-white font-semibold italic txtShadow max-w-[55rem] text-center">
          Boost your financial growth today! Seize the opportunity to amplify your investment returns with an exclusive
          subscription offer. Gain an extra 3%* bonus on every dollar you invest in your IRA, extending the same perks
          to IRA transfers and 401(k) rollovers until April 30th. Don't miss out on maximizing your investment
          potential!
        </p>

        <p className="text-default-200 flex txtShadow gap-[0.5rem]">
          <IoIosInformationCircle className="mt-[0.3rem]" /> Limitations and terms apply
        </p>

        <Button
          color="warning"
          variant="shadow"
          radius="none"
          endContent={<FaArrowCircleRight className="mt-[0.2rem]" />}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
