// Dependencies
import { Image } from "@nextui-org/react";
import work from "../assets/q2.jpg";

const AboutWork = () => {
  return (
    <div className="bg-[#e9ecef] flex flex-col items-center lg:flex-row justify-evenly px-[3rem] md:px-[5rem] lg:px-[8rem] py-[5rem] gap-[5rem]">
      <Image width={350} src={work} className="m-5 order-last" isBlurred />
      <div className="flex flex-col gap-[1rem] order-first lg:order-last">
        <h1 className="font-['DM_Serif_Display'] text-[2.5rem] font-semibold">What We Do ?</h1>
        <p className="italic text-md text-default-800">" “Where Ideas Transform into Solutions” "</p>
        <p className="text-justify text-default-500 text-[0.95rem] sm:text-md lg:max-w-[30rem]">
          In the realm of digital solutions, we specialize in crafting bespoke strategies that harness the power of
          innovation, creativity, and technology. From SEO and social media management to content creation and beyond,
          our comprehensive services are tailored to amplify your brand's online presence. We navigate the ever-evolving
          digital landscape, leveraging the latest technologies to ensure your brand remains at the forefront of
          industry trends. At Kreative Machinez, we do not just provide services; we architect success stories,
          seamlessly blending creativity and technology for unparalleled digital excellence
        </p>
      </div>
    </div>
  );
};

export default AboutWork;
