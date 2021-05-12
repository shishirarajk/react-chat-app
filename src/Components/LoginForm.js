import { useState } from "react";
import axios from "axios";

const projectID = "1b7801d6-8a66-4be4-a442-89219d833dfc";

const Modal = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); //prevent refresh after submit

    // we gve credentials to chat engine to giv eus the messages
    // if the credentials are corret then return the messages ->successfully logged in
    //otherwise return error

    const authObject = {
      "Project-ID": "088e86da-7ef9-4ed3-a9fd-c35b18a158f9",
      "User-Name": "shishira",
      "User-Secret": "123",
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      //if the login is successfull then the username and password will be stored in the local stoage
      //such that once we login their is no need to login again
      window.location.reload();

      setError("");
    } catch (err) {
      setError("Oops, incorrect credentials.");
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)} //keypress - e.target.value contain the value of the input and is stored in setUsername
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>
  );
};

export default Modal;
