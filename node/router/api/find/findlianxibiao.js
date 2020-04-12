const lianxibiao = require("../../../db/lianxibiao");

module.exports = (req, res) => {
  lianxibiao
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