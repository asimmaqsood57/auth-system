const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/AssignmentSmjhoHogai", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.log("something went wrong", err);
  });
