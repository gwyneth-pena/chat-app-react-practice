import {ChatEngine} from 'react-chat-engine';



import "./App.css";
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App=()=>{

    if(!localStorage.getItem("username")) return <LoginForm/>

    return(
        <ChatEngine 
            height="100vh"
            projectID="f458f918-d3fd-4eed-9de1-1f7c09c5648c"
            userName={localStorage.getItem("username")}
            userSecret={localStorage.getItem("password")}
            renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
        />
    )



}

export default App;