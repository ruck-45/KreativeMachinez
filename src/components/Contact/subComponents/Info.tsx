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
      "At Kreative Machinez, our strength lies in the diverse talents within our team. Each person contributes uniquely, creating a collective force driving us to shared success. We embrace diversity as our core, championing values like Inspiring Innovation, Customer Dedication, Unceasing Growth, and Unbridled Creative Excellence. These values shape our culture, defining our identity and guiding us to deliver unmatched digital marketing solutions.",
  },
  {
    heading: "Our Culture",
    content:
      "Individuality. Our workspace is more than an office; it's a vibrant ecosystem where diverse talents converge to create something extraordinary. Here, we embrace the spirit of continual growth, fostering an environment where each team member contributes their unique perspective to the collective tapestry of success. Creativity is not just encouraged; it's a way of life. We believe in nurturing a culture that values ideas, fuels inspiration, and propels us towards unparalleled achievements.",
  },
];

const contactChips = [
  {
    logo: <FaPhoneAlt className="text-[1.5rem]" />,
    heading: "Call Us @ ",
    caption: "+91-9205453309",
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
