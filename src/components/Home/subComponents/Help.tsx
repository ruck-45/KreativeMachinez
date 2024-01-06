// Dependencies
import { Image } from "@nextui-org/react";
import { FaArrowCircleRight } from "react-icons/fa";

// Local Files
import city from "../assets/city.jpg";
import ButtonElement from "../../../globalElements/ButtonElement";

const Help = () => {
  return (
    <div className="bg-[white] flex">
      <div className="flex justify-center lg:justify-start items-center grow px-[2rem] sm:px-[5rem] py-[5rem] xl:ml-[2rem]">
        <div className="max-w-[50rem] flex flex-col items-start gap-[3rem]">
          <div>
            <h1 className="font-['DM_Serif_Display'] font-bold text-[3rem] text-[#191f22] leading-[3.7rem]">
              Industries big or small,
            </h1>
            <h1 className="font-['DM_Serif_Display'] font-bold text-[3rem] text-[#191f22] leading-[3.7rem]">
              We've got you covered!
            </h1>
          </div>
          <p className="max-w-[35rem] text-justify">
            We're here for you, no matter the industry : photography, real estate, education, medical, and beyond. Our
            personalized digital marketing solutions are crafted with care to elevate your unique story and bring
            success to your business online. Let's grow together in the digital world, hand in hand.
          </p>

          <ButtonElement
            to="../About"
            variant="light"
            color="danger"
            label="Learn More"
            radius="full"
            endContent={<FaArrowCircleRight className="mt-[0.2rem] ml-[1rem]" />}
          />
        </div>
      </div>
      <Image isBlurred src={city} alt="Help" width={500} radius="none" className="border-[1rem] hidden lg:block" />
    </div>
  );
};

export default Help;
