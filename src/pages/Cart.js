import AuthService from "../services/auth.service";

const Cart = () => {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) {
        return redirect('/login');
    }  

    return (
        <div>Cart</div>
    )
}

export default Cart;