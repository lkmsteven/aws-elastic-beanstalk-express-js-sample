const express = require('express');
const app = express();
const port = 8080;

message = "Welcome to AWS Devops learning path!\r\n";
message += "Build Attempt = 2";

app.get('/', (req, res) => res.send(message));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
