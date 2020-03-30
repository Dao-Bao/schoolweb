const news = require("../../../db/news");

module.exports = (req, res) => {
  news
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