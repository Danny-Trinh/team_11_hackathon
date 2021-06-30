import React from "react";
import { Link } from "react-router-dom";

export const LinkList = (props) => {
  const linkMarkup = props.options.map((link) => (
    <div key={link.id} className="option-button">
      {link.url && (
        <a
          className="option-link"
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.text}
        </a>
      )}
      {link.link && (
        <Link className="option-link" to={link.link}>
          {link.text}
        </Link>
      )}
    </div>
  ));

  return <div className="options-container">{linkMarkup}</div>;
};
