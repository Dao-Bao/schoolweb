const regulations = require("../../../db/regulations");

module.exports = (req, res) => {
  regulations
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