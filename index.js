const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");

const routes = require("./src/routes");
const { runBurnBot } = require("./src/burnBot");

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(helmet());

app.use("/api", routes);

// Optional fallthrough error handler
app.use(function onError(err, req, res, next) {
  console.error(err);
  const status = err?.status ?? 500;
  const type = err?.type;

  res.status(status).json({
    ...(type ? { type } : {}),
    status: status,
    message: err.message || "Invalid Request"
  });
  return;
});

const PORT = 3001 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Express app running on port ${PORT}`);
});

/* Run burn bot */
runBurnBot();

module.exports = app;
