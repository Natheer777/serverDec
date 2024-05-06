const express = require("express");
const bodyParser = require("body-parser");
const pool = require("../server/Config/Dbnode");
const UserController = require("../server/Controllers/Usecontroller");
const route = require("../server/Routers/Route");

const app = express();
const PORT = process.env.PORT || 4000;
app.use(route);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
 
app.get("/input", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.post("/adduser", async (req, res) => {
  const { name_ar , details_ar, name_en, details_en } = req.body;

  try {
    const result = await UserController.addUser(name_ar , details_ar, name_en, details_en);
    res.send("تمت إضافة المستخدم بنجاح!");
  } catch (error) {
    console.error("فشلت عملية إضافة المستخدم:", error);
    res.status(500).send("حدث خطأ أثناء إضافة المستخدم.");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
