import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

//styles
import "./index.css";

// app component
import App from "./App";

// google service
import { GoogleOAuthProvider } from "@react-oauth/google";

// contexts
import ChatContext from "./contexts/ChatContext";
import ToastService from "./contexts/ToastContext";
import { AuthProvider } from "./contexts/AuthContext";
import CallContext from "./contexts/CallContext";
import { CallLogsContext } from "./contexts/CallLogsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="738256653404-d100teh07ha2n3c40gsepbngl7d67o1b.apps.googleusercontent.com">
      <ToastService>
        <AuthProvider>
          <ChatContext>
            <CallLogsContext>
              <CallContext>
                <App />
              </CallContext>
            </CallLogsContext>
          </ChatContext>
        </AuthProvider>
      </ToastService>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

reportWebVitals();
