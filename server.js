const express = require("express");

const app = express();

const port = 3000;

app.listen(port, (err) => {
	if (err) {
    return console.log("Error: ", err);
  }
	console.log("Server is listening on port " + port);
})

app.get("/api", (req, res) => {
	if (req.headers.authorization !== 'username:password') {
	  return res.status(401).send();
	} else {
		res.send({method: "GET"});
	}
});