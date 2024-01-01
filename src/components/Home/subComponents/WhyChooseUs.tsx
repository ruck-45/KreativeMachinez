// Dependencies
import { FaArrowCircleRight } from "react-icons/fa";
import ButtonElement from "../../../globalElements/ButtonElement";
const benefitData = [
  {
    heading: "Excellence",
    caption: '"Empowering Brands, Inspiring Connections"',
    content:
      "We bring proven expertise, creative excellence, & a personalized approach to every project. With years of industry experience, we are committed to delivering results that set your brand apart in the digital landscape. Our client-centric approach ensures transparent communication, making your success our top priority. Elevate your brand with a digital partnership that goes beyond expectations.",
    link: { text: "About Us", dest: "../About" },
  },
  {
    heading: "Solutions",
    caption: '"Elevate Your Brand with Our Comprehensive Services"',
    content:
      "Our comprehensive digital marketing services encompass strategic planning, creative content creation, social media management, SEO optimization, and performance analytics. With a focus on tailored solutions, we amplify your online impact, driving engagement and conversions. Trust us to navigate the dynamic digital landscape, ensuring your brand stands out and thrives in the ever-evolving world of online marketing.",
    link: { text: "Services", dest: "../Services" },
  },
];

const WhyChooseUs = () => {
  return (
    <div className="flex justify-center items-center bg-[#e9ecef] lg:px-[6rem] gap-[3rem] lg:gap-[6rem] xl:px-[8rem] xl:gap-[8rem] flex-col lg:flex-row px-[3rem] py-[5rem] lg:p-0 ">
      <h1 className="lg:py-[5rem] font-['lilita_one'] text-[3.5rem] sm:text-[4rem] lg:text-[5rem] lg:max-w-[25rem] leading-[5rem]">
        Why Choose Us <span className="text-[#F31260]">?</span>
      </h1>
      <div className="grow flex lg:py-[5rem] xl:py-0 gap-[2rem] xl:gap-[5rem] flex-col xl:flex-row">
        {benefitData.map((data, index) => (
          <div
            key={index}
            className="xl:w-[50%] xl:py-[5rem] flex flex-col gap-[2rem]"
          >
            <div>
              <h1 className="font-['DM_Serif_Display'] text-[2.5rem] font-semibold">
                {data.heading}
              </h1>
              <p className="italic text-md text-default-800">{data.caption}</p>
            </div>
            <p className="text-justify text-default-500 text-[0.95rem] sm:text-md">
              {data.content}
            </p>

            <ButtonElement
              to={`../${data.link.dest}`}
              variant="bordered"
              label={`${data.link.text}`}
              radius="full"
              endContent={
                <FaArrowCircleRight className="mt-[0.2rem] ml-[1rem]" />
              }
              className="w-[9rem] p-0 gap-0 mt-[1rem]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
