import React from "react";
import game from "../media/game.jpg";
import music from "../media/music.jpg";
import setting from "../media/settings.png";
import "../CSS/menu.css";
class Menu extends React.Component {
  render() {
    const { active, menuitems, songimg } = this.props;
    return (
      <div className="menu-container">
        <div className="menu-items">
          <ul>
            {menuitems.map((element, id) => {
              return active === id ? (
                <li key={id} className="active">
                  {element}
                </li>
              ) : (
                <li key={id}>{element}</li>
              );
            })}
          </ul>
        </div>
        <div className="menu-images">
          {active === 0 && (
            <img src={songimg} alt="" className="menu-image"></img>
          )}
          {active === 1 && (
            <img src={music} alt="" className="menu-image"></img>
          )}
          {active === 2 && <img src={game} alt="" className="menu-image"></img>}
          {active === 3 && (
            <img src={setting} alt="" className="menu-image"></img>
          )}
        </div>
      </div>
    );
  }
}
export default Menu;
