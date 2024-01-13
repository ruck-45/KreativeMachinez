// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import { scrollTop } from "../../utils/controllers";

const Dashboard = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Dashboard"));
  scrollTop();

  return <div>Dashboard</div>;
};

export default Dashboard;
