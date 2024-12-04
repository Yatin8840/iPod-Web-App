import React from "react";
import Display from "./display";
import Wheel from "./wheel";
import "../CSS/merge.css"
class Merge extends React.Component {
  render() {
    const {
      songindex,
      active,
      menuitems,
      musicitems,
      songnames,
      playing,
      theme,
      audio,
      songurl,
      songimg,
      wheelcolor,
      wallpaper,
      wallpapers,
      notification,
      notificationmessage,
      changeMenuBackward,
      changeMenuforward,
      updateActiveMenu,
      togglePlayPause,
      songForward,
      songBackward,
      setNotification,
      currentmenu,
      currentMenuID,
    } = this.props;
    return (
      <div className="ipod-container">
        <div style={{ backgroundColor: theme }} className="ipod">
          <Display
            songindex={songindex}
            playing={playing}
            active={active}
            musicitems={musicitems}
            menuitems={menuitems}
            currentmenu={currentmenu}
            songnames={songnames}
            audio={audio}
            songurl={songurl}
            songimg={songimg}
            wallpaper={wallpaper}
            wallpapers={wallpapers}
            notification={notification}
            setNotification={setNotification}
            notificationmessage={notificationmessage}
          />
          <Wheel
            theme={theme}
            active={active}
            menuitems={menuitems}
            currentmenu={currentmenu}
            changeMenuBackward={changeMenuBackward}
            changeMenuforward={changeMenuforward}
            updateActiveMenu={updateActiveMenu}
            togglePlayPause={togglePlayPause}
            songBackward={songBackward}
            songForward={songForward}
            wheelcolor={wheelcolor}
          />
        </div>
      </div>
    );
  }
}
export default Merge;
