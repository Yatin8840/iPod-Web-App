import React from "react";
import"../CSS/music.css"
class Musicc extends React.Component{
  render(){
    const{ musicitems, active}=this.props;
    return(
      <div className="music">
        <h3>Music</h3>
        <ul>
          {musicitems.map((Element,id)=>{
            return active===id?<li key={id} className="active">{Element}</li>:<li key={id}>{Element}</li>
          })}
        </ul>
      </div>
    )
  }
}
export default Musicc;