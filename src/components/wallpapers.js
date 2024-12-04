import React from "react";
import "../CSS/wallpaper.css";
class Wallpapers extends React.Component {
  render() {
    const { active } = this.props;
    return (
      <div className="wallpaper">
        <h2>Wallpaper Select</h2>
        <ul>
          {["Wallpaper 1", "wallpaper 2", "wallpaper 3"].map((element, id) => {
            return active === id ? (
              <li key={id} className="active">
                {element}
              </li>
            ) : (
              <li key={id} className="theme-li">
                {element}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Wallpapers;
