import React from "react";
import Merge from "./merge";

//////music import
import song1 from "../media/songs/song1.mp3";
import song2 from "../media/songs/song2.mp3";
import song3 from "../media/songs/song3.mp3";
import song4 from "../media/songs/song4.mp3";
import song5 from "../media/songs/song5.mp3";

//////images import
import img1 from "../media/img1.jpeg";
import img2 from "../media/img2.png";
import img3 from "../media/img3.jpg";
import img4 from "../media/img4.jpg";
import img5 from "../media/img5.jpg";

import wallpaper1 from "../media/wallpaper1.jpg";
import wallpaper2 from "../media/wallpaper2.jpg";
import wallpaper3 from "../media/wallpaper3.jpg";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      active: 0, // shows the active option of the menu window
      menuitems: ["Now Playing", "music", "Games", "Settings"],
      musicitems:["All Songs", "Artist","Albums"],
      Music: [song1, song2, song3, song4, song5],
      musicimage: [img1, img2, img3, img4, img5],
      wallpapers: [wallpaper1, wallpaper2, wallpaper3],
      songnames: [
        "Yatin's special",
        "Raghav's Love",
        "Rohan'music",
        "Rupa's special",
        "vanshika's heart",
      ],
      songindex: 0,
      lengthofmenus: { "-1": 3, 1: 2, 4: 4, 8: 4, 3: 2, 9: 3, 10: 2 },
      menumapping: { "-1": [0, 1, 2, 3], 1: [4, 5, 6], 3: [8, 9, 10] },
      currentmenu: -2, //when ipod is locked
      navigation: [], ///used for forward ad backword
      songurl: song1,
      playing: false,
      audio: new Audio(song1),
      songimg: img1,
      wheelcolor: "white",
      wallpaper: 0,
      notification: false,
      notificationmessage: "wallpaper Changed",
      theme:"rgb(210,210,210)"
    };
  }
  //////for song to be in forward direction in list
  songForward = (i) => {
    if (this.state.currentmenu === -2) {
      return;
    }
    if (this.state.playing === false) {
      return;
    }
    if (i.detail.interval < 250) {
      this.state.audio.pause();
      let songindex = this.state.songindex;
      if (songindex === this.state.Music.length - 1) {
        songindex = 0;
      } else {
        songindex++;
      }
      const songurl = this.state.Music[songindex];
      const songimg = this.state.musicimage[songindex];
      this.setState(
        {
          songindex: songindex,
          songimg: songimg,
          songurl: songurl,
          audio: new Audio(songurl),
        },
        () => {
          this.state.audio.play();
        }
      );
    } else if (i.detail.interval > 250 && i.detail.interval < 10000) {
      const interval = i.detail.interval / 100;
      this.setState((prevState) => {
        prevState.audio.currentTime += interval;
        return prevState;
      });
    }
  };
  ///////////for song to be in reverse or backward in list
  songBackward = (i) => {
    if (this.state.currentmenu === -2) {
      return;
    }
    if (this.state.playing === false) {
      return;
    }
    if (i.detail.interval < 250) {
      this.state.audio.pause();
      let songindex = this.state.songindex;
      if (songindex === 0) {
        songindex = this.state.Music.length - 1;
      } else {
        songindex--;
      }
      const songurl = this.state.Music[songindex];
      const songimg = this.state.musicimage[songindex];
      this.setState(
        {
          songindex: songindex,
          songimg: songimg,
          songurl: songurl,
          audio: new Audio(songurl),
        },
        () => {
          this.state.audio.play();
        }
      );
    } else if (i.detail.interval > 250 && i.detail.interval < 10000) {
      const interval = i.detail.interval / 100;
      this.setState((prevState) => {
        prevState.audio.currentTime -= interval;
        return prevState;
      });
    }
  };
  ////////play pause toggle
  togglePlayPause = () => {
    if (this.state.currentmenu === -2) {
      return;
    }
    if (this.state.playing === true) {
      this.setState({ playing: false });
      this.state.audio.pause();
    }else
     {
      this.setState({ playing: true });
      this.state.audio.play();
    }
  };
  /////////for to show the active menu item of the list according to index

  updateActiveMenu = (direction, menu) => {
    if (
      menu !== -1 &&
      menu !== 1 &&
      menu !== 4 &&
      menu !== 8 &&
      menu !== 3 &&
      menu !== 9 &&
      menu !== 10
    ) {
      return;
    }
    let min = 0;
    let max = 0;
    max = this.state.lengthofmenus[menu];
    if (direction === 1) {
      if (this.state.active >= max) {
        this.setState({ active: min });
      } else {
        this.setState({ active: this.state.active + 1 });
      }
    } else {
      if (this.state.active <= min) {
        this.setState({ active: max });
      } else {
        this.setState({ active: this.state.active - 1 });
      }
    }
  };
  ///////////to change the theme of the ipod
  setTheme = (id) => {
    let theme = "";
    if (id === 0) {
      theme = "#f0f0f0";
    } else if (id === 1) {
      theme = "#555d50";
    } else if (id === 3) {
      theme = "#D1CD";
    } else if (id === 4) {
      theme = "#c4aeea";
    }
    else if(id===2){
      theme="#ffcc00"
    }
    this.setState({
      theme: theme,
      notification: true,
      notificationmessage: "Theme Changed",
    });
    return;
  };
  ////////////to change wallpaper
  setWallpaper = (id) => {
    this.setState({
      wallpaper: id,
      notification: true,
      notificationmessage: "Wallpaper Changed",
    });
  };
  ///////////to change wheel color
  SetWheelcolor = (id) => {
    let wheelcolor = "";
    if (id === 0) {
      wheelcolor = "#212121";
    } else if (id === 1) {
      wheelcolor = "#f0f0f0";
    } else if (id === 2) {
      wheelcolor = "#3D5AFE";
    } else if (id === 3) {
      wheelcolor = "#3E2723";
    }
    this.setState({
      wheelcolor: wheelcolor,
      notification: true,
      notificationmessage: " Wheel color Changed",
    });
  };
  changeMenuBackward = () => {
    const navigation = this.state.navigation.slice();
    if (this.state.currentmenu === -2) {
      return;
    } else {
      const prevId = navigation.pop();
      this.setState({ currentmenu: prevId, navigation: navigation, active: 0 });
      return;
    }
  };
  changeMenuforward = (id, fromMenu) => {
    const navigation = this.state.navigation.slice();
    if (
      fromMenu !== -2 &&
      fromMenu !== -1 &&
      fromMenu !== 1 &&
      fromMenu !== 4 &&
      fromMenu !== 3 &&
      fromMenu !== 8 &&
      fromMenu !== 9 &&
      fromMenu !== 0 &&
      fromMenu !== 7 &&
      fromMenu !== 10
    ) {
      return;
    }
    if (fromMenu === -1) {
      navigation.push(this.state.currentmenu);
      this.setState({ currentmenu: id, navigation: navigation, active: 0 });
      return;
    }
    if (fromMenu === -2) {
      navigation.push(this.state.currentmenu);
      this.setState({ currentmenu: -1, navigation: navigation, active: 0 });
      return;
    }
    if (fromMenu === 7 || fromMenu === 0) {
      this.togglePlayPause();
      return;
    }
    if (fromMenu === 8) {
      this.setTheme(id);
      return;
    }
    if (fromMenu === 9) {
      this.SetWheelcolor(id);
      return;
    }
    if (fromMenu === 10) {
      this.setWallpaper(id);
      return;
    }
    navigation.push(this.state.currentmenu);
    if (fromMenu === 4) {
      this.ChangeSongFrmMenu(id, navigation, fromMenu);
      return;
    }
    const CurrentMenuId = this.state.menumapping[fromMenu][id];
    this.setState({
      currentmenu: CurrentMenuId,
      navigation: navigation,
      active: 0,
    });
  };
  ChangeSongFrmMenu = (id, navigation) => {
    const songurl = this.state.Music[id];
    const songimg = this.state.musicimage[id];
    this.state.audio.pause();
    this.setState(
      {
        currentmenu: 7,
        songurl: songurl,
        navigation: navigation,
        active: 0,
        playing: true,
        songindex: id,
        audio: new Audio(songurl),
        songimg: songimg,
      },
      () => {
        this.state.audio.play();
      }
    );
    return;
  };
  setNotification = () => {
    this.setState({ notification: false });
    return;
  };
  render() {
    const {
      active,
      menuitems,
      musicitems,
      wallpapers,
      songnames,
      songindex,
      songurl,
      playing,
      audio,
      songimg,
      wheelcolor,
      wallpaper,
      notification,
      notificationmessage,
      currentmenu,
      theme,
      lengthofmenus,
      menumapping,
      navigation,
      Music,
      musicimage,
    } = this.state;
    return (
      <>
        <Merge
        currentmenu={currentmenu}
          songindex={songindex}
          active={active}
          menuitems={menuitems}
          musicitems={musicitems}
          songnames={songnames}
          playing={playing}
          theme={theme}
          audio={audio}
          songurl={songurl}
          songimg={songimg}
          wheelcolor={wheelcolor}
          wallpaper={wallpaper}
          wallpapers={wallpapers}
          notification={notification}
          notificationmessage={notificationmessage}
          changeMenuBackward={this.changeMenuBackward}
          changeMenuforward={this.changeMenuforward}
          updateActiveMenu={this.updateActiveMenu}
          togglePlayPause={this.togglePlayPause}
          songForward={this.songForward}
          songBackward={this.songBackward}
          setNotification={this.setNotification}
        
        />
      </>
    );
  }
}

export default App;
