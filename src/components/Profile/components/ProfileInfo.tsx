// Dependencies
import { Chip, Listbox, ListboxItem, Textarea } from "@nextui-org/react";
import { useState } from "react";
import axios from "axios";
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import toast, { Toaster, ToastPosition } from "react-hot-toast";

// Local Files
import "./ProfileInfo.css";
import profilepic from "../../../globalAssets/profilepic.jpg";
import { getCookie, setCookie } from "../../../utils/cookies";

const toastSetting: {
  position: ToastPosition;
} = { position: "top-center" };

const successToast = (message: string): void => {
  toast.success(message, toastSetting);
};
const errorToast = (message: string): void => {
  toast.error(message, toastSetting);
};

const ProfileInfo = () => {
  let apiUrl = process.env.REACT_APP_API_URL;
  if (process.env.NODE_ENV === "development") {
    apiUrl = process.env.REACT_APP_DEV_API_URL;
  }

  const token = getCookie("token");
  const userEmail = getCookie("email");
  const username = getCookie("username");
  const expiration = getCookie("expiration");

  const about = getCookie("about") || "Share a bit more about yourself!! We'd love to get to know you Better";
  const profession = getCookie("profession") || "your profession";
  const address = getCookie("address") || "please provide us with your Address";
  const phone = getCookie("phone") || "None";
  const plan = getCookie("plan") || "None";

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [formData, setFormData] = useState({ phone, address, about, profession });
  const [renderer, setRenderer] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${apiUrl}/users/profile`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data.success) {
        const profileResponse = await axios.get(`${apiUrl}/users/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const cookieOptions = { expires: expiration ? parseInt(expiration) : 1 };

        setCookie("about", profileResponse.data.payload.about, cookieOptions);
        setCookie("profession", profileResponse.data.payload.profession, cookieOptions);
        setCookie("address", profileResponse.data.payload.address, cookieOptions);
        setCookie("phone", profileResponse.data.payload.phone, cookieOptions);
        setCookie("plan", profileResponse.data.payload.plan, cookieOptions);

        setRenderer((prev) => !prev);

        successToast("Profile updated successfully");
      } else {
        errorToast("Couldn't update profile");
      }
    } catch (error) {
      errorToast("Couldn't update profile");
    }
  };

  return (
    <div className="flex justify-between gap-[2rem] items-center UserStat">
      <div className="flex md:gap-[2rem] items-center md:justify-evenly w-full flex-col md:flex-row">
        <div
          className="h-[22rem] w-[22rem] rounded-3xl profilePic"
          style={{ backgroundImage: `url(${profilepic})` }}
        ></div>

        <div className="max-w-[350px] flex flex-col gap-[1rem] min-w-[300px]">
          <div className="flex gap-3">
            <div className="flex flex-col">
              <Chip color="success" variant="dot" className="my-4">
                Online
              </Chip>
              <p className="text-md font-bold">{username}</p>
              <p className="flex items-center text-small text-default-500">{profession}</p>
            </div>
          </div>
          <div>
            <p className="text-md font-bold">
              <span style={{ display: "flex", alignItems: "center" }}>About </span>
            </p>
            <p className="text-default-500 text-small">{about}</p>
          </div>
          <div className="">
            <p className="text-md font-bold">
              <span style={{ display: "flex", alignItems: "center" }}>Address</span>
            </p>
            <p className="text-default-500 text-small">{address}</p>
          </div>
        </div>
      </div>
      <Listbox aria-label="Actions" className="max-w-[350px] bg-[#28292b] rounded-3xl p-[2rem] dark">
        <ListboxItem showDivider key="Username" textValue="username">
          <div className="flex justify-between h-[3.3rem] items-center">
            <p className="flex items-center text-white font-semibold">Username</p>
            <p className="text-[#F31260] font-bold">{username}</p>
          </div>
        </ListboxItem>
        <ListboxItem showDivider key="Email" textValue="email">
          <div className="flex justify-between h-[3.3rem] items-center">
            <p className="flex items-center text-white font-semibold">Email</p>
            <p className="text-[#F31260] font-bold">{userEmail}</p>
          </div>
        </ListboxItem>
        <ListboxItem showDivider key="Phone" textValue="phone">
          <div className="flex justify-between h-[3.3rem] items-center">
            <p className="flex items-center text-white font-semibold">Phone</p>
            <p className="text-[#F31260] font-bold">{phone}</p>
          </div>
        </ListboxItem>
        <ListboxItem key="Package" textValue="package">
          <div className="flex justify-between h-[3.3rem] items-center">
            <p className="text-white font-semibold">Package</p>
            <p className="text-[#F31260] font-bold">{plan}</p>
          </div>
        </ListboxItem>
      </Listbox>

      <Button
        onPress={onOpen}
        className="absolute top-12 right-0 m-4 mt-[3.5rem] mr-[7rem]"
        variant="shadow"
        color="warning"
        radius="full"
      >
        Edit
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Update Profile</ModalHeader>
              <ModalBody>
                <form>
                  <Input
                    type="text"
                    label="Profession"
                    name="profession"
                    value={formData.profession}
                    onChange={handleChange}
                    className="mt-2"
                  />
                  <Input
                    type="text"
                    label="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2"
                  />
                  <Input
                    type="text"
                    label="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="mt-2"
                  />
                  <Textarea
                    label="About"
                    name="about"
                    value={formData.about}
                    onChange={handleChange}
                    className="mt-2"
                  />
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="ghost" onPress={onClose} onClick={handleSubmit} radius="full">
                  Update
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Toaster />
    </div>
  );
};

export default ProfileInfo;
