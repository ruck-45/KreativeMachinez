// Dependencies
import { useLocation } from "react-router-dom";
import { Image } from "@nextui-org/react";

// Local Files
import serviceData from "../assets/Services.json";
import webdev from "../assets/webdev.svg";
import seo from "../assets/seo.svg";
import socialmedia from "../assets/socialmedia.svg";
import webanalytics from "../assets/webanalytics.svg";
import graphics from "../assets/graphics.svg";
import email from "../assets/email.svg";
import { scrollTop } from "../../../utils/controllers";

const thumbnails = [webdev, seo, socialmedia, webanalytics, graphics, email];

const IndividualServices = () => {
  let id = 0;
  const location = useLocation();
  if (location.state) {
    id = location.state.id;
  }

  const data = serviceData.find((item) => item.id === id);

  scrollTop();

  return (
    <div className="bg-[#e9ecef] px-[1rem] sm:px-[2rem] md:px-[3rem] lg:px-[4rem] xl:px-[5rem] py-[5rem] flex flex-col items-center gap-[2rem]">
      <div className="flex flex-col items-center gap-[2rem] w-full px-[1rem] sm:px-[2rem] md:px-[3rem] lg:px-[4rem] xl:px-[5rem]">
        <Image width={800} src={thumbnails[id]} />
        <h1 className="font-['lilita_one'] text-[2.3rem] text-center lg:text-left">
          <span className="text-[#F5A524]">{data?.title.special}</span>
          {data?.title.regular}
        </h1>
      </div>
      <div className="flex flex-col gap-[1rem] px-[1rem] sm:px-[2rem] md:px-[3rem] lg:px-[4rem] xl:px-[5rem]">
        {data?.content.map((item, index) => (
          <div key={index} className="flex flex-col gap-[0.5rem]">
            {item.heading ? (
              <h1 className="font-['DM_Serif_Display'] text-[1.3rem] font-semibold text-default-800">
                {String(index) + ". " + item.heading}
              </h1>
            ) : null}
            <p className="text-justify text-default-500 text-[0.95rem] sm:text-md">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndividualServices;
