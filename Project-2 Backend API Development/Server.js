const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const messageRoutes = require("./routes/messageRoutes");

app.use("/api/messages", messageRoutes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
});
