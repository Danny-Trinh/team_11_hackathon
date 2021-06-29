import React from "react";

export const LinkList = (props) => {
  const linkMarkup = props.options.map((link) => (
    <div key={link.id} className="option-button">
      <a
        className="option-link"
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.text}
      </a>
    </div>
  ));

  return <div className="options-container">{linkMarkup}</div>;
};
