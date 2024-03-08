// Dependencies
import { Card, CardHeader, CardBody, CardFooter, Button } from "@nextui-org/react";
import { FaArrowCircleRight } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";
import { FaThumbsUp } from "react-icons/fa";
import { TbBulbFilled } from "react-icons/tb";

// Local Files
import "./Benefit.css";
import BenefitSmallCard from "./BenefitSmallCard";
import MissionChip from "./MissionChip";

const smallCardData = [
  {
    heading: "Fast Process",
    caption: "Committed to delivering swift and efficient services.",
    logo: <IoRocketSharp className="text-[2rem]" />,
  },
  {
    heading: "Best Quality",
    caption: "Optimizing your financial journey for superiority.",
    logo: <FaThumbsUp className="text-[2rem]" />,
  },
  {
    heading: "Solution",
    caption: "Navigating your journey towards financial growth.",
    logo: <TbBulbFilled className="text-[2rem]" />,
  },
];

const Benefit = () => {
  return (
    <div className="py-[5rem] lg:px-[5rem] flex justify-center items-center benefit gap-[2rem]">
      <Card className="max-w-[400px] p-[2rem] dark bg-[#F5A524] shrink-0 benefitCard" isPressable>
        <CardHeader className="font-[Roboto] text-[3rem]">Our Strengths</CardHeader>
        <CardBody className="text-justify">
          Explore the dynamic realm of trading and investing with unwavering confidence. Whether you're a seasoned
          investor or just embarking on your financial journey, we provide the essential tools, resources, and expertise
          necessary to help you achieve your financial goals.
        </CardBody>
        <CardFooter>
          <Button variant="light" radius="full" endContent={<FaArrowCircleRight className="mt-[0.2rem]" />}>
            Learn More
          </Button>
        </CardFooter>
      </Card>

      <div className="flex gap-[2rem] skills">
        {smallCardData.map((data, index) => (
          <BenefitSmallCard key={index} heading={data.heading} caption={data.caption} logo={data.logo} />
        ))}
      </div>

      <div className="gap-[2rem] hidden skillsChip">
        {smallCardData.map((data, index) => (
          <MissionChip
            logo={data.logo}
            heading={data.heading}
            caption={data.caption}
            default={true}
            innerWrapperClassName="w-[16rem]"
          />
        ))}
      </div>
    </div>
  );
};

export default Benefit;
