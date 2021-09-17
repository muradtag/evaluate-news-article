import "babel-polyfill";
import { handleSubmit } from "../src/client/js/formHandler";

describe("Testing the handleSubmit() functionality", () => {
	test("Testing handleSubmit exists", () => {
		expect(handleSubmit).toBeDefined();
	});
	test("Testing handleSubmit is actually a function", () => {
		expect(typeof handleSubmit).toBe("function");
	});
});
