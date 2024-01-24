// Dependencies
import { useDispatch } from "react-redux";
import { Navigate } from "react-router";

// Local Files
import { updateTab } from "../../store/curTabSlice";
import { scrollTop } from "../../utils/controllers";
import ProfileInfo from "./components/ProfileInfo";
import { getCookie } from "../../utils/cookies";

const Profile = () => {
  const dispatch = useDispatch();
  dispatch(updateTab("Profile"));
  scrollTop();

  const isAuthenticated = getCookie("token") ? true : false;
  if (!isAuthenticated) {
    return <Navigate to="/Home" />;
  }
  
  return (
    <div className="py-[5rem] px-[1rem] md:px[2rem] lg:px-[3rem] xl:px-[5rem] bg-white">
      <ProfileInfo />
    </div>
  );
};

export default Profile;
