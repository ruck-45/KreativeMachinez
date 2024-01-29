// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import UserAuth from "./subComponents/UserAuth";
import loginBg from "./assets/loginBg.jpg";
import AuthCard from "./subComponents/AuthCard";
import { useLocation } from "react-router-dom";
import ForgetPassword from "./subComponents/ForgetPassword";
const Auth = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Auth"));
  let forgotPasswordState = false;  
  const location = useLocation();
   if (!location.state) {
     forgotPasswordState = true;
   }
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
      {forgotPasswordState ? <ForgetPassword /> : <UserAuth />}
    </div>
  );
};

export default Auth;
