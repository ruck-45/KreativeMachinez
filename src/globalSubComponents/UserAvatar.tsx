import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar } from "@nextui-org/react";
import { Link } from "react-router-dom";

const UserAvatar = () => {
  return (
    <>
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            color="danger"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="email" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">zoey@example.com</p>
          </DropdownItem>
          <DropdownItem key="dashboard" className="p-0">
            <Link to="/Dashboard" style={{ display: "block", padding: "6px 8px" }}>
              Dashboard
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
