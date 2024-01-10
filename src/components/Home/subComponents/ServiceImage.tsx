// Dependencies
import { Image, Card } from "@nextui-org/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// Local Files
import "./ServiceImage.css";
type MyState = {
  id: number;
};
type ServiceImageProps = {
  className: string;
  width: number;
  textSize: string;
  image: string;
  state?: MyState;
};

const ServiceImage = (props: ServiceImageProps) => {
  const navigate = useNavigate();
  const className =
    "rounded-none relative hover:before:content-[''] hover:before:absolute hover:before:top-0 hover:before:left-0 hover:before:z-[100]  hover:before:h-full hover:before:w-full hover:before:bg-[rgba(0,0,0,0.5)] img-after hover:after:top-1/2 hover:after:left-1/2 " +
    props.className;

  const [scaleUp, setScaleUp] = useState(false);
  const handleClick = () => {
    console.log(props.state)
    navigate("/Services/Individual", { state: props.state });
  }
  return (
    <Card
      isFooterBlurred
      className={className}
      isPressable
      onMouseEnter={() => setScaleUp(true)}
      onMouseLeave={() => setScaleUp(false)}
      onClick={handleClick}
    >
      <Image
        className={scaleUp ? "object-cover scale-125" : "object-cover"}
        src={props.image}
        width={props.width}
        isBlurred
        radius="none"
      />
    </Card>
  );
};

export default ServiceImage;
