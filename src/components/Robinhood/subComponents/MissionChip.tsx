// Dependencies
import { Chip, Button } from "@nextui-org/react";

type MissionChipProps = {
  logo: JSX.Element;
  heading: string;
  caption: string;
  default?: Boolean;
  innerWrapperClassName?: string;
};

const MissionChip = (props: MissionChipProps) => {
  return (
    <Chip
      startContent={
        <Button
          isIconOnly
          color={props.default ? "primary" : "warning"}
          variant="flat"
          radius="full"
          className="w-[4rem] h-[4rem]"
        >
          {props.logo}
        </Button>
      }
      variant="flat"
      color={props.default ? "primary" : "warning"}
      className="min-w-[15rem] min-h-[3rem] text-center py-[2rem] px-[0] "
    >
      <div className={"ml-[1rem] mr-[1.5rem] " + props.innerWrapperClassName}>
        <h1 className="font-['Roboto'] text-left text-[1rem]">{props.heading}</h1>
        <p className="text-left text-xs">{props.caption}</p>
      </div>
    </Chip>
  );
};

export default MissionChip;
