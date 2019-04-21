const express = require("express");
const expressGQL = require("express-graphql");
const schema = require("./schema/schema.js");

const app = express();

app.use(
  "/graphql",
  expressGQL({
    graphiql: true,
    schema
  })
);

app.listen(4000, () => {
  console.log("Listening...");
});
