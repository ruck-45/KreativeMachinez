// Dependencies
import { Image } from "@nextui-org/react";
import work from "../assets/q2.jpg";

const AboutWork = () => {
  return (
    <div className="bg-[#e9ecef] flex flex-col items-center lg:flex-row justify-evenly px-[3rem] md:px-[5rem] lg:px-[8rem] py-[5rem] gap-[5rem]">
      <Image width={350} src={work} className="m-5 order-last" isBlurred />
      <div className="flex flex-col gap-[1rem] order-first lg:order-last">
        <h1 className="font-['DM_Serif_Display'] text-[2.5rem] font-semibold">What We Do ?</h1>
        <p className="italic text-md text-default-800">" Crafting Success, Fueled by Passion and Expertise! "</p>
        <p className="text-justify text-default-500 text-[0.95rem] sm:text-md lg:max-w-[30rem]">
          At Kreative Machinez, we are not just a digital marketing agency; we are your partners in crafting innovative
          solutions for a commanding online presence. Specializing in diverse digital marketing solutions from SEO and
          website creation to web analytics and social media marketing, we tailor strategies to suit your unique needs.
          Our dedicated support extends across various industries, including education, pharmacy, photography, health,
          technology, and ecommerce, among others. With a dynamic approach and a commitment to excellence, we propel
          businesses towards digital success, ensuring they thrive in today's competitive landscape
        </p>
      </div>
    </div>
  );
};

export default AboutWork;
