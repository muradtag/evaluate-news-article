import { checkURL } from "./js/checkURL";
import { handleSubmit } from "./js/formHandler";

// TODO: include your scss file here
import "./styles/style.scss";

window.addEventListener("DOMContentLoaded", () => {
	console.log("DOM fully loaded");
	const buttonSubmit = document.getElementById("btn-submit");
	buttonSubmit.addEventListener("click", (e) => {
		e.preventDefault();
		console.log("::: BUTTON CLICKED :::");
		handleSubmit();
	});
});

export { checkURL, handleSubmit };
