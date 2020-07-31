var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL) {
  // Connection for running on Heroku
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // Connection for running on localhost.
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db",
  });
}

// Connection function
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Exports function to be used in other files.
module.exports = connection;
