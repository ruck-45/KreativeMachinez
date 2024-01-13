// Dependencies
import { useState, useRef } from "react";
import { Button, Input, Checkbox } from "@nextui-org/react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter, FaArrowRightLong } from "react-icons/fa6";
import { AiFillGoogleCircle, AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// Local Files
import "./UserAuth.css";
import EyeFilledIcon from "./EyeFilledIcon";
import EyeSlashFilledIcon from "./EyeSlashFilledIcon";
import {
  emailRe,
  passwordRe,
  passwordSpclChar,
  passwordDigit,
  passwordHighCase,
  passwordLowCase,
} from "../../../utils/authRegex";
import { RootState } from "../../../store/store";
import { updateToLoginStatus } from "../../../store/toLoginSlice";
import { updateLoginStatus } from "../../../store/loginSlice";
import { setCookie } from "../../../cookies/cookies";

const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
  if (event.key === "Enter") {
    event.preventDefault();
  }
};

const UserAuth = () => {
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(false);

  const toLogin = useSelector((state: RootState) => state.toLogin.value);
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn)
  const toggleVisibility = () => setIsVisible(!isVisible);

  const dispatch = useDispatch();
  const changeAuthStatus = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    dispatch(updateToLoginStatus(!toLogin));
  };

  const email = useRef("");
  const password = useRef("");
  const confirmPassword = useRef("");
  const username = useRef("");

  const [invalidPasswordMessage, setInvalidPasswordMessage] = useState("");
  const [invalidUsernameMessage, setInvalidUsernameMessage] = useState("");

  const [emailState, setEmailState] = useState(false);
  const [passwordState, setPasswordState] = useState(false);
  const [confirmPasswordState, setConfirmPasswordState] = useState(false);
  const [usernameState, setUsernameState] = useState(false);

  const checkEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    email.current = event.target.value;
    const validity = email.current.match(emailRe);

    if (validity) {
      setEmailState(false);
    } else {
      setEmailState(true);
    }
  };

  const checkPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    password.current = event.target.value;

    if (password.current.length < 8) {
      setPasswordState(true);
      setInvalidPasswordMessage("Password should have a minimum length of 8 characters");
    } else if (password.current.match(passwordSpclChar) === null) {
      setPasswordState(true);
      setInvalidPasswordMessage("Include at least one special character (!@#$&*^%_-+)");
    } else if (password.current.match(passwordLowCase) === null) {
      setPasswordState(true);
      setInvalidPasswordMessage("Include at least one lowercase letter");
    } else if (password.current.match(passwordHighCase) === null) {
      setPasswordState(true);
      setInvalidPasswordMessage("Include at least one uppercase letter");
    } else if (password.current.match(passwordDigit) === null) {
      setPasswordState(true);
      setInvalidPasswordMessage("Include at least one digit in your password");
    } else if (password.current.match(passwordRe) === null) {
      setPasswordState(true);
      setInvalidPasswordMessage("Password includes invalid character(s)");
    } else {
      setPasswordState(false);
      setInvalidPasswordMessage("");
    }
  };

  const checkConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    confirmPassword.current = event.target.value;

    if (confirmPassword.current === password.current) {
      setConfirmPasswordState(false);
    } else {
      setConfirmPasswordState(true);
    }
  };

  const checkUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    username.current = event.target.value;

    if (username.current.length < 3) {
      setUsernameState(true);
      setInvalidUsernameMessage("Username should have a minimum length of 3 characters");
    } else {
      setUsernameState(false);
      setInvalidUsernameMessage("");
    }
  };

  const handleSubmit = () => {
     try {
      const data = {
        user: "SSSS",
      };
      dispatch(updateLoginStatus(data));
       setCookie("authToken", "kmjlksjknwjebijoewisjcnnjqensaoijojnsjadnbiuewhdsiabqe");
       navigate("/");
     } catch (error) {

     }
  }

  return (
    <form className="flex flex-col justify-center sm:min-w-[27rem] p-12 gap-3 Auth rounded-3xl" onSubmit={handleSubmit}>
      <Link to="../" className="mb-[2rem] flex items-center gap-[0.5rem] hover:gap-[1rem] duration-100 text-[#006FEE]">
        <FaArrowRightLong />
        <p>Home</p>
      </Link>
      <div className="flex gap-2 font-semibold welcomeText">
        <h1>Welcome to Kreative Machinez </h1>
        <p>👋</p>
      </div>
      <p className="text-xs mb-2">Please {toLogin ? "Login to" : "Create"} your account and start the adventure !</p>
      <Input
        type="text"
        label="Username"
        labelPlacement="outside"
        placeholder="Enter your username"
        isClearable
        className={toLogin ? "hidden" : ""}
        onKeyDown={handleKeyPress}
        isInvalid={usernameState}
        errorMessage={usernameState ? invalidUsernameMessage : ""}
        onChange={checkUsername}
      />
      <Input
        type="email"
        label="Email"
        labelPlacement="outside"
        placeholder="Enter your email"
        isClearable
        onKeyDown={handleKeyPress}
        isInvalid={emailState}
        errorMessage={emailState ? "Please enter a valid Email" : ""}
        onChange={checkEmail}
      />
      <Input
        label="Password"
        labelPlacement="outside"
        placeholder="Enter your password"
        endContent={
          <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
            {isVisible ? (
              <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        type={isVisible ? "text" : "password"}
        onKeyDown={handleKeyPress}
        isInvalid={passwordState}
        errorMessage={passwordState ? invalidPasswordMessage : ""}
        onChange={checkPassword}
      />
      <Input
        label="Confirm Password"
        labelPlacement="outside"
        placeholder="Confirm your password"
        className={toLogin ? "hidden" : ""}
        endContent={<button className="focus:outline-none" type="button" onClick={toggleVisibility}></button>}
        type={isVisible ? "text" : "password"}
        onKeyDown={handleKeyPress}
        isInvalid={confirmPasswordState}
        errorMessage={confirmPasswordState ? "Passwords do not match" : ""}
        onChange={checkConfirmPassword}
      />
      <p className={toLogin ? "text-xs text-right cursor-pointer" : "hidden"} style={{ color: "#006FEE" }}>
        Forgot Password?
      </p>
      <Checkbox defaultSelected size="sm" className={toLogin ? "" : "hidden"}>
        Remember Me
      </Checkbox>
      <Button className="mt-2 mb-2" color="primary" variant="shadow" type="submit">
        Submit
      </Button>
      <p className="text-xs text-center">
        {toLogin ? "New to our platform?" : "Already have an account?"}
        &nbsp;
        <button
          style={{ color: "#006FEE" }}
          onClick={(e) => {
            changeAuthStatus(e);
          }}
        >
          {toLogin ? "Create an account" : "Login"}
        </button>
      </p>
      <div className={toLogin ? "flex items-center justify-center gap-5 overflow-hidden mt-1 mb-1" : "hidden"}>
        <div className="Divider"></div>
        <p className="text-sm">or</p>
        <div className="Divider"></div>
      </div>
      <div className={toLogin ? "flex justify-center items-center gap-3" : "hidden"}>
        <Button className="text-2xl" isIconOnly color="danger" variant="flat">
          <AiFillInstagram />
        </Button>
        <Button className="text-2xl" isIconOnly color="primary" variant="flat">
          <FaFacebook />
        </Button>
        <Button className="text-2xl" isIconOnly color="default" variant="flat">
          <FaSquareXTwitter />
        </Button>
        <Button className="text-2xl" isIconOnly color="danger" variant="flat">
          <AiFillGoogleCircle />
        </Button>
      </div>
    </form>
  );
};

export default UserAuth;
