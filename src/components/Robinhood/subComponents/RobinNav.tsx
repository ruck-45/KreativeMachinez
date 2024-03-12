// Dependencies
import { Navbar, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// Local Files
import "./RobinNav.css";
import { RootState } from "../../../store/store";
import { updateNavStatus } from "../../../store/navOpenStatusSlice";

const menuItems = ["Home", "About", "Contact", "Privacy"];

const RobinNav = () => {
  const curTab = useSelector((state: RootState) => state.curTab.value);
  const navOpenStatus = useSelector((state: RootState) => state.navOpenStatus.value);
  const dispatch = useDispatch();

  const setIsMenuOpen = () => {
    dispatch(updateNavStatus(!navOpenStatus));
  };

  return (
    <>
      <Navbar
        isMenuOpen={navOpenStatus}
        onMenuOpenChange={setIsMenuOpen}
        className=" bg-white md:z-[200] h-[3rem] font-['Kanit'] drop-shadow-md "
        maxWidth="xl"
        isBordered
        shouldHideOnScroll
      >
        <NavbarContent justify="end" className="lg:hidden">
          <NavbarMenuToggle aria-label={navOpenStatus ? "Close menu" : "Open menu"} className=" text-black" />
        </NavbarContent>
        <NavbarContent justify="start">
          <h1 className="font-bold text-xl">KREATIVE MACHINEZ</h1>
        </NavbarContent>
        <NavbarContent className="hidden lg:flex " justify="end">
          <NavbarItem>
            <Link
              to="/"
              className={
                curTab === "Home" ? "stateActive navActive flex flex-col px-[1rem]" : "stateNotActive px-[1rem]"
              }
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              to="/About"
              className={
                curTab === "About" ? "stateActive navActive flex flex-col px-[1rem]" : "stateNotActive px-[1rem]"
              }
            >
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              to="/Contact"
              className={
                curTab === "Contact" ? "stateActive navActive flex flex-col px-[1rem]" : "stateNotActive px-[1rem]"
              }
            >
              Contact Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              to="/Privacy"
              className={
                curTab === "Privacy" ? "stateActive navActive flex flex-col px-[1rem]" : "stateNotActive px-[1rem]"
              }
            >
              Privacy
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="bg-[white] mt-[2rem]">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className={curTab === item ? "stateActive" : "stateNotActive"}
                to={index === 5 ? "../Auth" : `../${item}`}
                onClick={setIsMenuOpen}
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default RobinNav;
