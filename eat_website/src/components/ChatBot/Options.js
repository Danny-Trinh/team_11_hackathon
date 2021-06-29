import React from "react";

export const IntroOptions = (props) => {
  const options = [
    {
      text: "I would like to be shown all assistive technologies",
      handler: () => {},
      id: 1,
    },
    {
      text: "I would like to identify assistive technologies that I may need",
      handler: () => {},
      id: 2,
    },
    {
      text: "I know what assistive technology I would like to order",
      handler: () => {
        props.actionProvider.generalHandler(
          "Great! Click on the link below to be directed to MyIT to order an assistive technology:",
          "ATOrders"
        );
      },
      id: 3,
    },
    {
      text: "I have a suggestion for assistive technologies",
      handler: () => {
        props.actionProvider.generalHandler(
          "Fantastic! Click on the link below to be directed our suggestion form:",
          "ATSuggestions"
        );
      },
      id: 4,
    },
  ];

  const optionsMarkup = options.map((option) => (
    <button className="option-button" key={option.id} onClick={option.handler}>
      {option.text}
    </button>
  ));

  return <div className="options-container">{optionsMarkup}</div>;
};
