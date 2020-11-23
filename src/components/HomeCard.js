import React from "react";
import "../App.css";

const HomeCard = (props) => {
  return (
    <div>
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
          <br />
        </div>
      </div>

      <div className="ui move reveal">
        Hey!
        <div className="visible content">
          <img
            src="/images/wireframe/square-image.png"
            className="ui small image"
            alt="placeholder"
          />
        </div>
        <div className="hidden content">
          <img
            src="/images/avatar/large/chris.jpg"
            className="ui small image"
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
