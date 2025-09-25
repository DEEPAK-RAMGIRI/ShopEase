import React, { useEffect } from 'react';
import './chatbot.css';
function App() {
  useEffect(() => {
    if (!document.querySelector('script[src*="dialogflow-console"]')) {
      const script = document.createElement("script");
      script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div>


      <df-messenger
        intent="WELCOME"
        chat-title="BLUE"
        agent-id="e8ef2644-fbd7-4d7b-89fc-c098fc09f361"
        language-code="en"
        chat-icon="https://ibb.co/qLXZxLfW"


        style={{
        '--df-messenger-font-color': '#000000',
        '--df-messenger-button-titlebar-color': '#000ffff',     // Title bar & FAB
        '--df-messenger-chat-background-color': 'FEFAE0',     // Background                // Text
        '--df-messenger-send-icon': '#000000',                   // Send button
        '--df-messenger-user-message': '#5eead4',              // Your messages
        '--df-messenger-bot-message': '#e2e8f0'                // Bot messages
      }}
      ></df-messenger>
    </div>
  );
}

export default App;
