const orm = require("../config/orm");
const { insertOne } = require("../config/orm");

const burger = {
  selectAll: function (cb) {
    orm.selectAll((res) => {
      cb(res);
    });
  },

  insertOne: function (cb) {
    orm.insertOne((res) => {
      cb(res);
    });
  },

  updateOne: function (cb) {
    orm.updateOne((res) => {
      cb(res);
    });
  },
};
