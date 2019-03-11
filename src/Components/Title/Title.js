import React, { Component } from "react";
import "./Title.scss";

//SIMILAR TO HOME COMPONENT, WENT WITH SIMPLER DESIGN, BUT LEAVING FOR FUTURE REFERENCE.
class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 50
    };
  }

  onMouseMove = e => {
    const width = this.refs.textContainer.clientWidth;
    const height = this.refs.textContainer.clientHeight;
    const offsetX = (e.nativeEvent.offsetX / width) * 100;
    const offsetY = (e.nativeEvent.offsetY / height) * 100;
    console.log("X: ", Math.floor(offsetX), "Y :", Math.floor(offsetY));
    this.setState({
      x: offsetX,
      y: offsetY
    });
  };

  onMouseOut = () => {
      this.setState({x: 0, y: 50})
  }

  render() {
    const { text, subtext } = this.props;
    const { x, y } = this.state;
    const maskStyle = {
      "--maskX": x,
      "--maskY": y
    };
    return (
      <div className="textContainer" 
      onMouseMove={this.onMouseMove}
      onMouseOut={this.onMouseOut}
      ref='textContainer'
      style={maskStyle}>
        <div className="textWrapper">
          <h1>{text}</h1>
          <h3>{subtext}</h3>
        </div>
        <div className="textWrapper textCloneWrapper">
          <h1>{text}</h1>
          <h3>{subtext}</h3>
        </div>
      </div>
    );
  }
}

export default Title;
