import React from "react";
import "../CSS/nav.css";
import BatImg from "../media/battery.png";
class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      time: this.gettime(),
    }
    this.stateId="";
  }
  componentDidMount(){
    const{notification}=this.props
    if(notification===true){
      return;
    }
    this.stateId=setInterval(()=>{            ///stateid is used to shoow the notification message for 1 sec rather then time
      this.setState({time:this.gettime()})
    },60000); ///interval og 60 sec to update the time
  }
  componentDidUpdate(){
    const{ setNotification,notification}=this.props
    if(notification===true){
      setTimeout(()=>{
        setNotification();

      },1000)
    }
  }
  componentWillUnmount(){
    const{notification}=this.props;
    if(notification!==true){
      clearInterval(this.stateId);
    }
  }

  gettime() {
    const Today = new Date();
    let time = Today.getHours() + ":" + Today.getMinutes();
    if (Today.getMinutes() < 10) {
      time = Today.getHours() + ":0" + Today.getMinutes();
    }
    return time;
  }
  render() {
    const{time}=this.state
    const{notification,notificationmessage}=this.props
    return (
      <>
        <div className="nav">
          <h5 className="heading">ipod</h5>
          {notification===true&&<h5 className="notification">{ notificationmessage}</h5>}
          {notification===false&& <h3>{time}</h3>}
          <img src={BatImg} className="battery"></img>
        </div>
      </>
    );
  }
}
export default Navbar;
