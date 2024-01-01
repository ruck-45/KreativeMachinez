// Dependencies
import { Divider, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";
import ButtonElement from "../../../globalElements/ButtonElement";
const serviceInfo = [
  {
    heading: "Website Design & Development",
    content:
      "We create impactful websites that captivate your audience. From sleek designs to seamless functionality, our digital marketing platform ensures your online presence not only engages but also converts visitors into customers.",
  },
  {
    heading: "Search Engine Optimization",
    content:
      "Enhance your online visibility with our SEO expertise. We optimize content, enhance website structure, and employ strategic techniques, ensuring your brand ranks higher, attracts traffic, and achieves digital success.",
  },
  {
    heading: "Social Media Marketing",
    content:
      "Boost your brand's presence and engagement with our Social Media Marketing expertise. We create compelling content, strategic campaigns, and foster meaningful connections to elevate your business in the digital realm.",
  },
  {
    heading: "Web Analytics",
    content:
      "We transform data into actionable insights, leveraging web analytics to optimize your online strategy. Gain a deeper understanding of user behavior and enhance your digital presence for maximum impact.",
  },
  {
    heading: "Graphics Design",
    content:
      "Revitalize your brand's visual identity with our graphic design expertise. From stunning visuals to compelling branding, we craft graphics that resonate with your audience, elevating your online presence.",
  },
  {
    heading: "Email Marketing",
    content:
      "We amplify your brand's reach through targeted email marketing. From captivating campaigns to strategic automation, we drive engagement and conversions, ensuring your message resonates with your audience effectively.",
  },
];

const OurServices = () => {
  return (
    <div className="flex justify-center bg-[#e9ecef] lg:px-[6rem] gap-[3rem] lg:gap-[6rem] xl:px-[8rem] xl:gap-[8rem] flex-col lg:flex-row px-[3rem] py-[5rem] lg:p-0 ">
      <div className="lg:py-[5rem] lg:max-w-[25rem] relative">
        <h1 className="font-['lilita_one'] text-[3.5rem] sm:text-[4rem] lg:text-[5rem] leading-[5rem] sticky top-[40%]">
          Our <span className="text-[#F5A524]">Services</span>
        </h1>
      </div>
      <div className="hidden lg:block">
        <Divider orientation="vertical" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-[3rem] lg:py-[5rem]">
        {serviceInfo.map((data, index) => (
          <div key={index} className="flex flex-col gap-[1rem]">
            <h1 className="font-['DM_Serif_Display'] text-[2rem] font-semibold">
              {data.heading}
            </h1>
            <p className="text-justify text-default-500 text-[0.95rem] sm:text-md">
              {data.content}
            </p>
            {/* <Button
              variant="ghost"
              color="warning"
              radius="full"
              endContent={
                <FaArrowCircleRight className="mt-[0.2rem] mr-[1rem]" />
              }
              className="w-[8rem] p-0 gap-0"
            >
              <Link
                to="../Individual"
                state={{ id: index }}
                className="p-[8px] grow"
              >
                Learn More
              </Link>
            </Button> */}
            <ButtonElement
              to="../Individual"
              variant="ghost"
              color="warning"
              label="Learn More"
              radius="full"
              endContent={
                <FaArrowCircleRight className="mt-[0.2rem] ml-[1rem]" />
              }
              state={{ id: index }}
              className="w-[9rem] p-0 gap-0 mt-[1rem]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
