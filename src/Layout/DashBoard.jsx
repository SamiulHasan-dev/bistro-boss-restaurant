import { FaAd, FaHome, FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaCalendarCheck, FaList } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";


const DashBoard = () => {
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                    <li>
                        <NavLink to="/dashboard/userHome"> <FaHome></FaHome> User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation"> <FaCalendarCheck></FaCalendarCheck> Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart"> <FaShoppingCart></FaShoppingCart> My Cart</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review"> <FaAd></FaAd>Add a Review</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/bookings"> <FaList></FaList> My Bookings</NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/"> <FaHome></FaHome> Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad"> <FaSearch></FaSearch> menu</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;