import React from "react";

import {  Image, Divider } from "@nextui-org/react";
import userProfile from "../assets/userProfile.jpg";
import UserInfo from "./elements/UserInfo";
const Profile = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-4 justify-center sm:min-w-[27rem] lg:min-w-[60rem] p-12 gap-3 Auth rounded-3xl">
        <div className="sm:col-span-1 flex items-center">
          <Image src={userProfile} width={350} className="p-[1rem]" radius="lg" />
          <Divider orientation="vertical" />
        </div>
        <div className="sm:col-span-3 sm:px-[5rem]">
          <UserInfo />
        </div>
      </div>
    </>
  );
};

export default Profile;
