// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'Test';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`),{
    widget: 'dogPicture',
  }],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
      margin:'0',
      margin:0
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
};

export default config;