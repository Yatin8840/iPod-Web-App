import React from "react";
import "../CSS/wheelcolor.css";
class Wheelcolor extends React.Component {
  render() {
    const { active } = this.props;
    return (
      <div className="wheel-color">
        <h2>Wheel color Select</h2>
        <ul>
          {["Black", "Off-White", "Blue"].map((element, id) => {
            return active === id ? (
              <li key={id} className="active">
                {element}
              </li>
            ) : (
              <li key={id} className="theme-li">{element}</li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Wheelcolor;
