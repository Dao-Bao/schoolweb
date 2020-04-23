const teachers = require("../../../db/teachers");

module.exports = (req, res) => {
  teachers
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