import AuthService from "../services/auth.service";
import { Navigate } from "react-router-dom";

const Cart = () => {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) {
        return <Navigate to="/login" />;
    } 

    return (
        <div>Cart</div>
    )
}

export default Cart;