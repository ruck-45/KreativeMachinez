import React, { useState } from "react";
import loginBg from "./assets/loginBg.jpg";
import Profile from "./components/Profile";
import Plans from "./components/Plans";
import Settings from "./components/Settings";
import { updateTab } from "../../store/curTabSlice";
import { useDispatch } from "react-redux";
const User = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Profile"));
  const [tab, setTab] = useState("Profile");
  return (
    <div
      className="flex h-screen justify-center sm:px-[2rem] gap-[1rem] items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3) 20%,rgba(0,0,0,0.3)),url(${loginBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <div className="flex bg-white h-auto w-full rounded-3xl">
        <div className="flex-grow">
          {tab === "Profile" && <Profile />}
          {tab === "Plans" && <Plans />}
          {tab === "Settings" && <Settings />}
        </div>
        <div className="flex flex-col min-w-1/5 shadow-xl ">
          <span
            className={`text-lg bg-white px-[4rem] py-[1rem] rounded-tr-3xl cursor-pointer ${
              tab === "Profile" ? "border-none" : "border-1"
            }`}
            onClick={() => setTab("Profile")}
          >
            Profile
          </span>
          <span
            className={`text-lg bg-white px-[4rem] py-[1rem] rounded-tr-3xl cursor-pointer ${
              tab === "Plans" ? "border-none" : "border-1"
            }`}
            onClick={() => setTab("Plans")}
          >
            Plans
          </span>
          <span
            className={`text-lg bg-white px-[4rem] py-[1rem] rounded-tr-3xl cursor-pointer ${
              tab === "Settings" ? "border-none" : "border-1"
            }`}
            onClick={() => setTab("Settings")}
          >
            Settings
          </span>
        </div>
      </div>
    </div>
  );
};

export default User;

