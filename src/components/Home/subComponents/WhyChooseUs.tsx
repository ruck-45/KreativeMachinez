// Dependencies
import { FaArrowCircleRight } from "react-icons/fa";

// Local Files
import ButtonElement from "../../../globalElements/ButtonElement";

const benefitData = [
  {
    heading: "Client-Centric",
    caption: "‘Standing by clients’",
    content:
      "At the heart of what we do is a blend of digital expertise, creative flair, coupled with innovative tech for each project. With a decade of experience across a wide spectrum of categories, our commitment is to bring results that truly distinguish your brand in an ever-evolving digital landscape. Through a mix of creativity, transparency, and innovation, our goal is to forge a partnership that will help your brand achieve wonders.",
    link: { text: "About Us", dest: "../About" },
  },
  {
    heading: "Digital Pioneers",
    caption: "‘Nurturing brands in the digital landscape’",
    content:
      "We provide a full suite of digital marketing services crafted as per your brand and for your audience. From strategic planning to creating captivating content, managing your social media presence, search engine optimization, and diving deep into performance analytics – it's all about building your brand. Count on us to not only navigate the ever-changing digital landscape but to also make sure your brand not only stands out among the competition but thrives in this dynamic world of online marketing.",
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
          <div key={index} className="xl:w-[50%] xl:py-[5rem] flex flex-col gap-[2rem]">
            <div>
              <h1 className="font-['DM_Serif_Display'] text-[2.5rem] font-semibold">{data.heading}</h1>
              <p className="italic text-md text-default-800">{data.caption}</p>
            </div>
            <p className="text-justify text-default-500 text-[0.95rem] sm:text-md">{data.content}</p>

            <ButtonElement
              to={`../${data.link.dest}`}
              variant="bordered"
              label={`${data.link.text}`}
              radius="full"
              endContent={<FaArrowCircleRight className="mt-[0.2rem] ml-[1rem]" />}
              className="w-[9rem] p-0 gap-0 mt-[1rem]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
