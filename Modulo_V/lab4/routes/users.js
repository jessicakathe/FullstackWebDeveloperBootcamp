var express = require('express');
var router = express.Router();
var userService = require("../services/users")

var getAllUsers = function (req, res, next) {
  userService.getAllUsers()
  .then(users => res.json())
  .catch(err => next(err));
}


/* GET users listing. */
router.get('/', getAllUsers);
router.get('/create', getAllUsers);

module.exports = router;
