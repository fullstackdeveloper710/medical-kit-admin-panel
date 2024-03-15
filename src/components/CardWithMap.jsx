import { Card } from "react-bootstrap";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import "./CardWithMapStyles.css";

const CardWithMap = () => {
  return (
    <Card className="reported_incidents border-0 overflow-hidden">
      <Card.Body className="pb-0">
        <h4>Reported Incidents</h4>
      </Card.Body>
      <span className="px-3">Past 7 Days</span>
      <div className="map-container">
        <ComposableMap
          projectionConfig={{
            scale: 400,
            rotation: [-11, 0, 0],
          }}
          width={100}
          style={{ width: "100%", height: "100%" }}
        >
          <Geographies geography="/features.json">
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
