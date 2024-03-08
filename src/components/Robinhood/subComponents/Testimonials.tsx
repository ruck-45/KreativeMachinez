// Dependencies
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Settings } from "react-slick";
import { IoIosInformationCircle } from "react-icons/io";
import { Button } from "@nextui-org/react";

const reviews = [
  {
    title: "Unlock a 3% enhancement on pension transfers before 4/30!",
    desc: "Unlock a 4% boost on your Roth IRA moves and 403(b) transitions through Robinhood Platinum. Immediate gains for a brighter financial future await!",
    thumbnail:
      "https://images.unsplash.com/photo-1553803103-63d066a73017?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    btn: "Begin with surplus",
  },
  {
    title: "Bring your resume along for an extra perk!",
    desc: "Unlock a 1% bonus by transferring your brokerage account to Robinhood before January 31, 2024. No limitations.",
    thumbnail:
      "https://images.unsplash.com/photo-1606190900290-2b0bd5b57553?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    btn: "Unlock your reward now!",
  },
  {
    title: "Earn returns on your investments with Robinhood Gold.",
    desc: "Unlock our unprecedented interest rate on idle funds, FDIC-insured up to $2.25M at affiliated banks. Enjoy a complimentary 30-day trial, followed by a nominal subscription fee.",
    thumbnail:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    btn: "Begin prospering",
  },
  {
    title: "Invest in your preferred stocks anytime",
    desc: "Unlock round-the-clock trading opportunities for your favorite stocks and ETFs, including TSLA, AMZN, AAPL, and more, with our 24/5 market access.",
    thumbnail:
      "https://images.unsplash.com/photo-1583752028088-91e3e9880b46?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    btn: "Join today!",
  },
];

const Testimonials = () => {
  let arrows = true;

  if (window.innerWidth <= 645) {
    arrows = false;
  }

  var settings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    className: "max-w-[65rem] mx-auto",
    focusOnSelect: true,
    arrows: arrows,
  };

  return (
    <div className="px-[1rem] sm:px-[3rem] py-[5rem] bg-[#191f22]">
      <h1 className="font-['Roboto'] text-[3rem] text-center mx-auto mb-[2rem] font-bold text-white">
        Explore our newest
      </h1>

      <Slider {...settings}>
        {reviews.map((data, index) => (
          <div className="px-[1rem]">
            <div
              className="h-[20rem] bg-no-repeat bg-cover bg-center flex flex-col p-[3rem] justify-between rounded-t-3xl"
              style={{
                backgroundImage: `url(${data.thumbnail})`,
              }}
            ></div>
            <div className="bg-white p-[2rem] flex gap-[2rem] rounded-b-3xl">
              <div className="w-[0.4rem] bg-[#191f22] rounded shrink-0"></div>
              <div className="flex flex-col gap-[1rem]">
                <div>
                  <h1 className="text-3xl font-bold">{data.title}</h1>
                  <p className="mt-[0.2rem] flex gap-[0.5rem]">
                    <IoIosInformationCircle className="mt-[0.3rem]" /> Limitations and terms apply
                  </p>
                </div>
                <p className="italic">{data.desc}</p>
                <Button color="warning" variant="shadow" radius="none" className="self-start">
                  {data.btn}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
