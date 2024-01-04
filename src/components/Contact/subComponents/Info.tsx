// Dependencies
import { Divider } from "@nextui-org/react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// Local Files
import MissionChip from "../../../globalSubComponents/MissionChip";

const moral = [
  {
    heading: "Our Values",
    content:
      "At Kreative Machinez, our strength lies in our diverse team, each contributing to our success. We embrace four core values that shape our work culture: Collaborative Innovation, Customer-Centricity, Continuous Growth, and Creative Excellence. These values define who we are and guide us in providing exceptional digital marketing solutions. Join us in creating success through collaboration and creativity!",
  },
  {
    heading: "Our Environment",
    content:
      "Step into our office, and you'll feel the dynamic energy. At Kreative Machinez, we believe in more than just work, we're committed to giving back to our community. Our 'Creatives' are encouraged to share ideas and suggestions, functioning like the cogs of a creative machine, ensuring a smooth and efficient working environment.",
  },
];

const contactChips = [
  {
    logo: <FaPhoneAlt className="text-[1.5rem]" />,
    heading: "Call Us @ ",
    caption: "+1 (845) 687-3270",
  },
  {
    logo: <FaLocationDot className="text-[1.5rem]" />,
    heading: "Visit Us @ ",
    caption: "Unit-544, McCabe Street, Florida, USA",
  },
  {
    logo: <MdEmail className="text-[1.5rem]" />,
    heading: "Mail Us @ ",
    caption: "support@hmsfreedom.com",
  },
];

const Info = () => {
  return (
    <div className="flex flex-col lg:flex-row px-[2rem] sm:px-[3rem] lg:px-[5rem] py-[5rem] gap-[2rem] lg:gap-[3rem] xl:gap-[4rem] bg-[#e9ecef] justify-center">
      <div className="flex flex-col gap-[2rem] max-w-[40rem] mx-auto lg:mx-0">
        {moral.map((data, index) => (
          <div className="flex flex-col gap-[1rem]">
            <h1 className="font-['DM_Serif_Display'] text-[2.5rem] font-semibold">{data.heading}</h1>
            <p className="text-justify text-default-500 text-[0.95rem] sm:text-md">{data.content}</p>
          </div>
        ))}
      </div>
      <div>
        <Divider orientation="vertical" className="h-full" />
      </div>
      <div className="flex flex-col justify-center gap-[1rem] mx-auto lg:mx-0">
        {contactChips.map((data, index) => (
          <MissionChip
            key={index}
            logo={data.logo}
            heading={data.heading}
            caption={data.caption}
            headingClass="text-[1.25rem] sm:text-[1.6rem] font-['lilita_one']"
            innerWrapperClass="flex flex-col sm:flex-row sm:items-center gap-[0.1rem] sm:gap-[0.5rem] text-default-800"
            captionClass="sm:text-lg"
            chipvarient="flat"
            buttonvarient="shadow"
            chipcolor="warning"
            buttoncolor="warning"
          />
        ))}
      </div>
    </div>
  );
};

export default Info;
