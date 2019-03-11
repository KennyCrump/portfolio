import React, { Component } from "react";
import "./Home.scss";

//UNUSED COMPONENT, USED VANILLA JS FOR CHANGING CLIP-PATH EFFECT, BUT ENDED UP USING SIMPLER HOME PAGE. KEEPING FOR FUTURE REFERENCE.
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 30,
      menuToggle: false
    };
  }
  showMenu = e => {
    this.setState({ menuToggle: true });
    e.stopPropagation();
  };
  onMouseMove = e => {
    const width = this.refs.titleContainer.clientWidth;
    const height = this.refs.titleContainer.clientHeight;
    const offsetX = (e.nativeEvent.offsetX / width) * 100;
    const offsetY = (e.nativeEvent.offsetY / height) * 100;
    console.log("X: ", Math.floor(offsetX), "Y :", Math.floor(offsetY));
    this.setState({
      x: offsetX,
      y: offsetY
    });
  };
  onMouseOut = () => {
    this.setState({x: 0, y: 30})
}

render() {
  // const { text } = this.props;
  const { x, y } = this.state;
  const maskStyle = {
    "--maskX": x,
    "--maskY": y
  };
    return (
      <div className="titleContainer"
        onMouseMove={this.onMouseMove}
        onMouseOut={this.onMouseOut}
        onClick={() => this.setState({ menuToggle: false })}
        ref="titleContainer"
        style={maskStyle}
      >
        <div className="titleWrapper">
            <img src="https://i.ibb.co/hXwL0BG/portfolio-collage-2.jpg" alt="background" />
        </div>
        <div className="titleWrapper cloneWrapper">
            <img src="http://www.zotographics.com/blog_img//istock_000053598896_large_korr2.jpg" alt="visual effect" />
        </div>
      </div>
    );
  }
}

export default Home;
