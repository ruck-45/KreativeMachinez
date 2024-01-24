// Dependencies
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import { scrollTop } from "../../utils/controllers";
import OurBlogs from "./subComponents/OurBlogs";
import IndividualBlog from "./subComponents/IndividualBlog";
import CreateBlog from "./subComponents/CreateBlog";
import { getCookie } from "../../utils/cookies";

const Blog = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Blog"));
  scrollTop();

  const isAuthenticated = getCookie("token") ? true : false;
  const isEmployee = getCookie("isEmployee") === "true" ? true : false;

  return (
    <Routes>
      <Route path="/" element={<Navigate to="./All" />} />
      <Route path="/All" element={<OurBlogs />} />
      <Route path="/Individual" element={<IndividualBlog />} />
      {isAuthenticated && isEmployee ? <Route path="/Create" element={<CreateBlog />} /> : null}
      <Route path="*" element={<Navigate to="./All" />} />
    </Routes>
  );
};

export default Blog;
