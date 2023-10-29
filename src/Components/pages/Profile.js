import Navbar from "../NavBar/Navbar";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (e) {
      console.error("Error signing in:", e.message);
    }
  };
  return (
    <>
      <Navbar />
      <h1>Logged In User Profile</h1>
      <button onClick={handleSignOut}>log out</button>
    </>
  );
}
export default Profile;
