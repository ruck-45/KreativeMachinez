// Dependencies
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { scrollTop } from "../../../utils/controllers";
import { useLayoutEffect, useState } from "react";
import { AxiosResponse } from "axios";
import axios from "axios";

// Local Files

const IndividualBlog = () => {
  scrollTop();
  let apiUrl = process.env.REACT_APP_API_URL;
  if (process.env.NODE_ENV === "development") {
    apiUrl = process.env.REACT_APP_DEV_API_URL;
  }
  const location = useLocation();
  let thumbnail = "";
  let summary = "";
  let blogId = "";
  let title = "";
  let createdAt = "";
  if (location.state) {
    thumbnail = location.state.thumbnail;
    summary = location.state.summary;
    title = location.state.title;
    blogId = location.state.blogId;
    createdAt = location.state.createdAt;
  }
  console.log(createdAt)
  const [content, setContent] = useState("");
  const date = new Date(createdAt);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(date.getDate()).padStart(2, "0");

  const formattedDate = `${year}/${month}/${day}`;

  useLayoutEffect(() => {
    const getBlogContent = async () => {
      try {
        const response: AxiosResponse<any> = await axios.get(`${apiUrl}/blogs/${blogId}`);

        setContent(response.data.payload.result[0]['content'])
      } catch (error) {
        console.log(error)
      }
    }
    getBlogContent();
  }, [blogId, apiUrl])

  return (
    <div className="px-[5%] py-[5rem] bg-[#e9ecef]">
      <Link
        to="../All"
        className="ml-[4rem] mb-[1rem] flex items-center gap-[0.5rem] hover:gap-[1rem] duration-100 text-[#006FEE]"
      >
        <FaArrowRightLong />
        <p>Blogs</p>
      </Link>
      <div className="bg-[white] rounded-3xl md:p-[4rem] flex flex-col">
        <div className="sm:px-[1rem] md:px-[2rem] py-[2rem] bg-[#e9ecef] rounded-3xl flex flex-col gap-[1rem]">
          <div
            className="h-[30rem] rounded-3xl bg-no-repeat bg-cover bg-center flex flex-col p-[3rem] justify-between"
            style={{
              backgroundImage: `url(${thumbnail})`,
            }}
          ></div>

          <div className="p-[2rem] flex flex-col gap-[2rem]">
            <div className="flex flex-col justify-between">
              <h1 className="text-xl font-bold">{title}</h1>
              <p className="text-default-500 text-sm">Created At : {formattedDate}</p>
            </div>
            <div className="flex flex-col gap-[1rem]">
              {content.split(`\n`).map((paragraph, index) => (
                <p key={index} className="text-default-500">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualBlog;
