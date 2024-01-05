// Dependencies
import { Card, CardBody } from "@nextui-org/react";
import { FaArrowCircleRight } from "react-icons/fa";
import ButtonElement from "../../../globalElements/ButtonElement";
type ServicesCardProps = {
  heading: string;
  caption: string;
  thumbnail: string;
  flip?: Boolean;
};

const ServicesCard = (props: ServicesCardProps) => {
  return (
    <Card isBlurred className="border-none max-w-[60rem]">
      <CardBody>
        <div className="grid grid-cols-8 gap-4 items-center justify-center">
          <div
            className={
              props.flip
                ? "hidden"
                : "relative col-span-3 lg:col-span-2 hidden md:block"
            }
          >
            <div
              className="h-[16rem] lg:h-[15rem] rounded-xl bg-no-repeat bg-center bg-cover"
              style={{
                backgroundImage: `url(${props.thumbnail})`,
              }}
            ></div>
          </div>

          <div className="flex flex-col col-span-8 md:col-span-5 lg:col-span-6 px-[2rem] lg:px-[3rem] py-[1rem] gap-[2rem]">
            <div className="flex flex-col gap-[1rem] md:gap-0">
              <h1 className="font-['Kalnia'] font-bold text-[2rem] text-[#191f22] text-left">
                {props.heading}
              </h1>
              <p className="text-justify text-default-500 text-sm">
                {props.caption}
              </p>
            </div>

            <ButtonElement
              to={`../${props.heading}`}
              label="Learn More"
              radius="full"
              variant="ghost"
              color="danger"
              endContent={<FaArrowCircleRight className="mt-[0.2rem]" />}
              // className="w-[9rem] p-0 gap-0 mt-[1rem]"
            />
          </div>

          <div
            className={
              props.flip
                ? "relative col-span-3 lg:col-span-2 hidden md:block"
                : "hidden"
            }
          >
            <div
              className="h-[16rem] lg:h-[15rem] rounded-xl bg-no-repeat bg-center bg-cover"
              style={{
                backgroundImage: `url(${props.thumbnail})`,
              }}
            ></div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default ServicesCard;
