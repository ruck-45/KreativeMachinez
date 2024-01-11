// Dependencies
import { useLocation } from "react-router-dom";
import "./service.css"
// Local Files
import serviceData from "../assets/Services.json";
import { scrollTop } from "../../../utils/controllers";


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
      <div className="grid xl:grid-cols-2">
        <div className="px-[2rem] sm:px-[3rem] md:px-[5rem] lg:px-[8rem] py-[1rem] xl:p-[5rem] flex flex-col gap-[3rem]">
          <span className="font-['lilita_one']  text-6xl text-[#41424C]">{data?.title.heading}</span>
          <div className="flex flex-col gap-[1rem]">
            <p className="text-black">{data?.sub}</p>
          </div>
        </div>
        <div
          className={`${data?.imgClass} mx-[1rem] md:mx-[3rem] xl:mx-[0.5rem] w-[90%] h-[20rem] rounded-lg xl:rounded-full xl:h-[100%]`}
        ></div>
      </div>
      <h1 className="font-['lilita_one'] text-[2.3rem] text-center lg:text-left items-center gap-[2rem] w-full px-[1rem] sm:px-[2rem] md:px-[3rem] lg:px-[4rem] xl:px-[5rem]">
        <span className="text-[#F5A524]">{data?.title.special}</span>
        {data?.title.regular}
      </h1>
      <div className="flex flex-col gap-[1rem] px-[1rem] sm:px-[2rem] md:px-[3rem] lg:px-[4rem] xl:px-[5rem]">
        {data?.content.map((item, index) => (
          <div key={index} className="flex flex-col gap-[0.5rem]">
            {item.heading ? (
              <h1 className="font-['DM_Serif_Display'] text-[1.3rem] font-semibold text-default-800">
                {String(index + 1) + ". " + item.heading}
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
