// Dependencies
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

type BlogCardProps = {
  blogId?: string;
  createdAt?: string;
  thumbnail: string;
  title: string;
  summary: string;
};

const BlogCard = (props: BlogCardProps) => {
  const navigate = useNavigate();

  const showDetails = () => {
    navigate(`../Individual`, { state: { ...props } });
  };

  return (
    <Card shadow="sm" isPressable className="hover:scale-105" onClick={showDetails}>
      <CardBody className="overflow-visible p-5 pb-3 items-center">
        <div
          className="relative w-[100%] pb-[75%] overflow-hidden"
          style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)" }}
        >
          <img
            src={props.thumbnail}
            className="rounded-xl absolute top-[0] left-[0] object-cover h-[100%] w-[100%]"
            alt=""
            style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)" }}
          />
        </div>
      </CardBody>
      <CardFooter className="text-small justify-between flex-col pt-0 gap-[0.5rem]">
        <b className="text-xl">{props.title}</b>
        <p>{props.summary}</p>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
