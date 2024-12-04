import React from "react";
import { IoIosPlay } from "react-icons/io";
import { IoPauseOutline } from "react-icons/io5";
import { FaForwardFast } from "react-icons/fa6";
import { FaFastBackward } from "react-icons/fa";
import "../CSS/wheel.css";
import ZingTouch from "zingtouch";
class Wheel extends React.Component {
  constructor() {
    super();
    this.state = {
      angle: 0,
    };
  }
  render() {
    const { changeMenuforward, active, currentmenu, theme, wheelcolor } =
      this.props;
    const { angle } = this.state;
    return (
      <div className="wheel-container">
        <div
          className="wheel"
          id="wheel"
          style={{ backgroundColor: wheelcolor }}
        >
          <div className="control-btn" id="menu-btn">
            <div style={{ color: theme }}>Menu</div>
          </div>
          <div className="control-btn" id="forward-btn">
            <FaForwardFast style={{ color: theme }} />
          </div>
          <div className="control-btn" id="playpause-btn">
            <div className="play-pause">
              <IoIosPlay style={{ color: theme }} />
              <IoPauseOutline style={{ color: theme }} />
            </div>
          </div>
          <div className="control-btn" id="reverse-btn">
            <FaFastBackward style={{ color: theme }} />
          </div>
        </div>
        <div
          style={{ backgroundColor: theme }}
          className="middle-blank-circle"
          id="blank"
          onClick={() => {
            changeMenuforward(active, currentmenu);
          }}
        ></div>
      </div>
    );
  }
  WheelController = (e) => {
    const { updateActiveMenu, currentmenu } = this.props;
    if (e.detail.distanceFromOrigin === 0) {
      this.angle = e.detail.angle;
    }
    if (Math.abs(this.angle - e.detail.angle) > 300) {
      this.angle = Math.abs(e.detail.angle);
      if (e.detail.distanceFromLast === 0) {
        return;
      } else if (e.detail.distanceFromLast < 0) {
        updateActiveMenu(1, currentmenu);
      } else {
        updateActiveMenu(0, currentmenu);
      }
    } else if (Math.abs(this.angle - e.detail.angle) > 15) {
      this.angle = Math.abs(e.detail.angle);
      if (e.detail.distanceFromLast === 0) {
        return;
      } else if (e.detail.distanceFromLast > 0) {
        updateActiveMenu(1, currentmenu);
      } else {
        updateActiveMenu(0, currentmenu);
      }
    }
  };
  componentDidMount() {
    const { changeMenuBackward, togglePlayPause, songBackward, songForward } =
      this.props;
    const WheelController = this.WheelController;
    const wheel = document.getElementById("wheel");
    const ActiveWheelRegion = new ZingTouch.Region(wheel);
    const MenuBtn = document.getElementById("menu-btn");
    const Forward = document.getElementById("forward-btn");
    const Reverse = document.getElementById("reverse-btn");
    const PlayPause = document.getElementById("playpause-btn");
    const longTapGesture = new ZingTouch.Tap({
      maxDelay: 10000,
      numInput: 1,
      tolerance: 1,
    });
    ActiveWheelRegion.bind(MenuBtn, "tap", function (e) {
      changeMenuBackward();
    });
    ActiveWheelRegion.bind(wheel, "rotate", function (e) {
      WheelController(e);
    });
    ActiveWheelRegion.bind(PlayPause, "tap", function (e) {
      togglePlayPause();
    });
    ActiveWheelRegion.bind(Reverse, longTapGesture, function (e) {
      songBackward(e);
    });
    ActiveWheelRegion.bind(Forward, longTapGesture, function (e) {
      songForward(e);
    });
  }
}
export default Wheel;
