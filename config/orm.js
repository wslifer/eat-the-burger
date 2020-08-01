const connection = require("./connection");

const orm = {
  selectAll: function (cb) {
    const querystring = `SELECT * FROM burgers`;

    connection.query(querystring, (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },

  insertOne: function (burgers, cb) {
    const querystring = `INSERT INTO burgers (burger_name) VALUES (?)`;
    connection.query(querystring, (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },

  updateOne: function (id, cb) {
    const querystring = `UPDATE burgers SET devoured = true WHERE id = ?`;

    connection.query(querystring, (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },
};

module.exports = orm;
