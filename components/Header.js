import { IMG_LOGO } from "./constant";
const Header = () => {
    return (
        <div className="header">
            <div className="logo-conatiner">
                <img className="logo" src={IMG_LOGO} alt="img-logo" />
            </div>
            <div className="app-title">
                <h2>Lucky Food delivery in 20 minutes</h2>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Contact US</li>
                    <li>Cart</li>
                    <li>Login</li>
                </ul>
            </div>
        </div>
    );
}
export default Header;