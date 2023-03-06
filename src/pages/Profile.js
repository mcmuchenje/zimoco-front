
import AuthService from "../services/auth.service";
import { Navigate } from "react-router-dom";

const Profile = () => {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) {
        return <Navigate to="/login" />;
    } 

    return (
        <div>
            profile page
        </div>
    )
}

export default Profile;