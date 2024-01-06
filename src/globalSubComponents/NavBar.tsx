// Dependencies
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Image,
} from "@nextui-org/react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// Local Files
import "./NavBar.css";
import logo from "../globalAssets/logo.svg";
import icon from "../globalAssets/icon.svg";
import { RootState } from "../store/store";
import { updateNavStatus } from "../store/navOpenStatusSlice";
import { updateToLoginStatus } from "../store/toLoginSlice";
import ButtonElement from "../globalElements/ButtonElement";

const menuItems = ["Home", "Services", "About", "Contact", "Pricing", "Log In"];

const NavBar = () => {
  const curTab = useSelector((state: RootState) => state.curTab.value);
  const navOpenStatus = useSelector((state: RootState) => state.navOpenStatus.value);
  const dispatch = useDispatch();
  return (
    <Navbar
      isMenuOpen={navOpenStatus}
      onMenuOpenChange={() => {
        dispatch(updateNavStatus(!navOpenStatus));
      }}
      className="h-[5rem] nav z-[200]"
      maxWidth="xl"
      shouldHideOnScroll
      classNames={{ base: "bg-[rgba(0,0,0,0.4)]" }}
    >
      <NavbarContent>
        <NavbarMenuToggle aria-label={navOpenStatus ? "Close menu" : "Open menu"} className="lg:hidden text-white" />
        <Link to="../Home">
          <div className="bg-white p-[1rem] pb-[2rem] ribbon slant-down hidden lg:block">
            <Image width={90} src={logo} alt="logo" radius="none" className="mt-[5rem]" />
            <div className="left-ribbon-border"></div>
            <div className="right-ribbon-border"></div>
          </div>
        </Link>
      </NavbarContent>
      <NavbarContent className="lg:hidden logo">
        <Link to="../Home">
          <div className="bg-white p-[1rem] flex justify-center items-center max-h-[5rem] ribbon">
            <Image width={60} src={icon} alt="logo" radius="none" />
          </div>
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex" justify="center">
        <NavbarItem>
          <Link
            to="../Home"
            className={curTab === "Home" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
          >
            HOME
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            to="../Services"
            className={curTab === "Services" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
          >
            SERVICES
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            to="../About"
            className={curTab === "About" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
          >
            ABOUT
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            to="../Contact"
            className={curTab === "Contact" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
          >
            CONTACT US
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            to="../Pricing"
            className={curTab === "Pricing" ? "active navActive flex flex-col px-[1rem]" : "notActive px-[1rem]"}
          >
            PRICING
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <ButtonElement
            to="../Auth"
            variant="bordered"
            color="warning"
            label="Login"
            radius="full"
            className="w-full px-[8px] py-[10px]"
            onClickFunction={() => dispatch(updateToLoginStatus(true))}
          />
        </NavbarItem>
        <NavbarItem>
          <ButtonElement
            to="../Auth"
            variant="solid"
            color="warning"
            label="Sign Up"
            radius="full"
            className="w-full px-[8px] py-[10px] font-semibold"
            onClickFunction={() => dispatch(updateToLoginStatus(false))}
          />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="mt-[1rem] bg-[rgba(0,0,0,0.4)] z-[200]">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={curTab === item ? "active" : "notActive"}
              to={index === 5 ? "../Auth" : `../${item}`}
              onClick={() => {
                dispatch(updateNavStatus(!navOpenStatus));
                dispatch(updateToLoginStatus(item === "Log In" ? true : false));
              }}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
