const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Basic Meta Info
const options = {
  definition: {
    openapi: "3.0.0",
    info: { title: "Crossfit WOD API", version: "1.0.0" },
  },
  apis: [
    "./src/v1/routes/workoutRoutes.js",
    "./src/v1/routes/membersRoutes.js",
    "./src/database/Workout.js",
    "./src/database/Member.js",
  ],
};

// Docs in JSON format
const swaggerSpec = swaggerJSDoc(options);

// Function to setup doc
const swaggerDocs = (app, port) => {
  // Route handler to visit docs
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  //Make docs in JSON format available
  app.get("/api/v1/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
  console.log(
    `Version 1 Docs are available on http://localhost:${port}/api/v1/docs`
  );
};

module.exports = { swaggerDocs };
