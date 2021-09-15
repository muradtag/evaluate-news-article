const dotenv = require("dotenv");
var path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const cors = require("cors");
var FormData = require("form-data");
const mockAPIResponse = require("./mockAPI.js");

// Set PORT Number
const PORT = 8081;
// Create an instance for the server
const app = express();
// Configure the environment variables
dotenv.config();
// Configure cors to avoid cors-origin issue
app.use(cors());
//Configure express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Configure express static directory.
app.use(express.static("dist"));

console.log(__dirname);

projectData = {};
const baseURL = "https://api.meaningcloud.com/sentiment-2.1";
const APIkey = process.env.meaningCloudAPI;
console.log(`Your API Key is ${APIkey}`);

app.get("/", function (req, res) {
	res.sendFile("dist/index.html");
	// res.sendFile(path.resolve("src/client/views/index.html"));
});

app.post("/review", async function (req, res) {
	let userInput = req.body.url;
	console.log(`URL: ${userInput}`);

	const formData = new FormData();
	formData.append("key", APIkey);
	formData.append("txt", userInput);
	formData.append("lang", "en");

	const requestOptions = {
		method: "POST",
		body: formData,
		redirect: "follow",
	};

	const response = await fetch(
		"https://api.meaningcloud.com/sentiment-2.1",
		requestOptions
	)
		.then((response) => ({
			status: response.status,
			body: response.json(),
		}))
		.then(({ status, body }) => {
			console.log(status, body);

			projectData.text = body.sentence_list[0].text;
			projectData.score_tag = body.score_tag;
			projectData.agreement = body.agreement;
			projectData.subjectivity = body.subjectivity;
			projectData.confidence = body.confidence;
			projectData.irony = body.irony;

			res.send(projectData);
			console.log(projectData);
		})
		.catch((error) => console.log("error", error));
});

app.get("/test", function (req, res) {
	res.send(mockAPIResponse);
});

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
	if (error) throw new Error(error);
	console.log(`Server listening on port ${PORT}!`);
});

// TODO: export app to use it in the unit testing
