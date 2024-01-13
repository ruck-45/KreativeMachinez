// Dependencies
import { Chip, Listbox, ListboxItem } from "@nextui-org/react";

// Local Files
import "./ProfileInfo.css";
import profilepic from "../../../globalAssets/profilepic.jpg";

const ProfileInfo = () => {
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
              <p className="text-small text-default-500">Designer</p>
            </div>
          </div>
          <div>
            <p className="font-bold">About</p>
            <p className="text-default-500 text-small">
              Passionate designer blending creativity and functionality. Transforming ideas into captivating visuals.
              Dedicated to elevating user experiences. Let's create impactful designs that resonate. Welcome to my
              creative world!
            </p>
          </div>
        </div>
      </div>

      <Listbox aria-label="Actions" className="max-w-[350px] bg-[#28292b] rounded-3xl p-[2rem] dark">
        <ListboxItem showDivider key="Username">
          <div className="flex justify-between h-[3.3rem] items-center">
            <p className="text-white font-semibold">Username</p>
            <p className="text-[#F31260] font-bold">John Doe</p>
          </div>
        </ListboxItem>
        <ListboxItem showDivider key="Email">
          <div className="flex justify-between h-[3.3rem] items-center">
            <p className="text-white font-semibold">Email</p>
            <p className="text-[#F31260] font-bold">johnDoe@gmail.com</p>
          </div>
        </ListboxItem>
        <ListboxItem showDivider key="Phone">
          <div className="flex justify-between h-[3.3rem] items-center">
            <p className="text-white font-semibold">Phone</p>
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
