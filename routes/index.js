var express = require('express');
var router = express.Router();

var connect = require('../utils/sqlConnect'); // include database connection

/* GET home page. */
router.get('/', function(req, res, next) {
  // do a database query and get some of the hero data
  connect.query(`SELECT name, avatar FROM hero`, (err, result) => {
    if (err) {
      throw err;
      console.log(err);
    } else {
      console.log(result);
      res.render('index', { avatars: result });
    }
  });
});

// get individual info / bio info
router.get('/:hero', function(req, res, next) { // req means request, res means result, so request for result 
  // do a database query and get some of the hero data
  connect.query(`SELECT * FROM hero WHERE name="${req.params.hero}"`, (err, result) => {
    if (err) {
      throw err;
      console.log(err);
    } else {
      console.log(result);
      res.render('bio', { bioData: result[0] });
    }
  });
});

module.exports = router;
