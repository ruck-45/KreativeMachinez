import { Button } from "@nextui-org/react";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
interface ButtonProps {
  to: string;
  size?: "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | undefined;
  variant:
    | "solid"
    | "bordered"
    | "light"
    | "flat"
    | "faded"
    | "shadow"
    | "ghost"
    | undefined;
  label: string;
  backgroundColor?: string;
  startContent?: ReactNode;
  endContent?: ReactNode;
  isIconOnly?: boolean;
  isDisabled?: boolean;
}
const ButtonElement = (props: ButtonProps) => {
  return (
    <Link
      to={props.isDisabled ? "" : props.to}
      className="w-[9rem] p-0 gap-0 mt-[1rem]"
    >
      <Button
        size={props.size}
        radius={props.radius}
        variant={props.variant}
        color={props.color}
        startContent={props.startContent}
        isIconOnly={props.isIconOnly}
        isDisabled={props.isDisabled}
        endContent={props.endContent}
        className="p-[18px] grow"
        style={{ backgroundColor: props.backgroundColor }}
      >
        {props.label}
      </Button>
    </Link>
  );
};

export default ButtonElement;
