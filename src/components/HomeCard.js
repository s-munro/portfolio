import React from "react";
import "../App.css";

const HomeCard = (props) => {
  return (
    <div className="section-container">
      <div class="ui segment">
        <div>
          {props.content}

          {/* <h1 class="ui left floated header title">Sam Munro</h1> */}
        </div>
        <div class="ui clearing divider"></div>
        <button class="ui secondary button">Github</button>
        <button class="ui secondary button">Projects</button>
        {/* <button class="ui secondary button">Education</button> */}
        <button class="ui secondary button">Resume</button>
        <button class="ui linkedin button">
          <i class="linkedin icon"></i>
          LinkedIn
        </button>
      </div>
    </div>
  );
};

export default HomeCard;
