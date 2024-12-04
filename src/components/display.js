import React from "react";
import Navbar from "./navbar";
import Lockscreen from "./lockscrn";
import "../CSS/display.css";
import Menu from "./menu";
import Musicc from "./music";
import Setting from "./setting";
import Song from "./song";
import Plaaying from "./playing";
import Wheelcolor from "./wheelcolor";
import Wallpapers from "./wallpapers";
import Theme from "./theme";
class Display extends React.Component {
  render() {
    const {
      active,
      currentmenu,
      menuitems,
      musicitems,
      songnames,
      playing,
      songindex,
      audio,
      songurl,
      songimg,
      wallpaper,
      wallpapers,
      notification,
      notificationmessage,
      setNotification,
    } = this.props;
    return (
      <div
        className="display"
        style={{ backgroundImage: `url(${wallpapers[wallpaper]})` }}
      >
        <Navbar
          notification={notification}
          setNotification={setNotification}
          playing={playing}
          notificationmessage={notificationmessage}
        />
        {currentmenu === -2 && <Lockscreen />}
        {currentmenu === -1 && (
          <Menu songimg={songimg} menuitems={menuitems} active={active} />
        )}
        {currentmenu === 1 && <Musicc musicitems={musicitems} active={active} />}
        {currentmenu === 2 && (
          <div className="blank">
            <h1 className="div-heading">Games</h1>
          </div>
        )}
        {(currentmenu === 3) && <Setting active={active} />}
        {currentmenu === 4 && <Song songnames={songnames} active={active} />}
        {currentmenu === 5 && (
          <div className="blank">
            <h1 className="div-heading">Artist</h1>
          </div>
        )}
        {currentmenu === 6 && (
          <div className="blank">
            <h1 className="div-heading">Albums</h1>
          </div>
        )}
        {(currentmenu === 0 || currentmenu === 7) && (
          <Plaaying
            songimg={songimg}
            songurl={songurl}
            audio={audio}
            playing={playing}
            songindex={songindex}
            songnames={songnames}
          />
        )}
        {currentmenu === 8 && <Theme active={active} />}
        {currentmenu === 9 && <Wheelcolor active={active} />}
        {currentmenu === 10 && <Wallpapers active={active} />}
      </div>
    );
  }
}
export default Display;
