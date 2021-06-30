import { createChatBotMessage } from "react-chatbot-kit";

import { IntroOptions } from "./Options";
import { QuizOptions } from "./Options";
import { VisualOptions } from "./Options";

import { LinkList } from "./Lists";

const config = {
  botName: "Dell",
  initialMessages: [
    createChatBotMessage("Hello, how may I help you today?", {
      widget: "IntroOptions",
    }),
  ],
  customComponents: {
    // Replaces the default header
    header: () => (
      <div
        className="rounded p-2"
        style={{
          borderTopRightRadius: "5px",
          borderTopLeftRadius: "5px",
          backgroundColor: "#efefef",
          fontFamily: "Arial",
          fontSize: "0.85rem",
          color: "#514f4f",
          padding: "12.5px",
          fontWeight: "bold",
        }}
      >
        Dell Help Bot
      </div>
    ),

    //   // Replaces the default bot avatar
    botAvatar: () => {},
    //   // Replaces the default user icon
    userAvatar: () => {},
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "#0076CE",
    },
    chatButton: {
      backgroundColor: "#0076CE",
    },
  },
  widgets: [
    {
      widgetName: "IntroOptions",
      widgetFunc: (props) => <IntroOptions {...props} />,
    },
    {
      widgetName: "QuizOptions",
      widgetFunc: (props) => <QuizOptions {...props} />,
    },
    {
      widgetName: "VisualOptions",
      widgetFunc: (props) => <VisualOptions {...props} />,
    },
    {
      widgetName: "ATOrders",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Order Assistive Technology",
            url: "https://dell.service-now.com/sp?id=sc_cat_item&sys_id=2da66d591b2e68d0167b759d1e4bcb10",
            id: 5,
          },
        ],
      },
    },
    {
      widgetName: "ATSuggestions",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Assistive Technology Suggestion Form",
            url: "https://forms.office.com/Pages/ResponsePage.aspx?id=mhlclKKDgE6fjFqRvldS3SHp4vSNuFFBuaZHJ2ZazQ1UOUcyVzVTUDJNQlFJMTYzUjI3TE9HTjRUMi4u&fswReload=1&fswNavStart=1624993147361",
            id: 6,
          },
        ],
      },
    },
    {
      widgetName: "ATSuggestions",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Assistive Technology Suggestion Form",
            url: "https://forms.office.com/Pages/ResponsePage.aspx?id=mhlclKKDgE6fjFqRvldS3SHp4vSNuFFBuaZHJ2ZazQ1UOUcyVzVTUDJNQlFJMTYzUjI3TE9HTjRUMi4u&fswReload=1&fswNavStart=1624993147361",
            id: 6,
          },
        ],
      },
    },
    {
      widgetName: "BrailleLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "JAWS (Jobs Access With Speech)",
            url: "https://dell.service-now.com/sp?id=sc_cat_item&sys_id=2da66d591b2e68d0167b759d1e4bcb10",
            id: 7,
          },
          {
            text: "Braillenote Touch 32 Plus",
            url: "https://dell.service-now.com/sp?id=sc_cat_item&sys_id=2da66d591b2e68d0167b759d1e4bcb10",
            id: 8,
          },
          {
            text: "Focus 40 Blue",
            url: "https://dell.service-now.com/sp?id=sc_cat_item&sys_id=2da66d591b2e68d0167b759d1e4bcb10",
            id: 9,
          },
        ],
      },
    },
    {
      widgetName: "MagnifyLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Windows Magnifier",
            url: "https://support.microsoft.com/en-us/windows/use-magnifier-to-make-things-on-the-screen-easier-to-see-414948ba-8b1c-d3bd-8615-0e5e32204198",
            id: 10,
          },
          {
            text: "ZoomText",
            url: "https://dell.service-now.com/sp?id=sc_cat_item&sys_id=2da66d591b2e68d0167b759d1e4bcb10",
            id: 11,
          },
        ],
      },
    },
    {
      widgetName: "SpeechLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "JAWS (Jobs Access With Speech)",
            url: "https://dell.service-now.com/sp?id=sc_cat_item&sys_id=2da66d591b2e68d0167b759d1e4bcb10",
            id: 12,
          },
          {
            text: "Immersive Reader",
            url: "https://support.microsoft.com/en-us/topic/use-immersive-reader-in-microsoft-teams-a700c0d0-bc53-4696-a94d-4fbc86ac7a9a",
            id: 13,
          },
          {
            text: "Read Aloud",
            url: "https://support.microsoft.com/en-us/office/listen-to-your-word-documents-5a2de7f3-1ef4-4795-b24e-64fc2731b001",
            id: 14,
          },
          {
            text: "NVDA (NonVisual Desktop Access)",
            url: "https://inside.dell.com/community/active/assistive-technology/pages/resources",
            id: 15,
          },
          {
            text: "SofType5",
            url: "https://dell.service-now.com/sp?id=sc_cat_item&sys_id=2da66d591b2e68d0167b759d1e4bcb10",
            id: 16,
          },
          {
            text: "Natural Reader",
            url: "https://dell.service-now.com/sp?id=sc_cat_item&sys_id=2da66d591b2e68d0167b759d1e4bcb10",
            id: 17,
          },
        ],
      },
    },
    {
      widgetName: "DarkLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Dark Mode",
            url: "https://support.microsoft.com/en-us/windows/use-color-filters-in-windows-10-43893e44-b8b3-2e27-1a29-b0c15ef0e5ce",
            id: 18,
          },
        ],
      },
    },
    {
      widgetName: "AuditoryLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Closed Captions in Teams",
            url: "https://support.microsoft.com/en-us/office/use-live-captions-in-a-teams-meeting-4be2d304-f675-4b57-8347-cbd000a21260",
            id: 19,
          },
          {
            text: "Closed Captions in Zoom",
            url: "https://support.zoom.us/hc/en-us/articles/207279736-Managing-and-viewing-closed-captioning#h_4cb4e874-d574-4e40-ab12-7d8fae1f71cc",
            id: 20,
          },
          {
            text: "Naturally Speaking",
            url: "https://dell.service-now.com/sp?id=sc_cat_item&sys_id=2da66d591b2e68d0167b759d1e4bcb10",
            id: 21,
          },
        ],
      },
    },
    {
      widgetName: "ResourcesLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Resources",
            // url: "https://main.d256nnve9tolai.amplifyapp.com/ResourcePage",
            link: "/ResourcePage",
            id: 22,
          },
        ],
      },
    },
  ],
};

export default config;

// {
//   text: "Dictate",
//   url: "https://support.microsoft.com/en-us/office/dictate-in-microsoft-365-eab203e1-d030-43c1-84ef-999b0b9675fe",
//   id: 12,
// },
