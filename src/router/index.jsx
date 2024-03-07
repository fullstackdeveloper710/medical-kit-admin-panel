import BusinessProfile from "../pages/BusinessProfile";
import Dashboard from "../pages/Dashboard/Dashboard";
import Distributor from "../pages/Distributors/Distributor";
import DistributorInformation from "../pages/Distributors/DistributorInformation";
import Kits from "../pages/KitManagement/Kits";
import EditArticle from "../pages/MessageCentre/EditArticle/EditArticle";
import EditNotification from "../pages/MessageCentre/EditNotification/EditNotification";
import MessageCentre from "../pages/MessageCentre/MessageCentre";
import Notifications from "../pages/Notifications/Notification";
import Products from "../pages/Products/Products";
import ReportEditor from "../pages/ReportManagement/ReportEditor";
import Reports from "../pages/ReportManagement/Reports";
import Resource from "../pages/ResourceManagement/Resource";
import Users from "../pages/UserManagement/Users";
const RouterData= [
    {
        path:"/",
        element:<Dashboard/>
    },
    {
        path:"/users",
        element:<Users/>
    },
    {
        path:"/products",
        element:<Products/>
    },
    {
        path:"/kit",
        element:<Kits />
    },
    {
        path:"/messaging",
        element:<MessageCentre />
    },
    {
        path:"/editarticle",
        element:<EditArticle />
    },
    {
        path:"/businessprofile",
        element:<BusinessProfile />
    },
    {
        path:"/edit-notification",
        element:<EditNotification />
    },
    {
        path:"/resource",
        element:<Resource />
    },
    
    {
        path:"/distributors",
        element:<Distributor />
    },
    {
        path:"/distributorinfo",
        element:<DistributorInformation />
    },
    {
        path:"/reports",
        element:<Reports />
    },
    {
        path:"/reporteditor",
        element:<ReportEditor />
    },
    {
        path:"/notifications",
        element:<Notifications />
    }

]

export default RouterData;







