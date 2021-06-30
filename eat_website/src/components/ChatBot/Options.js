import React from "react";

export const IntroOptions = (props) => {
  const options = [
    {
      text: "I would like to be shown all available assistive technologies.",
      handler: () => {
        props.actionProvider.generalHandler(
          "Click on the link below to go to our Resources page which contains all of the assistive technologies offered!",
          "ResourcesLinks"
        );
      },
      id: 1,
    },
    {
      text: "I would like to identify assistive technologies that I may need.",
      handler: () => {
        props.actionProvider.generalHandler(
          "Allow us to guide you to potential assistive technologies you may need by choosing an option below.",
          "QuizOptions"
        );
      },
      id: 2,
    },
    {
      text: "I know what assistive technology I would like to order.",
      handler: () => {
        props.actionProvider.generalHandler(
          "Great! Click on the link below to be directed to MyIT to order an assistive technology.",
          "ATOrders"
        );
      },
      id: 3,
    },
    {
      text: "I have a suggestion for assistive technologies.",
      handler: () => {
        props.actionProvider.generalHandler(
          "Fantastic! Click on the link below to be directed our suggestion form.",
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

export const QuizOptions = (props) => {
  const options = [
    {
      text: "My eyes hurt when looking at the computer screen for too long or I am visually impaired.",
      handler: () => {
        props.actionProvider.generalHandler(
          "Which one of these options pertains more to you?",
          "VisualOptions"
        );
      },
      id: 5,
    },
    {
      text: "I find it hard to hear or clearly understand when others are speaking.",
      handler: () => {
        props.actionProvider.generalHandler(
          "Here are some assistive technologies that convert text to speech.",
          "AuditoryLinks"
        );
      },
      id: 6,
    },
    {
      text: "Neither of these options pertain to me.",
      handler: () => {
        props.actionProvider.generalHandler(
          "If you have any suggestions regarding assistive technology that may enhance your productivity, please fill out the suggestion form linked below.",
          "ATSuggestions"
        );
      },
      id: 7,
    },
  ];
  const optionsMarkup = options.map((option) => (
    <button className="option-button" key={option.id} onClick={option.handler}>
      {option.text}
    </button>
  ));

  return <div className="options-container">{optionsMarkup}</div>;
};

export const VisualOptions = (props) => {
  const options = [
    {
      text: "I need technologies related to braille.",
      handler: () => {
        props.actionProvider.generalHandler(
          "Here are the technologies that we offer!",
          "BrailleLinks"
        );
      },
      id: 8,
    },
    {
      text: "The words on the screen are too small for me to read.",
      handler: () => {
        props.actionProvider.generalHandler(
          "The technologies below will allow for magnification of your computer screen.",
          "MagnifyLinks"
        );
      },
      id: 9,
    },
    {
      text: "I would like to listen to the text on the screen.",
      handler: () => {
        props.actionProvider.generalHandler(
          "Each of the technologies below include screen readers and text-to-speech.",
          "SpeechLinks"
        );
      },
      id: 10,
    },
    {
      text: "The screen is too bright and it strains my eyes.",
      handler: () => {
        props.actionProvider.generalHandler(
          "Dark mode is perfect for you! Click on the link below to find out how to enable dark mode.",
          "DarkLinks"
        );
      },
      id: 11,
    },
  ];

  const optionsMarkup = options.map((option) => (
    <button className="option-button" key={option.id} onClick={option.handler}>
      {option.text}
    </button>
  ));

  return <div className="options-container">{optionsMarkup}</div>;
};
