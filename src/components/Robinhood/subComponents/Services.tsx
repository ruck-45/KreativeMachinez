// Local Files
import "./Services.css";
import ServicesCard from "./ServicesCard";
import InvestmentImg from "../../Investment/assets/RHinvestement.jpg";
import cryptoImg from "../../Crypto/assets/RHcrypto.jpg";
import optionsImg from "../../Options/assets/RHoption.jpg";
import RetirementImg from "../../Retirement/assets/RHretirement.jpg";

const services = [
  {
    heading: "Investment",
    caption:
      "Unlock the doors to financial growth through our advanced investment platform. Effortlessly navigate diverse markets, make informed decisions, and witness your wealth flourish. Commence your journey toward financial success today.",
    thumbnail: InvestmentImg,
  },
  {
    heading: "Crypto",
    caption:
      "Unleash the future of finance through our seamless cryptocurrency purchase service. Securely acquire digital assets, effortlessly navigate the world of blockchain, and invest in the decentralized economy with unwavering confidence.",
    thumbnail: cryptoImg,
  },
  {
    heading: "Options",
    caption:
      "Engage in the dynamic world of options trading, where investors can buy or sell the right to purchase or sell an asset at a predetermined price within a specified timeframe. This approach offers strategic opportunities for both risk management and profit, providing a versatile and calculated approach to financial markets.",
    thumbnail: optionsImg,
  },
  {
    heading: "Retirement",
    caption:
      "Attain financial freedom by unlocking the potential of our Individual Retirement Account (IRA). Safely invest for your future, leverage tax advantages, and customize your retirement strategy using our user-friendly platform. Embark on the journey to building wealth today!",
    thumbnail: RetirementImg,
  },
];

const Services = () => {
  return (
    <div className="service flex flex-col justify-center items-center px-[1rem] md:px-[2rem] lg:px-[3rem] py-[5rem] gap-[2rem]">
      <div className="font-[Roboto] text-[3rem]">Our Services</div>
      <div className="flex flex-col gap-[2rem]">
        {services.map((data, index) => (
          <ServicesCard
            key={index}
            heading={data.heading}
            caption={data.caption}
            thumbnail={data.thumbnail}
            flip={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
