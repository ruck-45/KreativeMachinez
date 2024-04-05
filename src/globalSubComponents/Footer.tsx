// Dependencies
import { Divider, Image, Button, Listbox, ListboxItem } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { SiFacebook } from "react-icons/si";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { FaSquareXTwitter, FaPhone } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

// Local Files
import "./Footer.css";
import logo from "../globalAssets/logo.svg";

const contactInfo = [
  {
    name: "Phone",
    value: "+91-9205453309",
    icon: <FaPhone />,
  },
  {
    name: "Email",
    value: "support@hmsfreedom.com",
    icon: <MdEmail />,
  },
  {
    name: "Address",
    value: "Unit-544, McCabe Street, Port Charlotte, Florida, USA",
    icon: <IoLocation />,
  },
];

const footerLinks = [
  {
    type: "Navigation",
    data: [
      { key: "home", value: "Home", link: "Home", state: {} },
      { key: "services", value: "Services", link: "Services", state: {} },
      { key: "about", value: "About", link: "About", state: {} },
      { key: "contact", value: "Contact", link: "Contact", state: {} },
      { key: "pricing", value: "Pricing", link: "Pricing", state: {} },
    ],
  },
  {
    type: "Quick Links",
    data: [
      { key: "webdev", value: "Website Development", link: "Services/Individual", state: { id: 0 } },
      { key: "seo", value: "Search Engine Optimization", link: "Services/Individual", state: { id: 1 } },
      { key: "socialmarketing", value: "Social Media Marketing", link: "Services/Individual", state: { id: 2 } },
      { key: "webanalytics", value: "Web Analytics", link: "Services/Individual", state: { id: 3 } },
      { key: "graphicdesign", value: "Graphics Design", link: "Services/Individual", state: { id: 4 } },
    ],
  },
];

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center py-[6rem] gap-[2rem] text-white footer">
      <div className="flex gap-[4rem] upperFooter">
        <div className="max-w-[20rem] flex flex-col gap-[2rem] companySection">
          <Image width={150} src={logo} alt="logo" className="bg-white p-[1rem]" />
          <p className="text-justify text-sm">
            Kreative Machinez is a unit of <span className="font-bold">HMS Freedom LLC</span>, we're a lively digital
            marketing agency that's all about crafting innovative solutions for businesses like yours, helping you build
            a robust online presence that truly stands out. Driven by a ferocious hunger to create tangible impact for
            your brands, we work with in-house specialists, industry partners and technology leaders to push the
            boundaries of creativity and put your brand ahead of the competition.
          </p>

          <Link to="/Privacy" className="text-blue-400">
            Privacy & Policy
          </Link>
          <div className="flex text-[1.8rem] gap-[1rem]">
            <a href="https://www.facebook.com/profile.php?id=61554936182745" target="_blank" rel="noreferrer">
              <SiFacebook className="mt-[0.4rem] cursor-pointer hover:scale-105" />
            </a>
            <a href="https://twitter.com/Kreativemachinz" target="_blank" rel="noreferrer">
              <FaSquareXTwitter className="mt-[0.4rem] cursor-pointer hover:scale-105" />
            </a>
            <a href="https://www.youtube.com/@KreativeMachinez-23" target="_blank" rel="noreferrer">
              <TbBrandYoutubeFilled className="mt-[0.4rem] cursor-pointer hover:scale-105" />
            </a>
            <a href="https://www.instagram.com/kreativemachinez23/" target="_blank" rel="noreferrer">
              <AiFillInstagram className="mt-[0.4rem] cursor-pointer hover:scale-105" />
            </a>
            <a href="https://www.pinterest.com/KreativeMachinez23/" target="_blank" rel="noreferrer">
              <FaPinterest className="mt-[0.4rem] cursor-pointer hover:scale-105" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-[1.2rem]">
          <div className="flex gap-[2rem] w-full justify-between contactInfo">
            {contactInfo.map((data, index) => (
              <div key={index} className="flex items-center  gap-[1rem]">
                <Button isIconOnly variant="solid" radius="full" className="w-[3rem] h-[3rem] text-[1.5rem]">
                  {data.icon}
                </Button>
                <div className="font-['poppins']">
                  <h1 className="text-[#F5A524] font-bold text-[1.2rem]">{data.name}</h1>
                  <p className="text-sm max-w-[15rem]">{data.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-[100%] upperDivider">
            <Divider className="dark" />
            <Divider className="dark" />
          </div>

          <div className="flex justify-between w-full footerLinks">
            {footerLinks.map((ele, index) => (
              <div key={index} className="flex flex-col gap-[1rem]">
                <p className="font-['poppins'] text-[#F5A524] font-bold text-[1.1rem]">{ele.type}</p>
                <Listbox items={ele.data} aria-label="navigation" className="dark" variant="light">
                  {(item) => (
                    <ListboxItem key={item.key} className="px-[0]" textValue={item.key}>
                      <Link to={`../${item.link}`} state={item.state}>
                        {item.value}
                      </Link>
                    </ListboxItem>
                  )}
                </Listbox>
              </div>
            ))}

            <div className="flex flex-col gap-[1rem] max-w-[13rem]">
              <p className="font-['poppins'] text-[#F5A524] font-bold text-[1.1rem]">Work Hours</p>
              <p className="text-justify text-sm">
                Feel free to reach out to us during our working hours for all your digital marketing needs. We're here
                to elevate your online presence and drive success for your business.
              </p>
              <ul className="text-sm">
                <li>Mon - Fri : 09:00 - 18:00 (GMT)</li>
                <li>Sat: 10:00 - 16:00 (GMT)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%]">
        <Divider className="dark" />
        <Divider className="dark" />
        <Divider className="dark" />
      </div>

      <p>© 2023 Kreative Machinez • All Rights Reserved</p>
    </div>
  );
};

export default Footer;
