// Dependencies
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { updateToLoginStatus } from "../store/toLoginSlice";
import { useDispatch } from "react-redux";
import toast, { Toaster, ToastPosition } from "react-hot-toast";
import axios from "axios";
// Local Files
import { getCookie, removeCookie } from "../utils/cookies";
const toastSetting: {
  position: ToastPosition;
} = { position: "top-center" };
const successToast = (message: string): void => {
  toast.success(message, toastSetting);
};
const errorToast = (message: string): void => {
  toast.error(message, toastSetting);
};

const UserAvatar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  let apiUrl = process.env.REACT_APP_API_URL;
  if (process.env.NODE_ENV === "development") {
    apiUrl = process.env.REACT_APP_DEV_API_URL;
  }
  const userEmail = getCookie("email");

  const image = getCookie("image");
  const isEmployee = getCookie("isEmployee");
  const token = getCookie("token");
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
  const deleteUserClassName = isEmployee === "true" ? "hidden" : "p-0";

  const deleteUser = async () => {
    try {
      if (isEmployee !== "true") {
        const response = await axios.delete(`${apiUrl}/users/delete-user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.data.success) {
          errorToast("User could not be deleted");
        } else {
          successToast("User deleted successfully.");
          handleLogout();
          navigate("/Home");
        }
      }
    } catch (error) {
      errorToast("Internal Server Error");
    }
  };
  return (
    <>
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar isBordered as="button" className="transition-transform" src={imageUrl} color="danger" />
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
          <DropdownItem key="blog" className={deleteUserClassName} color="danger" textValue="blog" onPress={onOpen}>
            Delete Profile
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Delete Profile</ModalHeader>
              <ModalBody>Are you sure you want to delete your profile ?</ModalBody>
              <ModalFooter>
                <Button color="success" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="danger" onPress={onClose} onClick={deleteUser}>
                  Yes
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Toaster />
    </>
  );
};

export default UserAvatar;
