// Dependencies
import { useState, useRef } from "react";
import axios from "axios";
import { Button, Input } from "@nextui-org/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast, { Toaster, ToastPosition } from "react-hot-toast";

// Local Files
import "./UserAuth.css";


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
  let apiUrl = process.env.REACT_APP_API_URL;
  if (process.env.NODE_ENV === "development") {
    apiUrl = process.env.REACT_APP_DEV_API_URL;
  }

  const email = useRef("");

  const [emailState, setEmailState] = useState(false);

    const checkEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        email.current = event.target.value;
        // const validity = email.current.match(emailRe);

        // if (validity) {
        // setEmailState(false);
        // } else {
        // setEmailState(true);
        // }
    };
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (emailState) {
        errorToast("Please The Form Correctly");
        return;
        }
    };

    const handlePaswwordButton = async () => {
        try {
            const emailResponse = await axios.post(`${apiUrl}/users/forgot-password`, email)
            if (!emailResponse.data.success) {
                errorToast("Email is not valid");
            }
            successToast("Verification email sent successfully")
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <form className="flex flex-col justify-center sm:min-w-[27rem] p-12 gap-3 Auth rounded-3xl" onSubmit={handleSubmit}>
      <Link to="../" className="mb-[2rem] flex items-center gap-[0.5rem] hover:gap-[1rem] duration-100 text-[#006FEE]">
        <FaArrowRightLong />
        <p>Home</p>
      </Link>
      <div className="flex gap-2 font-semibold welcomeText mb-4">
        <h1>Enter Your Email </h1>
        <p>👋</p>
      </div>
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
      <Button className="mt-5 mb-2" color="primary" variant="shadow" type="submit">
        Submit
      </Button>
      <Toaster />
    </form>
  );
};

export default ForgetPassword;
