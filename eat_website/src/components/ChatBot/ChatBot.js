import React, { Component } from "react";
import Chatbot from "react-chatbot-kit";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import config from "./config";

export default class ChatBot extends Component {
  render() {
    return (
      <div>
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </div>
    );
  }
}
