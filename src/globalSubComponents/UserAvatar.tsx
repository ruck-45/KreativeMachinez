// Dependencies
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar } from "@nextui-org/react";
import { Link } from "react-router-dom";

// Local Files
import profilepic from "../globalAssets/profilepic.jpg";

const UserAvatar = () => {
  return (
    <>
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar isBordered as="button" className="transition-transform" src={profilepic} color="danger" />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="email" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">zoey@example.com</p>
          </DropdownItem>
          <DropdownItem key="profile" className="p-0">
            <Link to="/Profile" style={{ display: "block", padding: "6px 8px" }}>
              Profile
            </Link>
          </DropdownItem>
          <DropdownItem key="privacy" className="p-0">
            <Link to="/Privacy" style={{ display: "block", padding: "6px 8px" }}>
              Privacy & Policies
            </Link>
          </DropdownItem>
          <DropdownItem key="logout" color="danger">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default UserAvatar;
