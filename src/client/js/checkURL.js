// a function to check the url ..
export function checkURL(inputURL) {
	let regex = inputURL.match(
		/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
	);

	if (regex == null) {
		return false;
	} else {
		return true;
	}
}
