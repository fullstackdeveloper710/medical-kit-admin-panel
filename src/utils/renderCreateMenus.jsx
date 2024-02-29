import { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
let createMenus = {
  "/": null,
  "/businessprofile": null,
  "/products": ["Create Products", "Import Products", "Export Products"],
  "/kit": ["Create Kits", "Import Kits", "Export Kits"],
  "/users": ["Invite Admin", "Create Users", "Import Users", "Export Users"],
  "/distributors": [
    "Create Distributors",
    "import Distributors",
    "Export Distributors",
  ],
  "/reports": ["Create Report", "Create Group"],
  "/resource": ["Upload Files"],
  "/messaging": ["Create article", "Create Notification"],
  "/notifications": null,

};

const CreateActions = ({ title }) => {
  return (
    <Col xs={12} md={4}>
      <Card style={{ borderRadius: 16,border:'none'}}>
        <Button variant="primary" className="icon-button">
          <FaPlus className="icon" />
          <h3 className="button-text m-1">{title}</h3>
        </Button>
      </Card>
    </Col>
  );
};
const RenderCreateMenus = ({ pathname }) => {
  return (
    <Container>
      <Row className="align-items-center text-row kits_row px-4">
        <div className="d-flex justify-content-start align-items-center gap-4">
          {createMenus[pathname] === null
            ? null
            : createMenus[pathname].map((x, i) => {
                return <CreateActions key={i} title={x} />
              })}
        </div>
        
      </Row>
    </Container>
  );
};

export default RenderCreateMenus;
