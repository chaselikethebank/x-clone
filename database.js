const mongoose = require("mongoose");
require("dotenv").config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
const uri = `mongodb+srv://${username}:${password}@cluster0.wbznb0b.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;
mongoose.set('useFindAndModify', false)
mongoose.set('useUnifiedTopology', true)

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    mongoose
      .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        console.log("Username:", username);
        console.log("Database connection successful");
      })
      .catch((err) => {
        console.error("Database connection error:", err);
        console.log("Username:", username);
      });
  }
}


module.exports = new Database()