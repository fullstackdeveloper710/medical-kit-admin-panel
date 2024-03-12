import ProtectedRoute from "../components/Common/ProtectedRoute";
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
import CreateUser from "../pages/UserManagement/CreateUser/CreateUser";
import UserManagement from "../pages/UserManagement/UserManagement/UserManagent";
import Users from "../pages/UserManagement/Users";
import Login from "../pages/Login";
import Layout from "../layout";
import PublicRoute from "../components/Common/PublicRoute";
const RouterData = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout>
          <Dashboard />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "/users",
    element: (
      <ProtectedRoute>
        <Layout>
          <Users />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/products",
    element: (
      <ProtectedRoute>
        <Layout>
          <Products />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/kit",
    element: (
      <ProtectedRoute>
        <Layout>
          <Kits />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/messaging",
    element: (
      <ProtectedRoute>
        <Layout>
          <MessageCentre />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/editarticle",
    element: (
      <ProtectedRoute>
        <Layout>
          <EditArticle />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/businessprofile",
    element: (
      <ProtectedRoute>
        <Layout>
          <BusinessProfile />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/edit-notification",
    element: (
      <ProtectedRoute>
        <Layout>
          <EditNotification />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/resource",
    element: (
      <ProtectedRoute>
        <Layout>
          <Resource />
        </Layout>
      </ProtectedRoute>
    ),
  },

  {
    path: "/distributors",
    element: (
      <ProtectedRoute>
        <Layout>
          <Distributor />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/distributorinfo",
    element: (
      <ProtectedRoute>
        <Layout>
          <DistributorInformation />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/reports",
    element: (
      <ProtectedRoute>
        <Layout>
          <Reports />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/reporteditor",
    element: (
      <ProtectedRoute>
        <Layout>
          <ReportEditor />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/notifications",
    element: (
      <ProtectedRoute>
        <Layout>
          <Notifications />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/user-management",
    element: (
      <ProtectedRoute>
        <Layout>
          <UserManagement />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/create-users",
    element: (
      <ProtectedRoute>
        <Layout>
          <CreateUser />
        </Layout>
      </ProtectedRoute>
    ),
  },
];

export default RouterData;
