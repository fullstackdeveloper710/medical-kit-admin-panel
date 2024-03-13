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
import { RxDashboard } from "react-icons/rx";
import dashboardIcon from "../Assets/icons/SquaresFour.png";
import UserIcon from "../Assets/icons/Users.png";
import Products from "../Assets/icons/products.png";
import Kits from "../Assets/icons/kits.png";
import Business from "../Assets/icons/businessprofile.png";
import Distributors from "../Assets/icons/distributor.png";
import Reports from "../Assets/icons/reports.png";
import Resources from "../Assets/icons/resources.png";
import Bell from "../Assets/icons/Bell.png";

export const menus = [
  {
    title: "Dashboard",
    icon: <img src={dashboardIcon} />,
    link: "/",
  },
  {
    title: "Products",
    icon: <img src={Products} />,
    link: "/products",
  },
  {
    title: "Kit Management",
    icon: <img src={Kits} />,
    link: "/kit",
  },
  {
    title: "User Management",
    icon: <img src={UserIcon} />,
    link: "/users",
  },
  {
    title: "Business Profile",
    icon: <img src={Business} />,
    link: "/businessprofile",
  },
  {
    title: "Distributors",
    icon: <img src={Distributors} />,
    link: "/distributors",
  },
  {
    title: "Reports",
    icon: <img src={Reports} />,
    link: "/reports",
  },
  {
    title: "Resources",
    icon: <img src={Resources} />,
    link: "/resource",
  },
  {
    title: "Message Center",
    icon: <img src={Bell} />,
    link: "/messaging",
  },
  {
    title: "Notifications",
    icon: <img src={Bell} />,
    link: "/notifications",
  },
];
