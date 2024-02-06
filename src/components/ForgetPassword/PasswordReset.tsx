// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import AuthCard from "../Auth/subComponents/AuthCard";
import loginBg from "../Auth/assets/loginBg.jpg"
import ForgetPassword from "./subComponents/ForgetPassword";



const PasswordReset = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Password Reset"));
  return (
    <div
      className="flex h-screen justify-center lg:justify-between sm:px-[5rem] gap-[5rem] items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3) 20%,rgba(0,0,0,0.3)),url(${loginBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <AuthCard className="hidden lg:flex" />
      <ForgetPassword />
    </div>
  );
};

export default PasswordReset;
