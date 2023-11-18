import Navbar from "../NavBar/Navbar";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import Chats from "../components/chats";
import "./messages.css";
function Messages() {
  return (
    <>
      <div className="messages">
        <div className="messagesContainer">
          <LeftSidebar />
          <Chats />
          <RightSidebar />
        </div>
      </div>
    </>
  );
}

/*
<h1>Messages</h1>;
      <a href="http://localhost:3002/32" target="_blank" rel="noopener noreferrer">
      <h1>Messages</h1>;
      <a
        href="http://localhost:3002/32"
        target="_blank"
        rel="noopener noreferrer"
      >
        omg call me plzzzzz
      </a>
*/
export default Messages;
