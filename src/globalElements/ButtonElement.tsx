import { Button } from "@nextui-org/react";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
interface MyState {
  id: number;
}
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
  variant?:
    | "solid"
    | "bordered"
    | "light"
    | "flat"
    | "faded"
    | "shadow"
    | "ghost"
    | undefined;
  label?: string;
  backgroundColor?: string;
  startContent?: ReactNode;
  endContent?: ReactNode;
  isIconOnly?: boolean;
  isDisabled?: boolean;
  className?: string;
  index?: number;
  state?: MyState;
  icon?: ReactNode;
  onClickFunction?: () => void;
}
const ButtonElement = (props: ButtonProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    const toUrl = props.isDisabled ? "" : props.to;
    if (props.onClickFunction) {
      props.onClickFunction();
    }
    if (!props.isDisabled || toUrl !== "") {
      navigate(toUrl, { state: props.state });
    }
  };

  return (
    <Button
      size={props.size} // size for the button
      radius={props.radius} // radius for the  button
      variant={props.variant} // variant for the button
      color={props.color} // color for the button
      startContent={props.startContent} // start content
      isIconOnly={props.isIconOnly} // if button is icon only
      isDisabled={props.isDisabled} // if button is disabled
      endContent={props.endContent} // end content
      className={`${props.className}`} // Tailwind class name for button
      style={{ backgroundColor: props.backgroundColor }}
      onClick={handleClick} // handle click
    >
      {props.icon || props.label}
    </Button>
  );
};

export default ButtonElement;
