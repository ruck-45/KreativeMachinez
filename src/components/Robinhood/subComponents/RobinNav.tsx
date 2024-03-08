// Dependencies
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Image,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Accordion,
  AccordionItem,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";

// Local Files
import logo from "./logo.svg";
import "./NavBar.css";
import { RootState } from "../../../store/store";
import { updateNavStatus } from "../../../store/navOpenStatusSlice";

const menuItems = ["Home", "Services", "About", "Contact", "FAQ", "Log In"];

const NavBar = () => {
  const curTab = useSelector((state: RootState) => state.curTab.value);
  const navOpenStatus = useSelector((state: RootState) => state.navOpenStatus.value);
  const dispatch = useDispatch();

  const setIsMenuOpen = () => {
    dispatch(updateNavStatus(!navOpenStatus));
  };

  return (
    <div className="robin-NavDiv">
      <Navbar
        isMenuOpen={navOpenStatus}
        onMenuOpenChange={setIsMenuOpen}
        className="dark h-[5rem] robin-nav bg-[#052814] p-0"
        maxWidth="full"
      >
        <NavbarContent>
          <NavbarMenuToggle aria-label={navOpenStatus ? "Close menu" : "Open menu"} className="lg:hidden text-white" />
          <Link to="../Home">
            <Image width={150} src={logo} alt="logo" radius="none" className="hidden lg:block" />
          </Link>
          <div className="robin-hbar hidden lg:block"></div>
        </NavbarContent>
        <NavbarContent className="lg:hidden robin-logo">
          <Link to="../Home">
            <Image width={120} src={logo} alt="logo" radius="none" />
          </Link>
        </NavbarContent>

        <NavbarContent className="hidden lg:flex" justify="center">
          <NavbarItem>
            <Link
              to="../Home"
              className={
                curTab === "Home" ? "robin-active navActive flex flex-col px-[1rem]" : "robin-notActive px-[1rem]"
              }
            >
              Home
            </Link>
          </NavbarItem>

          <Dropdown className="dark">
            <NavbarItem
              className={curTab === "Services" ? "robin-navActiveServices flex-col hidden lg:flex" : "hidden lg:flex"}
            >
              <DropdownTrigger>
                <Button
                  disableRipple
                  className={curTab === "Services" ? "robin-active" : "robin-notActive"}
                  endContent={<RiArrowDropDownLine className="HomeDropdownIcon" />}
                  radius="sm"
                  variant="light"
                  size="lg"
                >
                  Services
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu aria-label="Services" className="gap-4 text-white font-['Roboto']">
              <DropdownItem key="Investment" className="p-0" textValue="Investment">
                <Link to="./Investment" style={{ display: "block", padding: "6px 8px" }}>
                  Investment
                </Link>
              </DropdownItem>
              <DropdownItem key="Crypto" className="p-0" textValue="Crypto">
                <Link to="./Crypto" style={{ display: "block", padding: "6px 8px" }}>
                  Crypto
                </Link>
              </DropdownItem>
              <DropdownItem key="Options" className="p-0" textValue="Options">
                <Link to="./Options" style={{ display: "block", padding: "6px 8px" }}>
                  Options
                </Link>
              </DropdownItem>
              <DropdownItem key="Retirement" className="p-0" textValue="Retirement">
                <Link to="./Retirement" style={{ display: "block", padding: "6px 8px" }}>
                  Retirement
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <NavbarItem>
            <Link
              to="../About"
              className={
                curTab === "About" ? "robin-active navActive flex flex-col px-[1rem]" : "robin-notActive px-[1rem]"
              }
            >
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              to="../Contact"
              className={
                curTab === "Contact" ? "robin-active navActive flex flex-col px-[1rem]" : "robin-notActive px-[1rem]"
              }
            >
              Contact Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              to="../FAQ"
              className={
                curTab === "FAQ" ? "robin-active navActive flex flex-col px-[1rem]" : "robin-notActive px-[1rem]"
              }
            >
              FAQ
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link to="../Auth">
              <Button color="warning" variant="bordered" radius="none">
                Login
              </Button>
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="../Auth">
              <Button color="warning" variant="solid" radius="none" className="font-semibold">
                Sign Up
              </Button>
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="bg-[#28292b] mt-[1rem]">
          {menuItems.map((item, index) => {
            if (item === "Services") {
              return (
                <NavbarMenuItem key={`${item}-${index}`}>
                  <Accordion className="p-0" isCompact>
                    <AccordionItem
                      aria-label={item}
                      title={item}
                      classNames={{
                        title: curTab === item ? "robin-active" : "robin-notActive",
                        content: "text-white",
                      }}
                    >
                      <Listbox aria-label="Services" color="warning">
                        <ListboxItem key="Investment" className="p-0" textValue="Investment">
                          <Link
                            style={{ display: "block", padding: "6px 8px" }}
                            to={"./Investment"}
                            onClick={setIsMenuOpen}
                          >
                            Investment
                          </Link>
                        </ListboxItem>
                        <ListboxItem key="Crypto" className="p-0" textValue="Crypto">
                          <Link
                            style={{ display: "block", padding: "6px 8px" }}
                            to={"./Crypto"}
                            onClick={setIsMenuOpen}
                          >
                            Crypto
                          </Link>
                        </ListboxItem>
                        <ListboxItem key="Options" className="p-0" textValue="Options">
                          <Link
                            style={{ display: "block", padding: "6px 8px" }}
                            to={"./Options"}
                            onClick={setIsMenuOpen}
                          >
                            Options
                          </Link>
                        </ListboxItem>
                        <ListboxItem key="Retirement" className="p-0" textValue="Retirement">
                          <Link
                            style={{ display: "block", padding: "6px 8px" }}
                            to={"./Retirement"}
                            onClick={setIsMenuOpen}
                          >
                            Retirement
                          </Link>
                        </ListboxItem>
                      </Listbox>
                    </AccordionItem>
                  </Accordion>
                </NavbarMenuItem>
              );
            } else {
              return (
                <NavbarMenuItem key={`${item}-${index}`}>
                  <Link
                    className={curTab === item ? "robin-active" : "robin-notActive"}
                    to={index === 5 ? "../Auth" : `../${item}`}
                    onClick={setIsMenuOpen}
                  >
                    {item}
                  </Link>
                </NavbarMenuItem>
              );
            }
          })}
        </NavbarMenu>
      </Navbar>
    </div>
  );
};

export default NavBar;
