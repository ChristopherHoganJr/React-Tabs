import React, { useState } from "react";
import Content from "./Content";

const Tabs = (props) => {
  const [content, setContent] = useState("Empty Content");

  return (
    <fieldset>
      <legend>Tabs</legend>
      {props.tabs.map((e, idx) => (
        <button
          onClick={() => {
            setContent(e.Content);
          }}
          key={idx}
        >
          {e.Tab}
        </button>
      ))}
      <Content content={content} />
    </fieldset>
  );
};

export default Tabs;
