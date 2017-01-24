var orm = require("../config/orm.js");

var burger = {
  selectTable: function(cb) {
    orm.selectTable("burger", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  addBurger: function(cols, vals, cb) {
    orm.addBurger("burger", cols, vals, function(res) {
      cb(res);
    });
  },
  eatBurger: function(objColVals, condition, cb) {
    orm.eatBurger("burger", objColVals, condition, function(res) {
      cb(res);
    });
  }
}
module.exports = burger;