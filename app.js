const express = require('express');
const app = express();
const port = 8080;

message = "Welcome to AWS Devops learning path!\n";
message += "Build Attempt = 3";

app.get('/', (req, res) => res.send(message));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
