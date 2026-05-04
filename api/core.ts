import express from "express";
import db_test from "$postgres/db-test";
import index_routes from "$routes/index.routes";
import error_handler from "$middlewares/error/error-handler.middleware";

const app = express();
const port = process.env.API_PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Test database connection on startup
db_test();

//Set up routes
app.use("/", index_routes);

// Set up error handling middleware
app.use(error_handler);

// App listening
app.listen(port, () => {
  console.log(`🟢 Server is running on port ${port}`);
});
