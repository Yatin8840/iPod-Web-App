import React from "react";
import "../CSS/theme.css";
class Theme extends React.Component {
  render() {
    const { active } = this.props;
    return (
      <div className="theme">
        <h2>Theme Select</h2>
        <ul>
          {["Aura", "Matte-G", "rose-Gold", "Queen", "omen"].map(
            (Element, id) => {
              return active === id ? (
                <li key={id} className="active">
                  {Element}
                </li>
              ) : (
                <li key={id} className="theme-li">
                  {Element}
                </li>
              );
            }
          )}
        </ul>
      </div>
    );
  }
}
export default Theme;
