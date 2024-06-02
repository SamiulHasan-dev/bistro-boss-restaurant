import { FaAd, FaHome, FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaBook, FaCalendarCheck, FaEnvelope, FaList, FaUsers, FaUtensils } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";


const DashBoard = () => {
    const [cart] = useCart();

    //TODO: get admin value the database
    const isAdmin = true;


    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                    {
                        isAdmin ? 
                        <>
                        <li>
                        <NavLink to="/dashboard/adminHome"> <FaHome></FaHome> Admin Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/addItems"> <FaUtensils></FaUtensils> Add Items</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/manageItems"> <FaList></FaList> Manage items</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/bookings"> <FaBook></FaBook>Manage bookings</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/users"> <FaUsers></FaUsers> All Users</NavLink>
                    </li>
                        </>

                        :

                        <>
                        <li>
                        <NavLink to="/dashboard/userHome"> <FaHome></FaHome> User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation"> <FaCalendarCheck></FaCalendarCheck> Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart"> <FaShoppingCart></FaShoppingCart> My Cart({cart.length})</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review"> <FaAd></FaAd>Add a Review</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/bookings"> <FaList></FaList> My Bookings</NavLink>
                    </li>
                        </>
                    }
                    {/* shared nav link */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/"> <FaHome></FaHome> Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad"> <FaSearch></FaSearch> Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/contact"> <FaEnvelope></FaEnvelope> Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;