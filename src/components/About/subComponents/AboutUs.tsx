// Dependencies
import { Image, Divider } from "@nextui-org/react";
import who from "../assets/q1.jpg";

const AboutUs = () => {
  return (
    <div className="bg-[#e9ecef] flex flex-col">
      <div className="bg-[#e9ecef] flex flex-col items-center lg:flex-row justify-evenly px-[3rem] md:px-[5rem] lg:px-[8rem] py-[5rem] gap-[3rem]">
        <div className="flex flex-col gap-[1rem]">
          <h1 className="font-['DM_Serif_Display'] text-[2.5rem] font-semibold">Who We Are ?</h1>
          <p className="italic text-md text-default-800">" We Care for your Brand as Passionately as you do. "</p>
          <p className="text-justify text-default-500 text-[0.95rem] sm:text-md lg:max-w-[30rem]">
            Welcome to Kreative Machinez, a dynamic collective of designers, web developers, engineers, analysts,
            marketing specialists, and more. As an enthusiastic team, we specialize in digital marketing, driven by a
            singular goal : your benefit and satisfaction. Our diverse talents converge to create innovative solutions
            that elevate your brand's digital presence. At Kreative Machinez, we are not just a team; we are your
            dedicated partners in success, committed to bringing creativity, expertise, and satisfaction to every
            project.
          </p>
        </div>
        <Image width={350} src={who} className="m-5" isBlurred/>
      </div>
      <Divider className="max-w-[28rem] sm:max-w-[36rem] md:max-w-[47rem] lg:max-w-[55rem] self-center" />
    </div>
  );
};

export default AboutUs;
