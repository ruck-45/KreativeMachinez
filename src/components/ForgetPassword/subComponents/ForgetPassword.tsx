// Dependencies
import { useState, useRef } from "react";
import axios from "axios";
import { Button, Input } from "@nextui-org/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import queryString from "query-string";
import { updateToLoginStatus } from "../../../store/toLoginSlice";
import toast, { Toaster, ToastPosition } from "react-hot-toast";
import {
  emailRe,
  passwordRe,
  passwordSpclChar,
  passwordDigit,
  passwordHighCase,
  passwordLowCase,
} from "../../../utils/authRegex";
// Local Files


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

const ForgetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  let apiUrl = process.env.REACT_APP_API_URL;
  if (process.env.NODE_ENV === "development") {
    apiUrl = process.env.REACT_APP_DEV_API_URL;
  }

  const email = useRef("");
  const password = useRef("");
  const confirmPassword = useRef("");
  const [invalidPasswordMessage, setInvalidPasswordMessage] = useState("");
  const [emailState, setEmailState] = useState(false);
  const [passwordState, setPasswordState] = useState(false);
  const [confirmPasswordState, setConfirmPasswordState] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const searchParams = queryString.parse(window.location.search);
  const isResetState = searchParams.state === "reset";
  const token = searchParams.token

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
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      if (isResetState) {
        if (
          passwordState ||
          confirmPasswordState ||
          password.current.length === 0 ||
          confirmPassword.current.length === 0
        ) {
          errorToast("Please The Form Correctly");
          return;
        }
        if (token) {
          const response = await axios.put(
            `${apiUrl}/users/reset-password`,
            { password: password.current },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (response.data.success) {
            successToast("Password is changed successfully");
            dispatch(updateToLoginStatus(true));
            setTimeout(() => {
              setIsLoading(false);
              navigate("/Auth");
            }, 2000)
          } else {
            errorToast("Error while updating password");
          }
        } else {
          errorToast("This link is expired");
        }
      } else {
        if (emailState || email.current.length === 0) {
          errorToast("Email can not be empty");
          setIsLoading(false);
          return;
        }

        const response = await axios.post(`${apiUrl}/users/forgot-password`, { email: email.current });
        if (response.data.success) {
          successToast("Reset password link is sent to your email address");
          setTimeout(() => {
            setIsLoading(false);
            navigate("/Auth");
          }, 3000);
        }
      }
    } catch (error) {
      errorToast("Please provide a valid email address");
      setIsLoading(false);
    }
  };

  return (
    <form
      className="flex flex-col justify-center w-[22rem] sm:min-w-[27rem] p-12 m-2 gap-3 Auth rounded-3xl"
      onSubmit={handleSubmit}
    >
      <Link to="../" className="mb-[2rem] flex items-center gap-[0.5rem] hover:gap-[1rem] duration-100 text-[#006FEE]">
        <FaArrowRightLong />
        <p>Home</p>
      </Link>
      <div className="flex flex-col gap-8 font-semibold welcomeText mb-4">
        <p>Reset Password</p>
        {isResetState ? (
          <h1 className="font-normal">Please enter new password</h1>
        ) : (
          <h1 className="font-normal">Please Enter Your Email</h1>
        )}
      </div>
      {isResetState ? (
        <>
          <Input
            type="password"
            label="New Password"
            maxLength={100}
            labelPlacement="outside"
            placeholder="Enter new password"
            onKeyDown={handleKeyPress}
            isInvalid={passwordState}
            errorMessage={passwordState ? "Please enter a valid password" : ""}
            onChange={checkPassword}
          />
          <Input
            type="password"
            label="Confirm Password"
            maxLength={100}
            labelPlacement="outside"
            placeholder="Confirm your password"
            onKeyDown={handleKeyPress}
            isInvalid={confirmPasswordState}
            errorMessage={confirmPasswordState ? "Passwords do not match" : ""}
            onChange={checkConfirmPassword}
          />
        </>
      ) : (
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
      )}

      <Button className="mt-5 mb-2" color="primary" variant="shadow" type="submit" isLoading={isLoading}>
        Submit
      </Button>
      <Toaster />
    </form>
  );
};

export default ForgetPassword;
