// Dependencies
import { Image } from "@nextui-org/react";
import { FaArrowCircleRight } from "react-icons/fa";

// Local Files
import "./HeroSection.css";
import ButtonElement from "../../../globalElements/ButtonElement";
import HeroAsset from "../assets/HeroAsset.svg";


const HeroSection = () => {
  return (
    <div className="h-[40rem] flex items-center text-white">
      <div className="w-full flex flex-col items-center lg:items-start gap-[2rem] py-[3rem] px-[1rem] lg:px-[6rem] xl:px-[8rem] bg-[rgba(0,0,0,0.5)] lg:bg-transparent">
        <div>
          <h1 className="font-['rubik_doodle_shadow'] text-[4rem] sm:text-[5rem] leading-[4rem] text-center lg:text-left">
            Kreative
          </h1>
          <h1 className="font-['rubik_doodle_shadow'] text-[4rem] sm:text-[5rem] leading-[4rem] text-center lg:text-left">
            Machinez
          </h1>
        </div>
        <p className="max-w-[26rem] text-center lg:text-justify">
          A unit of <span className="font-bold">HMS Freedom LLC</span>, is a digital marketing agency that's all about crafting innovative
          solutions for brands helping them build a robust online presence that truly stands out.
        </p>
        <ButtonElement
          to="../About"
          variant="ghost"
          color="default"
          label="Learn More"
          radius="full"
          endContent={<FaArrowCircleRight className="mt-[0.2rem] ml-[1rem]" />}
          className="text-white hover:text-[#ef233c] "
        />
      </div>
      <div className="translate-x-[25%] hidden lg:block">
        <Image width={1000} src={HeroAsset} className="rotating" />
      </div>
    </div>
  );
};

export default HeroSection;
