// Dependencies
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import Arrow from "./Arrow";

type CTAProps = {
  to?: string;
  text: string;
  color: "warning" | "default" | "primary" | "secondary" | "success" | "danger" | undefined;
  text2?: string;
  showArrow: boolean;
  offset?: number;
};

const CTA = (props: CTAProps) => {
  let address = "./";

  if (props.to) {
    address = props.to;
  }

  return (
    <Button
      color={props.color}
      className="w-full py-[3rem] px-0 font-['DM_Serif_Display'] text-[1rem] md:text-[1.3rem]"
      radius="none"
    >
      <Link
        to={address}
        className="py-[2rem] w-full flex flex-col sm:flex-row justify-center items-center sm:gap-[2rem] md:gap-[4rem]"
        state={{ offset: props.offset ? props.offset : 0 }}
      >
        <span>{props.text}</span>
        {props.showArrow ? <Arrow className="hidden sm:block" /> : null}
        <span>{props.text2}</span>
      </Link>
    </Button>
  );
};

export default CTA;
