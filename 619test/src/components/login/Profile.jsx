import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { SignOut } from "../../firebase";

const Profile = () => {
    const { user } = useContext(AuthContext);

    const handleLogout = async () => {
        await SignOut();
    };
    if (!user) {
        return <Navigate replace to="/signin" />;
    }
    else {
        return (
            <div>
                <h1>{user} Profile</h1>
                <button onClick={handleLogout}>Logout</button>
            </div>
        );
    }
};
export default Profile;