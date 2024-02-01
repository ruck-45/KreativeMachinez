// Dependencies
import { useState, useRef } from "react";
import axios from "axios";
import { Button, Input, Checkbox } from "@nextui-org/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast, { Toaster, ToastPosition } from "react-hot-toast";
import { setCookie } from "../../../utils/cookies";

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

const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
  if (event.key === "Enter") {
    event.preventDefault();
  }
};
const toastSetting: {
  position: ToastPosition;
} = { position: "top-center" };

const successToast = (message: string): void => {
  toast.success(message, toastSetting);
};
const errorToast = (message: string): void => {
  toast.error(message, toastSetting);
};

const UserAuth = () => {
  let apiUrl = process.env.REACT_APP_API_URL;
  if (process.env.NODE_ENV === "development") {
    apiUrl = process.env.REACT_APP_DEV_API_URL;
  }

  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const toLogin = useSelector((state: RootState) => state.toLogin.value);
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
  const [rememberMe, setRememberMe] = useState(true);
  const [handleLoginButton, setHandleLoginButton] = useState(false);

  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
  };

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (emailState || passwordState || email.current.length === 0 || password.current.length === 0) {
      errorToast("Please The Form Correctly");
      return;
    }

    if (toLogin) {
      try {
        setHandleLoginButton(true);
        const response = await axios.post(`${apiUrl}/users/login`, {
          email: email.current,
          password: password.current,
          remember: rememberMe,
        });
        
        if (response.data.success) {
          const cookieOptions = { expires: response.data.payload.expires };

          setCookie("token", response.data.payload.token, cookieOptions);
          setCookie("email", email.current, cookieOptions);
          setCookie("username", response.data.payload.userName, cookieOptions);
          setCookie("expiration", response.data.payload.expires, cookieOptions);
          setCookie("isEmployee", response.data.payload.isEmployee, cookieOptions);

          const profileResponse = await axios.get(`${apiUrl}/users/profile`, {
            headers: {
              Authorization: `Bearer ${response.data.payload.token}`,
            },
          });

          setCookie("about", profileResponse.data.payload.about, cookieOptions);
          setCookie("profession", profileResponse.data.payload.profession, cookieOptions);
          setCookie("address", profileResponse.data.payload.address, cookieOptions);
          setCookie("phone", profileResponse.data.payload.phone, cookieOptions);
          setCookie("plan", profileResponse.data.payload.plan, cookieOptions);
          setCookie("image", profileResponse.data.payload.image, cookieOptions);

          navigate("/Profile");
        } else {
          errorToast(response.data.payload.message);
          setHandleLoginButton(false);
        }
      } catch (error: any) {
        errorToast(error.response.data.payload.message);
        setHandleLoginButton(false);
      }
    } else {
      if (
        usernameState ||
        confirmPasswordState ||
        confirmPassword.current.length === 0 ||
        username.current.length === 0
      ) {
        errorToast("Please The Form Correctly");
        return;
      }

      try {
        const response = await axios.post(`${apiUrl}/users/signup`, {
          email: email.current,
          username: username.current,
          password: password.current,
        });

        if (response.data.success) {
          successToast("Registration successful");
          dispatch(updateToLoginStatus(true));
          navigate("/Auth");
        } else {
          errorToast(`${response.data.payload.message}`);
        }
      } catch (error: any) {
        if (error.response.status === 501) {
          errorToast("Email Address Already Registered");
        } else {
          errorToast("Sign Up Failed");
        }
      }
    }
  };

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
        maxLength={50}
        labelPlacement="outside"
        placeholder="Enter your username"
        className={toLogin ? "hidden" : ""}
        onKeyDown={handleKeyPress}
        isInvalid={usernameState}
        errorMessage={usernameState ? invalidUsernameMessage : ""}
        onChange={checkUsername}
      />
      <Input
        type="email"
        label="Email"
        maxLength={100}
        labelPlacement="outside"
        placeholder="Enter your email"
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
        onPaste={(e) => e.preventDefault()}
        onCopy={(e) => e.preventDefault()}
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
        onPaste={(e) => e.preventDefault()}
        onCopy={(e) => e.preventDefault()}
      />
      <p className={toLogin ? "text-xs text-right cursor-pointer" : "hidden"} style={{ color: "#006FEE" }}>
        Forgot Password?
      </p>
      <Checkbox defaultSelected size="sm" className={toLogin ? "" : "hidden"} onChange={handleCheckboxChange}>
        Remember Me
      </Checkbox>
      <Button
        className="mt-2 mb-2"
        color="primary"
        variant="shadow"
        type="submit"
        isLoading={handleLoginButton}
      >
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
      <Toaster />
    </form>
  );
};

export default UserAuth;
