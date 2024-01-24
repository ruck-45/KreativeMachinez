// Dependencies
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { useLayoutEffect, useState } from "react";
import axios from "axios";

const getFormattedDate = (cDate: string) => {
  const date = new Date(cDate);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}/${month}/${day}`;
};

const IndividualBlog = () => {
  let apiUrl = process.env.REACT_APP_API_URL;
  if (process.env.NODE_ENV === "development") {
    apiUrl = process.env.REACT_APP_DEV_API_URL;
  }

  const location = useLocation();
  let thumbnail = "";
  let blogId = "";
  let title = "";
  let createdAt = "";

  if (location.state) {
    thumbnail = location.state.thumbnail;
    title = location.state.title;
    blogId = location.state.blogId;
    createdAt = location.state.createdAt;
  }

  const [content, setContent] = useState<any[]>([]);
  const formattedDate = getFormattedDate(createdAt);

  useLayoutEffect(() => {
    const getBlogContent = async () => {
      try {
        const response = await axios.get(`${apiUrl}/blogs/${blogId}`);

        if (!response.data.success) {
          console.log("blog Not Found");
        } else {
          setContent(JSON.parse(response.data.payload.result));
        }
      } catch (error) {
        console.log("Blog Not Found");
      }
    };

    getBlogContent();
  }, [apiUrl, blogId]);

  const singleStyled = (text: string, style: any) => {
    const left = text.slice(0, style.offset);
    const styledComp = text.slice(style.offset, style.offset + style.length + 1);
    const right = text.slice(style.offset + style.length);
    const className = style.style === "BOLD" ? "font-bold" : "italic";

    return (
      <p>
        {left}
        {<span className={className}>{styledComp}</span>}
        {right}
      </p>
    );
  };

  const getCurStatus = (pos: number, bold: number[][], blength: number, italic: number[][], ilength: number) => {
    let res = "";
    if (pos >= bold[0][0] && pos < bold[blength - 1][1]) {
      for (const value of bold) {
        if (pos >= value[0] && pos < value[1]) {
          res += "B";
          break;
        }
      }
    }

    if (pos >= italic[0][0] && pos < italic[ilength - 1][1]) {
      for (const value of italic) {
        if (pos >= value[0] && pos < value[1]) {
          res += "I";
          break;
        }
      }
    }

    return res.split("").sort().join("");
  };

  const getClassname = (status: string) => {
    let res = "";
    if (status.includes("B")) {
      res += " font-bold ";
    }

    if (status.includes("I")) {
      res += " italic ";
    }

    return res;
  };

  const multistyledStyled = (text: string, style: any) => {
    let bold = [];
    let italic = [];
    const length = text.length;

    for (const value of style) {
      if (value.style === "BOLD") {
        bold.push([value.offset, value.offset + value.length + 1]);
      } else {
        italic.push([value.offset, value.offset + value.length + 1]);
      }
    }

    bold = bold.sort((a, b) => a[0] - b[0]);
    italic = italic.sort((a, b) => a[0] - b[0]);
    const blength = bold.length;
    const ilength = italic.length;

    const elements = [];
    let cur = "";
    let status = "";

    for (let i = 0; i < length; i++) {
      const curStatus = getCurStatus(i, bold, blength, italic, ilength);
      if (curStatus === status) {
        cur += text[i];
      } else {
        const cn = getClassname(status);
        const htmEle = <span className={cn}>{cur}</span>;
        elements.push(htmEle);
        cur = text[i];
        status = curStatus;
      }
    }

    const cn = getClassname(status);
    const htmEle = <span className={cn}>{cur}</span>;
    elements.push(htmEle);

    const finalEle = <p>{elements.map((data) => data)}</p>;

    return finalEle;
  };

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
            {content.length === 0 ? (
              <div className="w-full h-[15rem] flex justify-center items-center">
                <p className="font-bold text-default-300 text-4xl">Content Not Found</p>
              </div>
            ) : (
              <div className="flex flex-col gap-[1.5rem]">
                {content.map((data, index) => {
                  let html = <></>;
                  if (data.style.length === 0) {
                    html = <span>{data.text}</span>;
                  } else if (data.style.length === 1) {
                    html = singleStyled(data.text, data.style[0]);
                  } else {
                    html = multistyledStyled(data.text, data.style);
                  }

                  if (data.isListItem) {
                    html = <li>{html}</li>;
                  }
                  return html;
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualBlog;
