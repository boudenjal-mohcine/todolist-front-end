import { FunctionComponent } from "react";

interface ShapeProps {}

const Shape: FunctionComponent<ShapeProps> = () => {
  return (
    <div className="background">
      <div className="shape"></div>
      <div className="shape"></div>
    </div>
  );
};

export default Shape;
