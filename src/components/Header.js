import { APP_LOGO } from "../utils/Constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/useUserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";
const Header = () => {
    const status = useOnlineStatus();
    const { loggedInUser } = useContext(userContext);
    const cartItem = useSelector((store) => store.cart.items);
    return (
        <div className="flex justify-between sticky bg-gray-300 shadow-lg">
            <Link to="/"><img src={APP_LOGO} className="w-30 h-30" alt="app-logo" /></Link>
            <h2 className="flex items-center text-2xl text-blue-600 shadow-amber-100">Lucky Food Ordering App</h2>
            <h3 className="flex items-center text-2xl">{'Status is'} {status ? 'Online  ✅' : 'Offline  ❌'} </h3>
            <div className="flex items-center">
                <ul className="flex text-2xl items-center">
                    <li className="px-5 cursor-pointer"><Link to="/about">About</Link></li>
                    <li className="px-5 cursor-pointer"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-5 cursor-pointer"><Link to="/login">Login</Link></li>
                    <li className="px-5 cursor-pointer"><Link to="/cart">Cart  🛒 <span className="font-bold text-3xl">{cartItem.length}</span></Link></li>
                    <li className="px-5">User: {loggedInUser} 🟢</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;