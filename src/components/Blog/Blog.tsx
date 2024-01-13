// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import { scrollTop } from "../../utils/controllers";

const Blog = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Blog"));
  scrollTop();

  return <div>Blog</div>;
};

export default Blog;
