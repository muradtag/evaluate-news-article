const dotenv = require("dotenv");
var path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const cors = require("cors");
// var FormData = require("form-data");
const mockAPIResponse = require("./mockAPI.js");

const PORT = 8081;

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("dist"));

console.log(__dirname);

projectData = {};
const baseURL = "https://api.meaningcloud.com/sentiment-2.1";
const APIkey = process.env.meaningCloudAPI;
console.log(`Your API Key is ${APIkey}`);

app.get("/", function (req, res) {
	// res.sendFile("dist/index.html");
	res.sendFile(path.resolve("src/client/views/index.html"));
});

app.post("/review", async (req, res) => {
	let userInput = req.body.url;
	console.log(`URL: ${userInput}`);
	const apiURL = `${baseURL}?key=${APIkey}&url=${userInput}&lang=en`;
	console.log("Final API URL:", apiURL);

	const response = await fetch(apiURL);
	try {
		const data = await response.json();
		// console.log(data);

		projectData.score_tag = data.score_tag;
		projectData.agreement = data.agreement;
		projectData.subjectivity = data.subjectivity;
		projectData.confidence = data.confidence;
		projectData.irony = data.irony;

		console.log(projectData);
		res.send(projectData);
	} catch (error) {
		console.log("error:", error);
	}
});

app.get("/test", function (req, res) {
	res.send(mockAPIResponse);
});

app.listen(PORT, (error) => {
	if (error) throw new Error(error);
	console.log(`Server listening on port ${PORT}!`);
});
