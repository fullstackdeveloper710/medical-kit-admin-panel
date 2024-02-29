import {
  FaBell,
  FaBellSlash,
  FaChartBar,
  FaCubes,
  FaFile,
  FaFoursquare,
  FaHome,
  FaJsSquare,
  FaMedkit,
  FaSignOutAlt,
  FaSquare,
  FaSquareFull,
  FaSquarespace,
  FaUser,
  FaUsers,
} from "react-icons/fa";
export const menus = [
  {
    title: "Dashboard",
    icon: <FaSquare className="icon" />,
    link: "/",
  },
  {
    title: "Products",
    icon: <FaHome className="icon" />,
    link: "/products",
  },
  {
    title: "Kit Management",
    icon: <FaMedkit className="icon" />,
    link: "/kit",
  },
  {
    title: "User Management",
    icon: <FaUsers className="icon" />,
    link: "/users",
  },
  {
    title: "Business Profile",
    icon: <FaHome className="icon" />,
    link: "/businessprofile",
  },
  {
    title: "Distributors",
    icon: <FaUser className="icon" />,
    link :"/distributors"
  },
  {
    title: "Reports",
    icon: <FaChartBar className="icon" />,
    link:"/reports"
  },
  {
    title: "Resources",
    icon: <FaFile className="icon" />,
    link: "/resource",
  },
  {
    title: "Message Center",
    icon: <FaBell className="icon" />,
    link: "/messaging",
  },
  {
    title: "Notifications",
    icon: <FaBell className="icon" />,
    link: "/notifications",
  },
];
