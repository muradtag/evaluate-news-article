import checkURL from "./js/checkURL";
import handleSubmit from "./js/formHandler";

// TODO: include your scss file here

window.addEventListener("DOMContentLoaded", () => {
	const buttonSubmit = document.getElementById("btn-submit");
	buttonSubmit.addEventListener("click", () => {
		Client.handleSubmit();
	});
});

export { checkURL, handleSubmit };
