import ReactDOM from "react-dom/client";
import {HashRouter, Route, Routes, useLocation} from "react-router-dom";

import "animate.css";
import "./styles/main.sass";
import MePage from "./pages/Me/Me";

function NavigationRenderer() {

  const location = useLocation();

  // List of pages with navigation shown
  return [
    "/chats",
    "/me",
    "/settings"
  ].includes(location.pathname) ? (
      <Navigation />
    ) : null;
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/chats" element={<ChatsPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/me" element={<MePage />} />
          <Route path="/user" element={<UserPage />} />

          <Route path="/signIn" element={<SignInPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
        </Routes>
);

// Clear expired notifications
setInterval(clearExpiredNotifications, 1000);
