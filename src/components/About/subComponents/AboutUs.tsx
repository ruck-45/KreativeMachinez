// Dependencies
import { Image, Divider } from "@nextui-org/react";
import who from "../assets/q1.jpg";

const AboutUs = () => {
  return (
    <div className="bg-[#e9ecef] flex flex-col">
      <div className="bg-[#e9ecef] flex flex-col items-center lg:flex-row justify-evenly px-[3rem] md:px-[5rem] lg:px-[8rem] py-[5rem] gap-[3rem]">
        <div className="flex flex-col gap-[1rem]">
          <h1 className="font-['DM_Serif_Display'] text-[2.5rem] font-semibold">Who We Are ?</h1>
          <p className="italic text-md text-default-800">“Innovators in the Digital World”</p>
          <p className="text-justify text-default-500 text-[0.95rem] sm:text-md lg:max-w-[30rem]">
            Kreative Machinez embodies a dynamic collective of digital enthusiasts, strategists, and creatives bound by
            a fervor for innovation. Our diverse skill set, coupled with an unwavering commitment to excellence, propels
            us to convert ideas into profound digital experiences. Rooted in collaboration, our culture cultivates an
            environment where each individual's distinctive talents harmonize to drive the collective success of our
            clients. From conceptualization to execution, we thrive on infusing ingenuity into every facet of our work,
            ensuring that our clients not only meet but exceed their digital objectives in a rapidly evolving landscape.
          </p>
        </div>
        <Image width={350} src={who} className="m-5" isBlurred />
      </div>
      <Divider className="max-w-[28rem] sm:max-w-[36rem] md:max-w-[47rem] lg:max-w-[55rem] self-center" />
    </div>
  );
};

export default AboutUs;
