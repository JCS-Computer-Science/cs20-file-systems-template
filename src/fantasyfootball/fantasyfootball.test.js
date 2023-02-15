import * as ff from "./fantasyfootball.js";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const players = JSON.parse(
	fs.readFileSync(path.join(__dirname, "./inputs/players.json").toString())
).runningBacks;
const records = JSON.parse(
	fs.readFileSync(path.join(__dirname, "./inputs/records.json").toString())
).gameRecords;

const expected = JSON.parse(
	fs.readFileSync(path.join(__dirname, "expected", "output.json"))
);

const convertedRecords = [
	{
		week: 4,
		totalYards: 105,
		receptions: 8,
		touchdowns: 1,
		fumbles: 0,
		fantasyPoints: 24.5,
	},
	{
		week: 3,
		totalYards: 225,
		receptions: 12,
		touchdowns: 3,
		fumbles: 0,
		fantasyPoints: 52.5,
	},

	{
		week: 8,
		totalYards: 79,
		receptions: 0,
		touchdowns: 0,
		fumbles: 1,
		fantasyPoints: 5.9,
	},
];

describe("getPlayerName(id)", () => {
	it("should return the correct player name based on their ID", () => {
		expect(ff.getPlayerName(21682)).toEqual("Jonathan Taylor");
		expect(ff.getPlayerName(17959)).toEqual("Derrick Henry");
		expect(ff.getPlayerName(18877)).toEqual("Christian McCaffrey");
	});
});
describe("calculatePoints(gameRecord)", () => {
	it("should return the number of fantasy points for the given game record", () => {
		records.slice(0, 3).forEach((record, i) => {
			expect(ff.calculatePoints(record)).toEqual(convertedRecords[i].fantasyPoints);
		});
	});
});
describe("generateGameLog(gameRecord)", () => {
	it("should return an object representing the gameRecord in the new format, including fantasy points", () => {
		records.slice(0, 3).forEach((record, i) => {
			expect(ff.generateGameLog(record)).toEqual(convertedRecords[i]);
		});
	});
});
describe("convertGameRecords()", () => {
	const outputPath = path.join(__dirname, "outputs", "output.json");
	beforeAll(() => {
		if (fs.existsSync(outputPath)) {
			fs.unlinkSync(outputPath);
		}
		ff.convertGameRecords();
	});
	it("should create a file called outputs/output.json", () => {
		expect(fs.existsSync(outputPath)).toBe(true);
	});
	it("outputs/output.json should contain the correct data", () => {
		// let
		expect(JSON.stringify(JSON.parse(fs.readFileSync(outputPath).toString()))).toEqual(
			JSON.stringify(expected)
		);
	});
});
