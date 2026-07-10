let messages = [
  {
    id: 1,
    name: "Divyanshu",
    email: "divyanshu@gmail.com",
    message: "Hello DecodeLabs"
  }
];

// GET All Messages
const getMessages = (req, res) => {
  res.status(200).json(messages);
};

// GET Single Message
const getMessage = (req, res) => {
  const id = Number(req.params.id);

  const message = messages.find((m) => m.id === id);

  if (!message) {
    return res.status(404).json({
      success: false,
      message: "Message not found"
    });
  }

  res.status(200).json(message);
};

// POST Create Message
const createMessage = (req, res) => {

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required"
    });
  }

  const newMessage = {
    id: messages.length + 1,
    name,
    email,
    message
  };

  messages.push(newMessage);

  res.status(201).json({
    success: true,
    message: "Message Created Successfully",
    data: newMessage
  });

};

// PUT Update Message

const updateMessage = (req, res) => {

  const id = Number(req.params.id);

  const index = messages.findIndex((m) => m.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Message not found"
    });
  }

  messages[index] = {
    ...messages[index],
    ...req.body
  };

  res.status(200).json({
    success: true,
    message: "Message Updated",
    data: messages[index]
  });

};

// DELETE Message

const deleteMessage = (req, res) => {

  const id = Number(req.params.id);

  const index = messages.findIndex((m) => m.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Message not found"
    });
  }

  messages.splice(index, 1);

  res.status(200).json({
    success: true,
    message: "Message Deleted Successfully"
  });

};

module.exports = {
  getMessages,
  getMessage,
  createMessage,
  updateMessage,
  deleteMessage
};
