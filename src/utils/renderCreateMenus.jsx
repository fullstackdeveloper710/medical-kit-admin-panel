import { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
let createMenus = {
  "/": null,
  "/businessprofile": null,
  "/products": ["Create Products", "Import Products", "Export Products"],
  "/kit": ["Create Kits", "Import Kits", "Export Kits"],
  "/users": [
    { title: "Invite Admin", link: "/user-management" },
    "Create Users",
    "Import Users",
    "Export Users",
  ],
  "/distributors": [
    "Create Distributors",
    "import Distributors",
    "Export Distributors",
  ],
  "/reports": ["Create Report", "Create Group"],
  "/resource": ["Upload Files"],
  "/messaging": [
    { title: "Create article", link: "/editarticle" },
    { title:"Create Notification", link: "/edit-notification" },
  ],
  "/notifications": null,
};

const CreateActions = ({ title, link }) => {
  return (
    <Col xs={12} md={4}>
      <Card style={{ borderRadius: 16, border: "none" }}>
        <Link to={link}>
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
    <Container>
      <Row className={`text-row kits_row px-4 ${pathname === '/' ? '' : 'align-items-center'}`}>
        <div className="d-flex justify-content-start align-items-center gap-4">
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
        </div>
      </Row>
    </Container>
  );
};

export default RenderCreateMenus;
