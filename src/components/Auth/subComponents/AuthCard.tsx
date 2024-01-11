// Dependencies
import { Image } from "@nextui-org/react";
import { Link } from "react-router-dom";

// Local Files
import logo from "../../../globalAssets/logo.svg";

type AuthCardProps = {
  className?: string;
};

const AuthCard = (props: AuthCardProps) => {
  const className = "flex flex-col gap-[2rem] " + props.className;

  return (
    <div className={className}>
      <Link to="../">
        <Image width={100} src={logo} alt="logo" className="bg-white p-[1rem]" />
      </Link>
      <h1 className="text-white">Kreative Machinez Pvt Ltd.</h1>
      <p className="text-white max-w-[25rem]">
        Welcome to Your Secure Login! <br/>
        Enter your details with confidence. Our robust security ensures your information is
        protected. Whether you are a valued client or a team member, this is your gateway to a streamlined and secure
        experience. Access your account with ease and explore your personalized space.
      </p>
    </div>
  );
};

export default AuthCard;
