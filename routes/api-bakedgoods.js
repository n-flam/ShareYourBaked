const db = require("../models");

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.get("/api/bakedgoods", (req, res) => {
    db.Bakedgood.findAll({
      include: db.User,
    })
      .then((dbResp) => {
        db.User.findAll();
        return dbResp;
      })
      .then((dbResponse) => {
        dbResponse.password = undefined;
        res.json(dbResponse);
      })
      .catch((err) => {
        console.log(err);
        res.status(401).json(err);
      });
  });
};

// app.get("/api/bakedgoods", (req, res) => {
//   db.Bakedgood.findAll({
//     include: db.User
//   })
//     .then((dbResponse) => {
//       res.json(dbResponse);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(401).json(err);
//     });
// });
// };
