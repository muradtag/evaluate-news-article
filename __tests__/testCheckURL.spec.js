import { checkURL } from "../src/client/js/checkURL";

describe("Testing checkURL functionality", () => {
	test("Testing checkURL exist", () => {
		expect(checkURL).toBeDefined();
	});
	test("Testing checkURL is actually a function", () => {
		expect(typeof checkURL).toBe("function");
	});
	test("Testing checkURL return true for valid URL", () => {
		const URL = "https://www.udacity.com/";
		expect(checkURL(URL)).toBeTruthy();
	});
	test("Testing checkURL return false for invalid URL", () => {
		const notURL = "NOT A URL";
		expect(checkURL(notURL)).toBeFalsy();
	});
});
