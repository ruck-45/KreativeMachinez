// Dependencies
import { Divider } from "@nextui-org/react";
import { FaArrowCircleRight } from "react-icons/fa";

// Local Files
import ButtonElement from "../../../globalElements/ButtonElement";


const serviceInfo = [
  {
    heading: "Website Design & Development",
    content:
      "We merge sleek design with seamless functionality for an engaging user experience. Our designed website ensures online presence that captivates and converts visitors into loyal customers, propelling your brand to new heights.",
  },
  {
    heading: "Search Engine Optimization (SEO)",
    content:
      "Boost your online visibility with our SEO expertise. We optimize content, refine website structure, and employ strategic techniques to strengthen your brand's ranking on search engines attracting quality traffic & driving business growth.",
  },
  {
    heading: "Social Media Marketing",
    content:
      "Moving beyond superficial metrics, we specialize in crafting well-researched, insight-driven, and captivating content strategies that provide genuine value to your target audience. At the heart of our approach is the belief that social media is about fostering authentic conversations and building a real community",
  },
  {
    heading: "Web Analytics",
    content:
      "Harness the power of web analytics with our expert service. Gain valuable insights into user behavior, optimize site performance, and make data-driven decisions to propel your online presence and business success",
  },
  {
    heading: "Graphics Design",
    content:
      "Transform your brand through an impactful visual identity with our artistic ingenuity. From crafting memorable logos to designing impactful ads, we specialize in building visual identities that resonate and leave a lasting impression.",
  },
  {
    heading: "Email Marketing",
    content:
      "Our dynamic email marketing campaigns and strategic automation go beyond capturing attention; they forge meaningful connections and convert, ensuring your message resonates deeply with your audience. This approach not only cultivates engagement but consistently drives tangible and sustainable results for your business.",
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
            <h1 className="font-['DM_Serif_Display'] text-[2rem] font-semibold">{data.heading}</h1>
            <p className="text-justify text-default-500 text-[0.95rem] sm:text-md">{data.content}</p>
            <ButtonElement
              to="../Individual"
              variant="ghost"
              color="warning"
              label="Learn More"
              radius="full"
              endContent={<FaArrowCircleRight className="mt-[0.2rem] ml-[1rem]" />}
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
