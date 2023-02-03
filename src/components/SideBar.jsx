import { forwardRef } from "react";
import { useLocation, Link } from "react-router-dom";
import logo from "../assets/images/ferox-transparent.png";
import { useGlobalContext } from "../context/context";
import { navItems } from "../utils/navItems";

const SideBar = forwardRef(({ showNav }, ref) => {
  const location = useLocation();
  const { user, logoutUser, isLoading } = useGlobalContext();
  let sideNavItems = navItems.filter((item) => {
    return item.permission.includes(user?.Role);
  });

  //   <div className="flex justify-center mt-6 mb-14">
  //   <img src={logo} alt="logo" />
  // </div>

  //if you change w-56 u need to change pl-56 in main in layout.tsx
  return (
    <div ref={ref} className="fixed w-56 h-full bg-white shadow-sm">
      <div className="flex flex-col h-full justify-center">
        {sideNavItems.map((item, index) => {
          return (
            <Link to={item.link} key={index}>
              <div
                className={`pl-6 py-3 mx-2 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
                  location.pathname === item.link
                    ? "bg-orange-100 text-orange-500"
                    : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
                }`}
              >
                <div className="mr-2">{item.icon}</div>
                <div>
                  <p>{item.title}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
