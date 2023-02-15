import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import * as minMaxAvg from "./minmaxavg.js";

let fileNames = ["list1.txt", "list2.txt", "list3.txt", "list4.txt"];
let inputPaths = fileNames.map((name) => path.join(__dirname, "inputs", name));
let outputPaths = fileNames.map((name) => path.join(__dirname, "outputs", name));
let expectedPaths = fileNames.map((name) => path.join(__dirname, "expected", name));
let expectedResults = expectedPaths.map((path) => fs.readFileSync(path).toString());

describe("findMinMaxAvg(filePath)", () => {
	beforeAll(() => {
		outputPaths.forEach((path) => {
			if (fs.existsSync(path)) {
				fs.unlinkSync(path);
			}
		});
		if (minMaxAvg.findMinMaxAvg) {
			inputPaths.forEach((path) => {
				minMaxAvg.findMinMaxAvg(path);
			});
		}
	});
	it("should export a function called findMinMaxAvg()", () => {
		expect(minMaxAvg.findMinMaxAvg).toBeDefined();
	});
	it("should write a file to the output folder", () => {
		outputPaths.forEach((path) => {
			expect(fs.existsSync(path)).toBe(true);
		});
	});
	it("should write the expected text in the output file", () => {
		outputPaths.forEach((path, i) => {
			expect(fs.readFileSync(path).toString()).toEqual(expectedResults[i]);
		});
	});
});
