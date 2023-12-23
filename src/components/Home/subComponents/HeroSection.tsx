// Dependencies
import { Button } from "@nextui-org/react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="h-[40rem] flex items-center text-white">
      <div className="w-full flex flex-col items-center lg:items-start gap-[2rem] py-[3rem] lg:px-[6rem] xl:px-[8rem] bg-[rgba(0,0,0,0.5)] xl:bg-transparent">
        <div>
          <h1 className="font-['rubik_doodle_shadow'] text-[5rem] leading-[4rem] text-center lg:text-left">Kreative</h1>
          <h1 className="font-['rubik_doodle_shadow'] text-[5rem] leading-[4rem] text-center lg:text-left">Machinez</h1>
        </div>

        <p className="max-w-[26rem] text-center lg:text-justify">
          We are a dynamic digital marketing agency dedicated to crafting innovative solutions for businesses seeking a
          powerful online presence.
        </p>

        <Button
          variant="ghost"
          color="default"
          radius="full"
          endContent={<FaArrowCircleRight className="mt-[0.2rem] mr-[1rem]" />}
          className="w-[8rem] p-0 gap-0 text-white hover:text-[#ef233c]"
        >
          <Link to="../About" className="p-[8px] grow">
            Learn More
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
