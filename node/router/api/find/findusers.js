const users = require("../../../db/schooloauser");

module.exports = (req, res) => {
  users
  .find({})
  .then((data) => {
      res.send(data);
      // console.log(data);
    }
  )
  .catch(
    (e) => {
      console.log(e);
      res.send(e);
    }
  );
};