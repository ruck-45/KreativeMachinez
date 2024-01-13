// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import { scrollTop } from "../../utils/controllers";

const Privacy = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Privacy"));
  scrollTop();

  return <div>Privacy</div>;
};

export default Privacy;
