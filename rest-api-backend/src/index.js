const express = require("express");
// const apicache = require("apicache");
const bodyParser = require("body-parser");

const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
const v1MemberRouter = require("./v1/routes/membersRoutes");
// const cache = apicache.options({ debug: true, enabled: true }).middleware;
// const onlyStatus200 = (req, res) => res.statusCode === 200;

const { swaggerDocs: v1SwaggerDocs } = require("./v1/swagger");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
// app.use(cache("2 minutes"));
app.use("/api/v1/workouts", v1WorkoutRouter);
app.use("/api/v1/members", v1MemberRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
  v1SwaggerDocs(app, PORT);
});
