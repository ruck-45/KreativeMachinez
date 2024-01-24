import { Card, Skeleton } from "@nextui-org/react";

const BlogsSkeleton = () => {
  return (
    <Card className="shadow-sm" radius="lg">
      <Skeleton className="relative w-[100%] pb-[75%] overflow-hidden">
        <div
          className="rounded-xl absolute top-[10%] left-[10%] object-cover h-[80%] w-[80%] bg-default-300"
          style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)" }}
        ></div>
      </Skeleton>
      <div className="p-5 pb-3 items-center">
        <div className="space-y-3">
          <Skeleton className="w-3/5 h-6 rounded-lg bg-default-200"></Skeleton>
          <Skeleton className="w-4/5 h-6 rounded-lg bg-default-200"></Skeleton>
          <Skeleton className="w-2/5 h-6 rounded-lg bg-default-300"></Skeleton>
        </div>
      </div>
    </Card>
  );
};

export default BlogsSkeleton;
