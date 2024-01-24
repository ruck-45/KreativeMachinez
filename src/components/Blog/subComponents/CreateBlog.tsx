// Dependencies
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from "react-draft-wysiwyg";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { Button, Input, Textarea } from "@nextui-org/react";
import { useState, useRef } from "react";
import toast, { Toaster, ToastPosition } from "react-hot-toast";
import { RawDraftContentBlock } from "draft-js";
import axios from "axios";

// Local Files
import { getCookie } from "../../../utils/cookies";

const toastSetting: {
  position: ToastPosition;
} = { position: "top-center" };

const successToast = (message: string): void => {
  toast.success(message, toastSetting);
};

const errorToast = (message: string): void => {
  toast.error(message, toastSetting);
};

let apiUrl = process.env.REACT_APP_API_URL;
if (process.env.NODE_ENV === "development") {
  apiUrl = process.env.REACT_APP_DEV_API_URL;
}

const CreateBlog = () => {
  const [blogPic, setBlogPic] = useState<File | null>(null);
  const [previewImageUrl, setPreviewImageUrl] = useState("");

  const token = getCookie("token");

  const title = useRef("");
  const summary = useRef("");
  const content: any = useRef("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;

    if (file) {
      const imageUrl = URL.createObjectURL(file[0]);
      setBlogPic(file[0]);
      setPreviewImageUrl(imageUrl);
    }
  };

  const getFilteredContent = (content: RawDraftContentBlock[]) => {
    const data = content.map((data) => ({
      text: data.text,
      isListItem: data.type === "unordered-list-item",
      style: data.inlineStyleRanges.filter((styles) => styles.style === "BOLD" || styles.style === "ITALIC"),
    }));

    return data;
  };

  const handleCreateBlog = async () => {
    if (title.current === "" || summary.current === "" || blogPic === null || content.current[0].text === "") {
      return errorToast("Please Fill All Required Fields");
    }

    if (blogPic.size > 1572864) {
      return errorToast("Image is Bigger Than 1.5 MB");
    }

    const filteredContent = JSON.stringify(getFilteredContent(content.current));

    try {
      const response = await axios.post(
        `${apiUrl}/blogs/create`,
        { title: title.current, summary: summary.current, content: filteredContent },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.data.success) {
        errorToast("Blog Creation Failed");
      } else {
        const { imageId } = response.data.payload;
        const BlogImageData = new FormData();
        BlogImageData.append("image", blogPic);

        try {
          const response2 = await axios.post(`${apiUrl}/blogs/blogImages`, BlogImageData, {
            headers: {
              Authorization: `Bearer ${token}`,
              imageId,
            },
          });
          if (!response2.data.success) {
            errorToast("Blog Creation Failed");
          } else {
            successToast("Blog Creation Successful");
          }
        } catch (error) {
          errorToast("Blog Creation Failed");
        }
      }
    } catch (error) {
      errorToast("Blog Creation Failed");
    }
  };

  return (
    <div className="px-[5%] py-[5rem] bg-[#e9ecef]">
      <Link
        to="../../"
        className="ml-[4rem] mb-[1rem] flex items-center gap-[0.5rem] hover:gap-[1rem] duration-100 text-[#006FEE]"
      >
        <FaArrowRightLong />
        <p>Home</p>
      </Link>
      <div className="bg-[white] rounded-3xl md:p-[4rem] flex flex-col">
        <form className="sm:px-[1rem] md:px-[2rem] py-[2rem] bg-[#e9ecef] rounded-3xl flex flex-col gap-[1rem]">
          {previewImageUrl === "" ? null : (
            <div
              className="h-[30rem] rounded-3xl bg-no-repeat bg-cover bg-center flex flex-col p-[3rem] justify-between"
              style={{
                backgroundImage: `url(${previewImageUrl})`,
              }}
            ></div>
          )}

          <input
            type="file"
            id="myFile"
            name="profilepic"
            accept=".jpg,.jpeg"
            className="p-[1rem] bg-white rounded-3xl"
            onChange={handleImageChange}
          />

          <Input
            type="text"
            placeholder="Title"
            classNames={{
              inputWrapper: "bg-white",
            }}
            maxLength={80}
            onChange={(event) => (title.current = event.target.value)}
          />

          <Textarea
            placeholder="Summary"
            classNames={{ inputWrapper: "bg-white" }}
            maxLength={250}
            onChange={(event) => (summary.current = event.target.value)}
          />

          <Editor
            wrapperClassName="bg-white rounded-3xl"
            editorClassName="px-[2rem] py-[1rem] min-h-[20rem]"
            toolbar={{
              options: ["inline", "list", "history"],
              inline: {
                options: ["bold", "italic"],
              },
              list: {
                options: ["unordered"],
              },
            }}
            onChange={(event) => (content.current = event.blocks)}
            placeholder="Content"
          />

          <Button color="warning" variant="shadow" radius="full" className="self-center" onClick={handleCreateBlog}>
            Create Blog
          </Button>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default CreateBlog;
