const Express = require("express");
const ExpressGraphQL = require("express-graphql");
const Mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const schema = require("./Schema");

const startServer = async () => {
  const app = Express();
  app.use(cors());

  await Mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then((db) => {
      console.log(
        `Connected to Mongo! \nDatabase name: "${db.connections[0].name}"`
      );
    })
    .catch((err) => {
      console.error("Error connecting to mongo", err);
    });

  app.use(
    "/",
    ExpressGraphQL({
      schema: schema,
      graphiql: false,
    })
  );

  app.listen(3000, () => {
    console.log("listening at :3000...");
  });
};

startServer();
