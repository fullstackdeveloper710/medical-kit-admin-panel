import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export const createMenus = {
  "/": null,
  "/businessprofile": null,
  "/products": [
    { title: "Create Products", link: "/" },
    { title: "Import Products", link: "/" },
    { title: "Export Products", link: "/" },
  ], 

  "/kit": [
    { title: "Create Kits", link: "/" },
    { title: "Import Kits", link: "/" },
    { title: "Export Kits", link: "/" },
  ],

    "/users": [
    { title: "Invite Admin", link: "/user-management" },
    { title: "Create Users", link: "/create-users" },
    { title: "Import Users", link: "/" },
    { title: "Export Users", link: "/" },

  ],
  "/distributors": [
    { title: "Create Distributors", link: "/distributorinfo" },
    { title: "import Distributors", link: "/" },
    { title: "Export Distributors", link: "/" },
  ],
  "/reports": [
    { title: "Create Report", link: "/reporteditor" },
    { title: "Create Group", link: "" },
  ],  

  "/resource": [{ title: "Upload Files", link: "./" }],
  "/messaging": [
    { title: "Create article", link: "/editarticle" },
    { title: "Create Notification", link: "/edit-notification" },
  ],
  "/notifications": null,
};

const CreateActions = ({ title, link }) => {
  return (
    <Col xs={12} md={4}>
      <Card style={{ borderRadius: 16, border: "none" }}>
        <Link to={link} style={{ textDecoration: "none", color: "inherit" }}> {/* Apply inline style */}
          <Button variant="primary" className="icon-button">
            <FaPlus className="icon" />
            <h3 className="button-text m-1">{title}</h3>
          </Button>
        </Link>
      </Card>
    </Col>
  );
};


const RenderCreateMenus = ({ pathname }) => {
  return (
    <div>
    <Row
      className={`text-row kits_row top_btns   ${
        pathname === "/" ? "d-none  " : "justify-content-start"
      }`}
    >
      {createMenus[pathname] &&
        Array.isArray(createMenus[pathname]) &&
        createMenus[pathname].map((menuItem, i) => {
          if (typeof menuItem === "string") {
            return (
              <CreateActions
                key={i}
                title={menuItem}
                link={`/${menuItem.toLowerCase().replace(" ", "-")}`}
              />
            );
          } else if (menuItem && menuItem.title && menuItem.link) {
            return (
              <CreateActions
                key={i}
                title={menuItem.title}
                link={menuItem.link}
              />
            );
          } else {
            return null;
          }
        })}
    </Row>
  </div>
  );
};

export default RenderCreateMenus;