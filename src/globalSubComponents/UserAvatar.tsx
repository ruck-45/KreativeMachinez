// Dependencies
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { updateToLoginStatus } from "../store/toLoginSlice";
import { useDispatch } from "react-redux";

// Local Files
import profilepic from "../globalAssets/profilepic.jpg";
import { getCookie, removeCookie } from "../utils/cookies";
import { imageExists } from "../utils/controllers";

const UserAvatar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let apiUrl = process.env.REACT_APP_API_URL;
  if (process.env.NODE_ENV === "development") {
    apiUrl = process.env.REACT_APP_DEV_API_URL;
  }

  const userEmail = getCookie("email");
  const image = getCookie("image");
  const isEmployee = getCookie("isEmployee");

  const handleLogout = () => {
    removeCookie("token");
    removeCookie("plan");
    removeCookie("address");
    removeCookie("profession");
    removeCookie("phone");
    removeCookie("username");
    removeCookie("about");
    removeCookie("email");
    removeCookie("expiration");
    removeCookie("image");
    removeCookie("isEmployee");

    dispatch(updateToLoginStatus(true));
    navigate("/Auth");
  };

  const imageUrl = `${apiUrl}/users/profileImages/${image}.jpg`;
  const createBlogClassName = isEmployee === "true" ? "p-0" : "hidden";

  return (
    <>
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            src={imageExists(imageUrl) ? imageUrl : profilepic}
            color="danger"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="email" className="h-14 gap-2" textValue="email">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">{userEmail}</p>
          </DropdownItem>
          <DropdownItem key="profile" className="p-0" textValue="profile">
            <Link to="/Profile" style={{ display: "block", padding: "6px 8px" }}>
              Profile
            </Link>
          </DropdownItem>
          <DropdownItem key="privacy" className="p-0" textValue="privacy">
            <Link to="/Privacy" style={{ display: "block", padding: "6px 8px" }}>
              Privacy & Policies
            </Link>
          </DropdownItem>
          <DropdownItem key="blog" className={createBlogClassName} textValue="blog">
            <Link to="/Blog/Create" style={{ display: "block", padding: "6px 8px" }}>
              Create Blog
            </Link>
          </DropdownItem>
          <DropdownItem key="logout" color="danger" onClick={handleLogout} textValue="logout">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default UserAvatar;
