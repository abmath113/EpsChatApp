import "./userInfo.css";
import { useUserStore } from "../../../lib/userStore";
import { signOut } from "firebase/auth"; // Import signOut from Firebase
import { auth } from "../../../lib/firebase"; // Import Firebase auth

const Userinfo = () => {
  const { currentUser } = useUserStore();

  // Logout handler
  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user from Firebase
      // Optionally, you can also update the user state in your store if needed
      // For example, use a user store function to reset the user data.
      toast.success("Logged out successfully!"); // Success message (if using toast)
    } catch (err) {
      console.log(err);
      toast.error("Failed to log out"); // Error message
    }
  };

  return (
    <div className="userInfo">
      <div className="user">
        <img src={currentUser.avatar || "./avatar.png"} alt="" />
        <h2>{currentUser.username}</h2>
      </div>
      <div className="icons">
        <img src="./more.png" alt="" />
        {/* <img src="./video.png" alt="" /> */}
        <img src="./edit.png" alt="" />
      </div>
      <button onClick={handleLogout} className="logoutButton">Logout</button> {/* Logout button */}
    </div>
  );
};

export default Userinfo;
