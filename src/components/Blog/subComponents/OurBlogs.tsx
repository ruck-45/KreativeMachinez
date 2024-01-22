// Dependencies
import { Pagination, Divider } from "@nextui-org/react";
import { useLayoutEffect, useState} from "react";
import axios from "axios";
import { AxiosResponse } from "axios";
// Local Files
import BlogCard from "./BlogCard";


const OurBlogs = () => {
  const [blogsData, setBlogsData] = useState([{blog_id: "",created_at: "",image: "",summary: "",title: "",}]);
  const [blogsCount, setBlogsCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);


  let apiUrl = process.env.REACT_APP_API_URL;
  if (process.env.NODE_ENV === "development") {
    apiUrl = process.env.REACT_APP_DEV_API_URL;
  }


  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useLayoutEffect(() => {
    const getBlogs = async () => {
      try {
        const pageSize = 8;
        const start = (currentPage - 1) * pageSize ;
        const end = currentPage * pageSize;
        console.log(start, end);
        const response: AxiosResponse<any> = await axios.get(`${apiUrl}/blogs/ourBlogs`, {
          params: { start, end },
        });

        setBlogsData(response.data.payload.result);
        setBlogsCount(response.data.payload.total);
      } catch (error) {
        // Handle errors
      }
    };

    getBlogs();
  }, [currentPage, apiUrl]);

  return (
    <div className="bg-[#e9ecef] px-[2rem] sm:px-[5rem] py-[5rem] flex flex-col gap-[3rem]">
      <div className="flex flex-col gap-[2rem]">
        <h1 className="font-['lilita_one'] text-[3rem] text-center">
          Our <span className="text-[#F5A524]">Blogs</span>
        </h1>
        <Divider />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem]">
        {blogsData.map((data, index) => {
          return (
            <BlogCard
              key={index}
              thumbnail={data.image}
              title={data.title}
              summary={data.summary}
              blogId={data.blog_id}
              createdAt={data.created_at}
            />
          );
        })}
      </div>
      <Pagination
        loop
        showControls
        color="warning"
        variant="flat"
        total={blogsCount ? Math.ceil(blogsCount / 8) : 1}
        initialPage={1}
        className="self-center"
        onChange={(pageNumber: number) => handlePageChange(pageNumber)}
      />
    </div>
  );
};

export default OurBlogs;
