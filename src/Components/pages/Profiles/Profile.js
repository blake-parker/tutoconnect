import Navbar from "../../NavBar/Navbar";
import UpComingEventsBar from "./UpComingEventsBar";
import ProfileBar from "./ProfileBar";
import "./Profiles.css";
import UserPosts from "./UserPosts";

function Profile() {
  
  return (
    <>
      <Navbar />
      
      <div className="Profile">
        <div className="Container">

          <ProfileBar/>
          <UserPosts/>
          <UpComingEventsBar/>

        </div>
      </div>
      
    </>
  );
}
export default Profile;
