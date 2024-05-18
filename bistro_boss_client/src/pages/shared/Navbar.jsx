// import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../../providers/FirebaseProvider";

const Navbar = () => {
  //   const { user, logOut } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "lg:text-[#EEFF25] uppercase bg-none text-sm font-bold"
              : "text-sm font-bold  text-white"
          }
        >
          home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact-us"
          className={({ isActive }) =>
            isActive
              ? " uppercase text-[#EEFF25] bg-none text-sm font-bold"
              : "text-sm font-bold text-white"
          }
        >
          contact us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? " uppercase text-[#EEFF25] bg-none text-sm font-bold"
              : "text-sm font-bold text-white"
          }
        >
          dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/our-menu"
          className={({ isActive }) =>
            isActive
              ? " uppercase text-[#EEFF25] bg-none text-sm font-bold"
              : "text-sm font-bold text-white"
          }
        >
          our menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/our-shop"
          className={({ isActive }) =>
            isActive
              ? " uppercase text-[#EEFF25] bg-none text-sm font-bold"
              : "text-sm font-bold text-white"
          }
        >
          our shop
        </NavLink>
      </li>
    </>
  );
  return (
    <main className=" fixed z-30 w-full">
      <div className="navbar text-white container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 bg-black text-white p-2 shadow  rounded-box w-52 z-50"
            >
              {links}
            </ul>
          </div>
          <Link>
            <div className="flex flex-col font-cinzel">
              <p className="text-3xl font-extrabold">Bistro Boss</p>
              <small className="text-2xl font-bold">Restaurant</small>
            </div>
          </Link>
        </div>

        <div className="navbar-end">
          <div className=" hidden lg:flex z-50">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          ></div>
          {/* {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div title={user?.displayName} className="w-10 rounded-full">
                  <img
                    src={
                      user?.photoURL ||
                      "https://i.ibb.co/8jzLLB4/438036378-984851046398483-5226497363877099275-n.jpg"
                    }
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button className="btn btn-sm  btn-ghost">
                    {user?.displayName || "user name not found"}
                  </button>
                </li>
                <li>
                  <button onClick={logOut} className="btn btn-sm  btn-ghost">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <p className="text-[#252422] bg-none text-sm font-bold">Login</p>
            </Link>
          )} */}
        </div>
      </div>
    </main>
  );
};

export default Navbar;
