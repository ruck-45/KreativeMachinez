// Dependencies
import { Button } from "@nextui-org/react";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";

const QuickContacts = () => {
  return (
    <div className="fixed top-[50%] right-[1rem] z-[100] flex flex-col gap-[0.5rem] ">
      <Button isIconOnly color="danger">
        <a href="tel:+91-9205453309">
          <FaPhoneFlip className="text-4xl text-white p-2 rounded-xl" />
        </a>
      </Button>
      <Button isIconOnly color="success">
        <a href="//api.whatsapp.com/send?phone=18456873270">
          <RiWhatsappFill className="text-4xl text-white p-2 rounded-xl" />
        </a>
      </Button>
      <Button isIconOnly color="secondary" onClick={() => (window.location.href = "mailto:support@hmsfreedom.com")}>
        <MdEmail className="text-5xl text-white p-2 rounded-xl" />
      </Button>
    </div>
  );
};

export default QuickContacts;
