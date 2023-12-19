const express = require("express");
const { StreamChat } = require("stream-chat");

const app = express();
const port = 3000;

const apiKey = "3n2ymybyf2f4";
const apiSecret =
  "56c8kr3z3cvm2u3jsgvnnvu94rj9hej6w3ue3jmpw49fra5w3nrq8zn8vdpgqqy9";

const serverClient = StreamChat.getInstance(apiKey, apiSecret);

app.use(express.json());

app.post("/token", (req, res) => {
  const { user_id } = req.body;

  try {
    const token = serverClient.createToken(user_id);
    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
