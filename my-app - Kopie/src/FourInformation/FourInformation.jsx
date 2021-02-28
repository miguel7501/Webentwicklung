import React, { Component } from "react";
import ContentFourInformation from "./ContentFourInformation/ContentFourInformation";
import './FourInformation.css';
class FourInformation extends Component {
  state = {
    comp: [
      { headline: "Test1", content: "Lorem Ipsum" },
      { headline: "Test1", content: "Lorem Ipsum" },
      { headline: "Test1", content: "Lorem Ipsum" },
      { headline: "Test1", content: "Lorem Ipsum" },
      { headline: "Test1", content: "Lorem Ipsum" },
      { headline: "Test1", content: "Lorem Ipsum" },
    ],
  };
  handleButtonClick = (event) => {
    console.log(event.target);
  };
  render() {
    const style = {
        display: 'flex',
        flexWrap: 'wrap'
    };
    let content = null;
    if (this.state.comp !== null) {
      content = (
        <div style={style}>
          {this.state.comp.map((comp, index) => {
            return (
              <ContentFourInformation
                headline={comp.headline}
                content={comp.content}
                key={index}
              />
            );
          })}
        </div>
      );
    }
    return<React.Fragment>{content}</React.Fragment>;
  }
}

export default FourInformation;
