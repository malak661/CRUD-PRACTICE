const express = require("express");

const app = express();
app.use(express.json());
const courserouter = require("./routes/courses.routes");

app.use("/api/courses", courserouter);

app.listen(5001, () => {
  console.log("listening on port 5001 ");
});
