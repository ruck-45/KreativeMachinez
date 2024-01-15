// Dependencies
import { Chip, Listbox, ListboxItem, Textarea } from "@nextui-org/react";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";

// Local Files
import "./ProfileInfo.css";
import profilepic from "../../../globalAssets/profilepic.jpg";

const ProfileInfo = () => {
  const [isEditMode, setEditMode] = useState(false);
  const about = `Passionate designer blending creativity and functionality. Transforming ideas into captivating visuals. Dedicated to elevating user experiences. Let's create impactful designs that resonate. Welcome to my creative world!`;
  const [aboutSec, setAboutSec] = useState(about);
  return (
    <div className="flex justify-between gap-[2rem] items-center UserStat">
      <div className="flex md:gap-[2rem] items-center md:justify-evenly w-full flex-col md:flex-row">
        <div
          className="h-[22rem] w-[22rem] rounded-3xl profilePic"
          style={{ backgroundImage: `url(${profilepic})` }}
        ></div>

        <div className="max-w-[350px] flex flex-col gap-[1rem]">
          <div className="flex gap-3">
            <div className="flex flex-col">
              <Chip color="success" variant="dot" className="my-4">
                Online
              </Chip>
              <p className="text-md font-bold">John Doe</p>
              <p className="flex items-center text-small text-default-500">
                Designer{" "}
                <span className="cursor-pointer ml-2 " onClick={() => setEditMode(true)}>
                  <FaEdit />
                </span>
              </p>
            </div>
          </div>
          <div>
            <p className="text-md font-bold">
              <span style={{ display: "flex", alignItems: "center" }}>
                About{" "}
                <span className="cursor-pointer ml-2" onClick={() => setEditMode(true)}>
                  <FaEdit />
                </span>
              </span>
            </p>
            {isEditMode ? (
              <Textarea value={aboutSec} className="w-[25rem]" onChange={(e) => setAboutSec(e.target.value)} />
            ) : (
              <p className="text-default-500 text-small">{about}</p>
            )}
          </div>
        </div>
      </div>

      <Listbox aria-label="Actions" className="max-w-[350px] bg-[#28292b] rounded-3xl p-[2rem] dark">
        <ListboxItem showDivider key="Username">
          <div className="flex justify-between h-[3.3rem] items-center">
            <p className="flex items-center text-white font-semibold">
              Username{" "}
              <span className="cursor-pointer ml-2" onClick={() => setEditMode(true)}>
                <FaEdit />
              </span>
            </p>
            <p className="text-[#F31260] font-bold">John Doe</p>
          </div>
        </ListboxItem>
        <ListboxItem showDivider key="Email">
          <div className="flex justify-between h-[3.3rem] items-center">
            <p className="flex items-center text-white font-semibold">
              Email{" "}
              <span className="cursor-pointer ml-2" onClick={() => setEditMode(true)}>
                <FaEdit />
              </span>
            </p>
            <p className="text-[#F31260] font-bold">johnDoe@gmail.com</p>
          </div>
        </ListboxItem>
        <ListboxItem showDivider key="Phone">
          <div className="flex justify-between h-[3.3rem] items-center">
            <p className="flex items-center text-white font-semibold">
              Phone{" "}
              <span className="cursor-pointer ml-2" onClick={() => setEditMode(true)}>
                <FaEdit />
              </span>
            </p>
            <p className="text-[#F31260] font-bold">+91-9876543210</p>
          </div>
        </ListboxItem>
        <ListboxItem key="Package">
          <div className="flex justify-between h-[3.3rem] items-center">
            <p className="text-white font-semibold">Package</p>
            <p className="text-[#F31260] font-bold">Basic</p>
          </div>
        </ListboxItem>
      </Listbox>
    </div>
  );
};

export default ProfileInfo;
