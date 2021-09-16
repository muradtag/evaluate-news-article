export default function handleSubmit(e) {
	e.preventDefault();

	let inputURL = document.getElementById("article-url").value;

	if (Client.checkURL(inputURL)) {
		console.log("::: Submission Successful :::");

		postData("http://localhost:8081/review", { url: inputURL })
			.then((response) => {
				updateUI(response);
			})
			.catch((error) => console.log("error", error));
	} else {
		alert("Invalid URL, please insert a valid URL.");
	}
}

const postData = async (url = "", data = {}) => {
	console.log("Data:", data);
	const response = await fetch(url, {
		method: "POST",
		credentials: "same-origin",
		mode: "cors",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	});
	try {
		const newData = await response.json();
		console.log("newData:", newdata);
		return newData;
	} catch {
		console.log("error", error);
	}
};

const updateUI = (response) => {
	document.getElementById("text").innerHTML = `Text: ${response.text}`;
	document.getElementById(
		"agreement"
	).innerHTML = `Agreement: ${response.agreement}`;
	document.getElementById(
		"subjectivity"
	).innerHTML = `Subjectivity: ${response.subjectivity}`;
	document.getElementById(
		"confidence"
	).innerHTML = `Confidence: ${response.confidence}`;
	document.getElementById("irony").innerHTML = `Irony: ${response.irony}`;
	document.getElementById(
		"score_tag"
	).innerHTML = `Score Tag: ${response.score_tag}`;
};
