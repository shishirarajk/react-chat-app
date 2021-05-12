const MyMessage = ({ message }) => {
  if (message?.attachments?.length > 0) {
    // to check if the messages are attachments
    return (
      <img
        src={message.attachments[0].file} //first attachment
        alt="message-attachment"
        className="message-image"
        style={{ float: "right" }}
      />
    );
  }
  //if the messages are text
  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
        color: "white",
        backgroundColor: "#3B2A50",
      }}
    >
      {message.text}
    </div>
  );
};

export default MyMessage;
