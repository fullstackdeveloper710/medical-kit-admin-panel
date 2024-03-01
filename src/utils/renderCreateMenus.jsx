import { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
let createMenus = {
  "/": null,
  "/businessprofile": null,
  "/products": [
    { title: "Create Products", link: "" },
    { title: "Import Products", link: "" },
    { title: "Export Products", link: "" },
  ],
  "/kit": [
    { title: "Create Kits", link: "" },
    { title: "Import Kits", link: "" },
    { title: "Export Kits", link: "" },
  ],
  "/users": [
    { title: "Invite Admin", link: "/notifications" },
    { title: "Create Users", link: "" },
    { title: "Import Users", link: "" },

    { title: "Export Users", link: "" },
  ],
  "/distributors": [
    { title: "Create Distributors", link: "/distributorinfo" },

    { title: "import Distributors", link: "" },
    { title: "Export Distributors", link: "" },
  ],
  "/reports": [
    { title: "Create Report", link: "" },
    { title: "Create Group", link: "" },
  ],
  "/resource": [{ title: "Upload Files", link: "" }],
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
      <Row className="align-items-center text-row kits_row px-4">
        <div className="d-flex justify-content-start align-items-center gap-4">
          {createMenus[pathname] &&
            createMenus[pathname].map((menuItem, i) => {
              return (
                <CreateActions
                  key={i}
                  title={menuItem.title}
                  link={menuItem.link != "" ? menuItem.link : null}
                />
              );
            })}
        </div>
      </Row>
    </Container>
  );
};

export default RenderCreateMenus;
