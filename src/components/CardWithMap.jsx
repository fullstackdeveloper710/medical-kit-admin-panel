import { Card } from "react-bootstrap";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import "./CardWithMapStyles.css";

const CardWithMap = () => {
  return (
    <Card style={{border:'none'}}>
      <Card.Body>
        <h4 style={{ fontSize: 20, color: "black", fontWeight: "700px" }}>
          Reported Incidents
        </h4>
      </Card.Body>
      <span
        className="px-3"
        style={{ fontSize: 16, color: "#A8A8BD", fontWeight: 400 }}
      >
        Past 7 Days
      </span>

      <div className="map-container">
        <ComposableMap
          projectionConfig={{
            scale: 400,
            rotation: [-11, 0, 0],
          }}
          width={800}
        
          style={{ width: "100%", height: "91vh" }}
        >
          <Geographies  geography="/features.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>
    </Card>
  );
};

export default CardWithMap;
