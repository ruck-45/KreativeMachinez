import { FaPhone } from "react-icons/fa6";
import { updateTab } from "../../store/curTabSlice";
import { scrollTop } from "../../utils/controllers";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Image, Input } from "@nextui-org/react";
import RobinNav from "./subComponents/RobinNav";
import { GrSend } from "react-icons/gr";
const Robinhood = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  dispatch(updateTab("Robinhood"));
  scrollTop();
  return (
    <>
      <RobinNav />
      <div className="flex flex-col items-center text-center justify-center p-[1rem] md:p-[5rem] bg-white gap-y-[1rem] md:gap-y-[2rem]">
        <p className="text-2xl mt-[3rem] md:mt-0 text-default-500">PRESENT YOUR SERVICE</p>
        <h1 className="font-bold text-5xl md:text-5xl">
          Make landing page <br />
          fast and easily
        </h1>
        <p className="text-2xl mt-[3rem] md:mt-0 text-default-500">
          Create custom landing pages with shades <br />
          that convert more visitors than any website
        </p>
        <div className="flex flex-col lg:flex-row gap-[2rem]">
          <Image
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={600}
            radius="none"
          />
          <Image
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={600}
            radius="none"
          />
        </div>
        <a className="flex gap-[1rem]" href="tel:+91-9205453309">
          <Button
            startContent={<FaPhone />}
            variant="solid"
            color="warning"
            className="text-white hover:scale-110 bg-black"
            radius="sm"
            size="lg"
          >
            Contact Us Today +91-9205453309
          </Button>
        </a>
        <div className="flex sm:flex-row flex-col items-center justify-between py-[1rem] gap-[1rem]">
          <Input
            variant="bordered"
            radius="none"
            isRequired
            type=""
            label="Your Email"
            className="w-[20rem] md:w-[25rem]"
          />
          <Button
            size="lg"
            color="secondary"
            startContent={<GrSend className="text-3xl" />}
            onClick={() => navigate("/Home")}
          >
            Subscribe
          </Button>
        </div>
      </div>
    </>
  );
};

export default Robinhood;
