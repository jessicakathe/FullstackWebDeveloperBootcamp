var express = require('express');
var router = express.Router();
var userService = require("../services/users")

var getAllUsers = function (req, res, next) {
  userService.getAllUsers()
  .then(users => res.json());
  .catch(error => next(error));
}

/* GET users listing. */
router.get('/', getAllUsers);

module.exports = router;
