import * as expedition from "./expedition";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

let sample_input = path.join(__dirname, "inputs/sample_input.txt");
let sample_input_arr = fs.readFileSync(sample_input).toString().split("\n");
let full_input = path.join(__dirname, "inputs/full_input.txt");
let full_input_arr = fs.readFileSync(full_input).toString().split("\n");
let fake_input = path.join(__dirname, "inputs/fake_input.txt");

describe("readInput(filePath)", () => {
	it("should export a function called readInput", () => {
		expect(expedition.readInput).toBeDefined();
	});
	it("should return an array", () => {
		expect(expedition.readInput(sample_input).constructor).toBe(Array);
	});
	it("should return an array of the individual lines of the input file", () => {
		expect(expedition.readInput(sample_input)).toEqual(sample_input_arr);
		expect(expedition.readInput(full_input)).toEqual(full_input_arr);
	});
	it("should return an empty array if the file doesn't exists", () => {
		expect(expedition.readInput(fake_input)).toEqual([]);
	});
});

describe("sumWagons(inputArr)", () => {
	it("should export a function called sumWagons", () => {
		expect(expedition.sumWagons).toBeDefined();
	});
	it("should return an array", () => {
		expect(expedition.sumWagons(sample_input_arr).constructor).toBe(Array);
	});
	it("should return an array of the total calories of each wagon", () => {
		expect(expedition.sumWagons(["2", "3", "", "1", "5", "", "2"])).toEqual([5, 6, 2]);
		expect(expedition.sumWagons(sample_input_arr)).toEqual([
			6000, 4000, 11000, 24000, 10000,
		]);
	});
	it("should return an empty array if input array is empty", () => {
		expect(expedition.sumWagons([])).toEqual([]);
	});
});

describe("findLargest(wagonArr)", () => {
	it("should export a function called findLargest", () => {
		expect(expedition.findLargest).toBeDefined();
	});
	it("should return a number", () => {
		expect(expedition.findLargest([5, 6, 2]).constructor).toBe(Number);
	});
	it("should return the largest number in the array", () => {
		expect(expedition.findLargest([5, 6, 2])).toEqual(6);
		expect(expedition.findLargest([6000, 4000, 11000, 24000, 10000])).toEqual(24000);
	});
	it("should return 0 if the array is empty", () => {
		expect(expedition.findLargest([])).toEqual(0);
	});
});
describe("solutionA(filePath)", () => {
	it("should export a function called solutionA", () => {
		expect(expedition.solutionA).toBeDefined();
	});
	it("should return a number", () => {
		expect(expedition.solutionA(sample_input).constructor).toBe(Number);
	});
	it("should return the correct solution for Part A", () => {
		expect(expedition.solutionA(sample_input)).toEqual(24000);
		expect(expedition.solutionA(full_input)).toEqual(66306);
	});
});

describe("findThreeLargest(wagonArr)", () => {
	it("should export a function called findThreeLargest", () => {
		expect(expedition.findThreeLargest).toBeDefined();
	});
	it("should return a number", () => {
		expect(expedition.findThreeLargest([5, 6, 2]).constructor).toBe(Number);
	});
	it("should return the sum of the three largest numbers in the array", () => {
		expect(expedition.findThreeLargest([5, 6, 2])).toEqual(13);
		expect(expedition.findThreeLargest([6000, 4000, 11000, 24000, 10000])).toEqual(45000);
	});
	it("should return 0 if the array is empty", () => {
		expect(expedition.findThreeLargest([])).toEqual(0);
	});
});

describe("solutionB(filePath)", () => {
	it("should export a function called solutionB", () => {
		expect(expedition.solutionB).toBeDefined();
	});
	it("should return a number", () => {
		expect(expedition.solutionB(sample_input).constructor).toBe(Number);
	});
	it("should return the correct solution for Part A", () => {
		expect(expedition.solutionB(sample_input)).toEqual(45000);
		expect(expedition.solutionB(full_input)).toEqual(195292);
	});
});
