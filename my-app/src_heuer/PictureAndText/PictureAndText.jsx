import logo from "../logo.svg";
import React, { Component } from "react";

class PictureAndText extends Component {
  state = {
    showPictureAndText: false,
  };
  render() {
    let textAndPicture = null;
    if (this.state.showPictureAndText) {
      textAndPicture = (
        <div>
          <img src={logo} alt="logo" />
          <p>Lorem Ipsum</p>
        </div>
      );
    }
    return (
      <React.Fragment>
        {textAndPicture}
        <button
          onClick={() =>
            this.setState({
              showPictureAndText: !this.state.showPictureAndText,
            })
          }
        >
          Show Element
        </button>
      </React.Fragment>
    );
  }
}

export default PictureAndText;
