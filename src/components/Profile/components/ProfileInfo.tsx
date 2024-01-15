// Dependencies
import { Chip, Listbox, ListboxItem, Textarea } from "@nextui-org/react";
import { useState,  } from "react";
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
// Local Files
import "./ProfileInfo.css";
import profilepic from "../../../globalAssets/profilepic.jpg";
import { getCookie } from "../../../cookies/cookies";

const ProfileInfo = () => {
  const token = getCookie("token")
  const userEmail = getCookie("email")
  const getProfile = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Update successful:", response.data);
    } catch (error) {
      console.error("Update failed:", error);
    }
  };
  getProfile()
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [formData, setFormData] = useState({
    phone: "", 
    address: "",
    about: "",
    profession: "", 
    token: token
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.put(`${process.env.REACT_APP_API_URL}/profile`, formData);
      console.log("Update successful:", response.data);
    } catch (error) {
      console.error("Update failed:", error);
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
              <p className="text-md font-bold">username</p>
              <p className="flex items-center text-small text-default-500">Your profession </p>
            </div>
          </div>
          <div>
            <p className="text-md font-bold">
              <span style={{ display: "flex", alignItems: "center" }}>About </span>
            </p>
            <p className="text-default-500 text-small">
              Share a bit more about yourself!! Whether it's your hobbies, interests, or experiences, we'd love to get
              to know you better and understand what makes you unique.
            </p>
          </div>
          <div className="">
            <p className="text-md font-bold">
              <span style={{ display: "flex", alignItems: "center" }}>Address </span>
            </p>
            <p className="text-default-500 text-small">Please Provide us with your address</p>
          </div>
        </div>
      </div>
      <Button
        onPress={onOpen}
        className="absolute top-12 right-0 m-4 mt-[3rem] mr-[7rem]"
        variant="shadow"
        color="warning"
      >
        Edit
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Profile Information</ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit}>
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
                <Button color="danger" variant="light" onPress={onClose} onClick={handleSubmit}>
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Listbox aria-label="Actions" className="max-w-[350px] bg-[#28292b] rounded-3xl p-[2rem] dark">
        <ListboxItem showDivider key="Username">
          <div className="flex justify-between h-[3.3rem] items-center">
            <p className="flex items-center text-white font-semibold">Username </p>
            <p className="text-[#F31260] font-bold">username</p>
          </div>
        </ListboxItem>
        <ListboxItem showDivider key="Email">
          <div className="flex justify-between h-[3.3rem] items-center">
            <p className="flex items-center text-white font-semibold">Email </p>
            <p className="text-[#F31260] font-bold">{userEmail}</p>
          </div>
        </ListboxItem>
        <ListboxItem showDivider key="Phone">
          <div className="flex justify-between h-[3.3rem] items-center">
            <p className="flex items-center text-white font-semibold">Phone </p>
            <p className="text-[#F31260] font-bold">+91-xxxxxxxxxx</p>
          </div>
        </ListboxItem>
        <ListboxItem key="Package">
          <div className="flex justify-between h-[3.3rem] items-center">
            <p className="text-white font-semibold">Package</p>
            <p className="text-[#F31260] font-bold">None</p>
          </div>
        </ListboxItem>
      </Listbox>
    </div>
  );
};

export default ProfileInfo;
