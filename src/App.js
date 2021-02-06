import { ChatEngine } from "react-chat-engine";
import "./App.css";

import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

const App = () => {

    if(!localStorage.getItem('username')) {
        return <LoginForm/>
    }

    return (
        <ChatEngine
            height = "100vh"
            projectID="36613617-517c-4915-b5b9-04fb03edae95"
            userName = { localStorage.getItem('username') }
            userSecret = { localStorage.getItem('password') }

            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}       // Create our own component "ChatFeed", then spread out all the components coming from the chat feed via ""...chatAppProps"
        />
    );
}

export default App;