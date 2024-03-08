import { Card, CardHeader, CardBody, CardFooter, Button } from "@nextui-org/react";
import { FaArrowCircleRight } from "react-icons/fa";

type BenefitSmallCardProps = {
  heading: string;
  caption: string;
  logo: JSX.Element;
};

const BenefitSmallCard = (props: BenefitSmallCardProps) => {
  return (
    <Card className="max-w-[17rem] p-[2rem] gap-[2rem] hover:scale-105 shrink-0" isPressable>
      <CardHeader className="justify-center p-0">
        <Button isIconOnly color="warning" variant="flat" radius="full" className="w-[5rem] h-[5rem]" aria-label="Like">
          {props.logo}
        </Button>
      </CardHeader>
      <CardBody className="text-center p-0 gap-[0.5rem]">
        <h1 className="font-[Roboto] text-[1.8rem] text-[#F5A524]">{props.heading}</h1>
        <p className="text-default-500 text-sm px-[1rem]">{props.caption}</p>
      </CardBody>
      <CardFooter className="justify-center p-0">
        <Button
          variant="light"
          color="warning"
          radius="full"
          endContent={<FaArrowCircleRight className="mt-[0.2rem]" />}
        >
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BenefitSmallCard;
