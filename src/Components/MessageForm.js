import { useState } from "react";
import { SendOutlined, PictureOutlined } from "@ant-design/icons";
import { sendMessage, isTyping } from "react-chat-engine";

const MessageForm = (props) => {
  const [value, setValue] = useState("");
  const { chatId, creds } = props;

  const handleChange = (event) => {
    setValue(event.target.value); //value of the input stored

    isTyping(props, chatId);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //for every handlesubmit in react we have to add event.preventDefault()
    //this will prevent the page refresh on submit

    const text = value.trim(); //removing the leading and trailling wite spaces

    if (text.length > 0) {
      sendMessage(creds, chatId, { text }); // sendMessage is the function from react-chat-engine
    }

    setValue(""); //resetting the value
  };

  const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: "" });
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit} //send the message by pressing the enter key
      />
      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleUpload.bind(this)}
      />
      <button type="submit" className="send-button">
        <SendOutlined className="send-icon" />
      </button>
    </form>
  );
};

export default MessageForm;
