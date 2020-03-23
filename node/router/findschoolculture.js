const schoolculture = require("../db/schoolculture");

module.exports = (req, res) => {
  schoolculture
  .find({})
  .then((data) => {
      res.send(data);
      console.log(data);
    }
  )
  .catch(
    (e) => {
      console.log(e);
      res.send(e);
    }
  );
};