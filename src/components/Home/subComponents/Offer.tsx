// Dependencies
import { Card, CardBody, Divider, Button } from "@nextui-org/react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import { TbWorldWww } from "react-icons/tb";
import { RiComputerFill } from "react-icons/ri";

// Local Files
import "./Offer.css";
import MissionChip from "../../../globalSubComponents/MissionChip";

// components
import ButtonElement from "../../../globalElements/ButtonElement";
const missionChips = [
  {
    logo: <RiComputerFill className="text-[2rem]" />,
    heading: "Complementry Websites",
    caption: "Gain Two Professional Websites",
  },
  {
    logo: <TbWorldWww className="text-[2rem]" />,
    heading: "SEO, Analytics & Many More",
    caption: "Unleash The Power of Digital Marketing",
  },
];

const Offer = () => {
  return (
    <div className="flex justify-center items-center px-[0.5rem] sm:px-[3rem] py-[5rem] bg-[white]">
      <Card isBlurred className="border-none bg-transparent max-w-[80rem]">
        <CardBody>
          <div className="grid grid-cols-6 lg:grid-cols-12 gap-6 lg:gap-4 items-center justify-center">
            <div className="relative col-span-6 lg:col-span-4">
              <div className="missionImg bg-[length:20rem] lg:bg-[length:15rem] xl:bg-[length:20rem] rounded-xl"></div>
            </div>

            <div className="flex flex-col col-span-6 lg:col-span-8 p-[1rem] md:p-[2rem] lg:p-[3rem] gap-[1.5rem]">
              <div className="flex flex-col gap-[1.5rem]">
                <div>
                  <h1 className="font-['DM_Serif_Display']  font-bold text-[2.7rem] lg:text-[3rem] text-[#191f22] leading-[3.7rem] text-center lg:text-left">
                    Unlock Your Digital Success
                  </h1>
                  <h1 className="font-['DM_Serif_Display']  font-bold text-[2.7rem] lg:text-[3rem] text-[#191f22] leading-[3.7rem] text-center lg:text-left">
                    For <span className="text-[#F31260]">$99</span> Only!
                  </h1>
                </div>
                <p className="text-justify text-default-500">
                  For just $99 elevate your online presence with two free
                  websites and essential services like SEO and web analytics.
                  Unleash the power of digital marketing without the hefty price
                  tag, seize this opportunity for your brand's success!
                </p>
              </div>

              <div className="flex flex-col gap-[1rem]">
                {missionChips.map((data, index) => (
                  <MissionChip
                    key={index}
                    logo={data.logo}
                    heading={data.heading}
                    caption={data.caption}
                    headingClass="font-['poppins']"
                    chipvarient="flat"
                    buttonvarient="flat"
                    chipcolor="danger"
                    buttoncolor="danger"
                  />
                ))}
              </div>

              <Divider />

              <div className="flex justify-between">
                {/* <Button
                  variant="bordered"
                  color="danger"
                  radius="full"
                  endContent={
                    <FaArrowCircleRight className="mt-[0.2rem] mr-[1rem]" />
                  }
                  className="w-[9rem] p-0 gap-0"
                >
                  <Link to="../Pricing" className="p-[8px] grow">
                    Learn More
                  </Link>
                </Button> */}
                <ButtonElement
                  to="../Pricing"
                  variant="bordered"
                  color="danger"
                  label="Learn More"
                  radius="full"
                  endContent={
                    <FaArrowCircleRight className="mt-[0.2rem] ml-[1rem]" />
                  }
                  // className="w-[9rem] p-0 gap-0 mt-[1rem]"
                />
                <div className="flex text-[1.8rem] gap-[1rem]">
                  <SiFacebook className="mt-[0.4rem] cursor-pointer hover:scale-105" />
                  <FaSquareXTwitter className="mt-[0.4rem] cursor-pointer hover:scale-105" />
                  <TbBrandYoutubeFilled className="mt-[0.4rem] cursor-pointer hover:scale-105" />
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Offer;
