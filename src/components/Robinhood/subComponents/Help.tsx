// Dependencies
import { Image, Button } from "@nextui-org/react";
import { FaArrowCircleRight } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import { Divider } from "@nextui-org/react";

const data = [
  {
    title: "Diversify your investments from as little as $1 and watch your portfolio grow.",
    desc: "Explore the world of stocks, options, and ETFs at your own rhythm, all without commission fees.",
    thumbnail:
      "https://images.unsplash.com/photo-1580634240015-a9f56295699f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Explore the crypto world fee-free, no commission hurdles in sight.",
    desc: "Maximize your investment potential with minimal funds begin with just $1. Purchase, trade, and move various cryptocurrencies like BTC, DOGE, ETH, SHIB, and beyond.",
    thumbnail:
      "https://images.unsplash.com/photo-1622632169740-85c306c57aa2?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Invest Swipe: Grow your wealth with every transaction.",
    desc: "Introducing our latest innovation: The WealthBuilder Debit Card—where spending becomes investing, effortlessly.",
    thumbnail:
      "https://images.unsplash.com/photo-1589666564459-93cdd3ab856a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Help = () => {
  return (
    <div>
      <Divider className="py-[2rem]" />
      {data.map((d, index) => (
        <>
          <div className={`bg-[white] flex ${index % 2 === 0 ? "flex-row-reverse" : ""}`}>
            <Image
              isBlurred
              src={d.thumbnail}
              alt="Help"
              width={500}
              radius="none"
              className="border-[1rem] hidden lg:block"
            />
            <div className="flex justify-center items-center grow px-[2rem] sm:px-[3rem] md:px-[5rem] py-[5rem]">
              <div className="max-w-[50rem] flex flex-col items-start gap-[1.5rem]">
                <h1 className="font-['Roboto'] font-bold text-[3rem] text-[#191f22] leading-[3.5rem] max-w-[25rem]">
                  {d.title}
                </h1>
                <p className="max-w-[25rem]">{d.desc}</p>

                <p className="mt-[0.2rem] flex gap-[0.5rem]">
                  <IoIosInformationCircle className="mt-[0.3rem]" /> Limitations and terms apply
                </p>

                <Button
                  variant="shadow"
                  color="warning"
                  radius="none"
                  endContent={<FaArrowCircleRight className="mt-[0.2rem]" />}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          <Divider className="py-[2rem]" />
        </>
      ))}
      <Button
        className="w-full py-[3rem] px-0 font-semibold  text-[1rem] md:text-[1.3rem]"
        radius="none"
        color="warning"
      >
        <span>Searching for our prior Cash Management initiative? Click here</span>
      </Button>
    </div>
  );
};

export default Help;
