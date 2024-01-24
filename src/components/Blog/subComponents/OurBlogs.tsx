// Dependencies
import { Pagination, Divider } from "@nextui-org/react";
import { useLayoutEffect, useState } from "react";
import axios from "axios";

// Local Files
import BlogCard from "./BlogCard";
import { scrollTop } from "../../../utils/controllers";

const pageSize = 8;

const OurBlogs = () => {
  scrollTop();

  const [blogsData, setBlogsData] = useState([{ blog_id: "", created_at: "", image: "", summary: "", title: "" }]);
  const [blogsCount, setBlogsCount] = useState(-1);
  const [currentPage, setCurrentPage] = useState(1);

  let apiUrl = process.env.REACT_APP_API_URL;
  if (process.env.NODE_ENV === "development") {
    apiUrl = process.env.REACT_APP_DEV_API_URL;
  }

  useLayoutEffect(() => {
    const getBlogs = async () => {
      try {
        const start = (currentPage - 1) * pageSize;
        const end = currentPage * pageSize;
        const response = await axios.get(`${apiUrl}/blogs/latest`, {
          params: { start, end },
        });
        console.log("here", response)
        setBlogsData(response.data.payload.result);
        setBlogsCount(response.data.payload.total);
      } catch (error) {
        console.log("No Blog Found");
      }
    };

    getBlogs();
  }, [apiUrl, currentPage]);

  return (
    <div className="bg-[#e9ecef] px-[2rem] sm:px-[5rem] py-[5rem] flex flex-col gap-[3rem]">
      <div className="flex flex-col gap-[2rem]">
        <h1 className="font-['lilita_one'] text-[3rem] text-center">
          Our <span className="text-[#F5A524]">Blogs</span>
        </h1>
        <Divider />
      </div>

      {blogsCount > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem]">
          {blogsData.map((data, index) => (
            <BlogCard
              key={index}
              thumbnail={`${apiUrl}/blogs/blogImages/${data.image}.jpg`}
              title={data.title}
              summary={data.summary}
              blogId={data.blog_id}
              createdAt={data.created_at}
            />
          ))}
        </div>
      ) : (
        <div className="w-full h-[15rem] flex justify-center items-center">
          <p className="font-bold text-default-300 text-4xl">No Blog Found</p>
        </div>
      )}

      <Pagination
        loop
        showControls
        color="warning"
        variant="flat"
        total={blogsCount ? Math.ceil(blogsCount / 8) : 1}
        initialPage={1}
        className="self-center"
        onChange={(pageNumber) => setCurrentPage(pageNumber)}
      />
    </div>
  );
};

export default OurBlogs;
