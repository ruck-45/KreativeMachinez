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
        Welcome back! Log in to access your account and continue your digital journey with us. New here? Sign up now to
        unlock a world of innovative digital marketing solutions tailored just for you. Join Kreative Machinez and let's
        start shaping your online success together!
      </p>
    </div>
  );
};

export default AuthCard;
