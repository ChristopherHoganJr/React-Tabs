import React from "react";

const Content = (props) => {
  return (
    <fieldset>
      <legend>Content</legend>
      {props.content}
    </fieldset>
  );
};

export default Content;
