const express = require("express");
const app = express();
const morgan = require("morgan");
const morganBody = require("morgan-body");

const participants = require("./routes/participant.routes");
//const apis = require('./routes/apis')

app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.urlencoded({ extended: true }));
morganBody(app);
app.use(participants);

app.use(express.static("../public"));
module.exports = app;

if (require.main === module) {
  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`);
  });
}
