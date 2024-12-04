import React from "react";
import "../CSS/playing.css";
class Plaaying extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTime: 0,
    };
    this.intervalId = "";
  }
  componentDidMount() {
    const { audio } = this.props;
    this.setState({ currentTime: audio.currentTime });
    this.intervalId = setInterval(() => {
      //to update the time of song in progress bar
      this.setState({ currentTime: this.props.audio.currentTime });
    }, 100);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    const { songimg, audio, playing, songindex, songnames } =
      this.props;
    let currentRendeingTime =
      Math.floor(this.state.currentTime / 60) +
      ":" +
      Math.floor(this.state.currentTime % 60);
    let Audioduration =
      Math.floor(audio.duration / 60) + ":" + Math.floor(audio.duration % 60);
    let CurrentCompleteTimeDuration = {
      width: (this.state.currentTime / audio.duration) * 100 + "%",
    };
    if (Audioduration === "NaN:NaN") {
      Audioduration = "0:00";
    }
    if (Math.floor(this.state.currentTime % 60 < 10)) {
      currentRendeingTime =
        Math.floor(this.state.currentTime / 60) +
        ":0" +
        Math.floor(this.state.currentTime % 60);
    }
    return (
      <div className="playing-container">
        <div className="song-details">
          <img src={songimg} alt="song-img" />
          <div className="song-names">
            <h6>{songnames[songindex]}</h6>
            {playing && <h4 className="play-pause">Playing</h4>}
            {!playing && <h4 className="play-pause">Paused</h4>}
          </div>
        </div>
        <div className="status-bar">
          {currentRendeingTime}
          <div id="progress">
            <div style={CurrentCompleteTimeDuration} id="progress-bar"></div>
          </div>
          {Audioduration}
        </div>
      </div>
    );
  }
}
export default Plaaying;
