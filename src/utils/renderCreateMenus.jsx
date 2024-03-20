import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Import from "../Assets/icons/import.png";
import Create from "../Assets/icons/create.png";
import Export from "../Assets/icons/export.png";
import Invite from "../Assets/icons/invite.png";

export const createMenus = {
  "/": null,
  "/businessprofile": null,
  "/products": [
    {
      title: "Create Products",
      icon: <img src={Create} alt="Product Icon" />,
      link: "",
    },
    {
      title: "Import Products",
      icon: <img src={Import} alt="Import Icon" />,
      link: "",
    },
    {
      title: "Export Products",
      icon: <img src={Export} alt="Export Icon" />,
      link: "",
    },
  ],
  "/kit": [
    {
      title: "Create Kits",
      icon: <img src={Create} alt="Kit Icon" />,
      link: "",
    },
    {
      title: "Import Kits",
      icon: <img src={Import} alt="Import Icon" />,
      link: "",
    },
    {
      title: "Export Kits",
      icon: <img src={Export} alt="Export Icon" />,
      link: "",
    },
  ],
  "/users": [
    {
      title: "Invite Admin",
      icon: <img src={Invite} alt="User Icon" />,
      link: "/user-management",
    },
    {
      title: "Create Users",
      icon: <img src={Create} alt="User Icon" />,
      link: "/create-users",
    },
    {
      title: "Import Users",
      icon: <img src={Import} alt="Import Icon" />,
      link: "",
    },
    {
      title: "Export Users",
      icon: <img src={Export} alt="Export Icon" />,
      link: "",
    },
  ],
  "/distributors": [
    {
      title: "Create Distributors",
      icon: <img src={Create} alt="Distributor Icon" />,
      link: "/distributorinfo",
    },
    {
      title: "import Distributors",
      icon: <img src={Import} alt="Import Icon" />,
      link: "",
    },
    {
      title: "Export Distributors",
      icon: <img src={Export} alt="Export Icon" />,
      link: "",
    },
  ],
  "/reports": [
    {
      title: "Create Report",
      icon: <img src={Create} alt="Report Icon" />,
      link: "/reporteditor",
    },
    {
      title: "Create Group",
      icon: <img src={Create} alt="Create Group Icon" />,
      link: "/creategroupreport",
    },
  ],
  "/resource": [
    {
      title: "Upload Files",
      icon: <img src={Create} alt="Resource Icon" />,
      link: "",
    },
  ],
  "/messaging": [
    {
      title: "Create article",
      icon: <img src={Create} alt="Messaging Icon" />,
      link: "/editarticle",
    },
    {
      title: "Create Notification",
      icon: <img src={Create} alt="Create Notification Icon" />,
      link: "/edit-notification",
    },
  ],
  "/notifications": null,
};

const CreateActions = ({ title, icon, link }) => {
  return (
    <Col md={3}>
      <Card style={{ borderRadius: 16, border: "none" }}>
        <Link to={link} style={{ textDecoration: "none", color: "inherit" }}>
          <Button variant="primary" className="icon-button">
            {icon} {/* Render the provided icon */}
            <h3 className="button-text m-1">{title}</h3>
          </Button>
        </Link>
      </Card>
    </Col>
  );
};

const RenderCreateMenus = ({ pathname }) => {
  return (
    <Row className="kits_row px-4">
      {createMenus[pathname].map((menuItem, i) => {
        return (
          <CreateActions
            key={i}
            title={menuItem.title}
            icon={menuItem.icon}
            link={menuItem.link !== "" ? menuItem.link : null}
          />
        );
      })}
    </Row>
  );
};

export default RenderCreateMenus;
