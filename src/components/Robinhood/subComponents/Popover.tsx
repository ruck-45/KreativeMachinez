// Dependencies
import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure, Image } from "@nextui-org/react";
import { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaPhone } from "react-icons/fa6";

// Local Files
import "./Popover.css";
import { updatePopoverStatus } from "../../../store/popoverStatusSlice";
import { RootState } from "../../../store/store";
import logo from "../../../globalAssets/logo.svg";

const popbtns = ["Investment", "Crypto", "IRA", "Trading"];

const Popover = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const PopoverButton = useRef<HTMLButtonElement>(document.createElement("button"));
  const popoverStatus = useSelector((state: RootState) => state.popoverStatus.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!popoverStatus) {
      setTimeout(() => {
        PopoverButton.current.click();
        dispatch(updatePopoverStatus(true));
      }, 500);
    }
  }, []);

  return (
    <>
      <Button onPress={onOpen} className="hidden" ref={PopoverButton}>
        Open Modal
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="sm:hidden zscale" placement="center" size="full">
        <a href="tel:+1 (888) 891-7176">
          <ModalContent className="min-h-[95vh] max-h-[95vh]">
            <ModalHeader className="flex items-center gap-[0.4rem]">
              <Button isIconOnly variant="solid" radius="full" color="success" className="text-[1rem]">
                <FaPhone />
              </Button>
              <p>Contact Us</p>
            </ModalHeader>
            <ModalBody className="flex flex-col justify-evenly items-center  py-[1rem]">
              <h1 className="text-[1.3rem] leading-[2.2rem] text-center font-bold">24/7 Investment & Support</h1>

              <div
                className="w-[6.5rem] h-[6.5rem] rounded-full bg-no-repeat bg-center bg-cover border-black border-[0.2rem]"
                style={{
                  backgroundImage:
                    "url(https://img.freepik.com/free-photo/smiling-young-customer-service-girl-with-headset-her-workplace_231208-9605.jpg?w=996&t=st=1708341838~exp=1708342438~hmac=4e7dabc833ffad74b1b449865080904b09b53e6f86c61db151473f48a75d477f)",
                }}
              ></div>
              <h1 className="text-[1rem] leading-[2.2rem] text-center font-semibold">Call & Get Investment Deals</h1>

              <div className="grid grid-cols-2 gap-[0.5rem]">
                {popbtns.map((data, index) => (
                  <Button
                    className="text-[1rem] font-bold font-serif border text-white self-center p-[1rem]"
                    radius="full"
                    key={index}
                    color="success"
                  >
                    {data}
                  </Button>
                ))}
              </div>

              <h1 className="text-[1.3rem] leading-[2.2rem] text-center font-bold">24/7 Helpline Available</h1>
              <h1 className="text-[1rem] text-center leading-[1.2rem]">
                Enter Your Number & We'll call you back within 5 seconds
              </h1>
            </ModalBody>
            <Button
              className="text-[1rem] font-bold border text-white self-center py-[1.5rem] w-full"
              color="success"
              startContent={<FaPhone />}
            >
              +1 (888) 891-7176
            </Button>
          </ModalContent>
        </a>
      </Modal>
    </>
  );
};

export default Popover;
