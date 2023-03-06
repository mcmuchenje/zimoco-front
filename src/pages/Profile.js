
import AuthService from "../services/auth.service";
import { redirect } from "react-router-dom";

const Profile = () => {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser) {
        return redirect('/login');
    }  

    return (
        <div>
            profile page
        </div>
    )
}

export default Profile;