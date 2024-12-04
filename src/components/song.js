import React from "react";
import "../CSS/song.css";
class Song extends React.Component {
  render() {
    const { songnames, active } = this.props;
    return (
      < div className="song">
        <div className="song-items">
        <h2>songs</h2>
        <ul>
          {songnames.map((Element, id) => {
            return active === id ? (
              <li key={id} className="active">
                {Element}
              </li>
            ) : (
              <li key={id}>{Element}</li>
            );
          })}
        </ul>
        </div>
      </div>
    );
  }
}
export default Song;
