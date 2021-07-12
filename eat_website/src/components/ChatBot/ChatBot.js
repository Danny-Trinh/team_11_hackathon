import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import config from "./config";
// import { GrClose } from "react-icons/gr";
import { AiFillCloseSquare } from "react-icons/ai";
import { IoIosChatboxes } from "react-icons/io";

export default function ChatBot(props) {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="shadow-sm bg-body rounded"
          style={{
            position: "fixed",
            bottom: "5%",
            right: "2%",
          }}
        >
          <IoIosChatboxes size="40" />
        </button>
      )}

      {open && (
        <div
          className="border border-dark shadow bg-body rounded"
          style={{
            position: "fixed",
            // bottom: "3%",
            bottom: "0",
            right: "2%",
          }}
        >
          <button
            className="p-0 m-0 border-0"
            onClick={() => setOpen(false)}
            style={{
              position: "fixed",
              zIndex: "10",
              right: "2.1%",
              color: "#0076CE",
            }}
          >
            <AiFillCloseSquare size="35" />
          </button>
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
          />
        </div>
      )}
    </React.Fragment>
  );
}
