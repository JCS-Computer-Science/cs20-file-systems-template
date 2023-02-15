# 3. Fantasy Football Stats

You are working on an application for visualizing Fantasy NFL Football data. The application only works if the data supplied to it is formatted in a very specific way. Unfortunately, the service you used to collect the data isn't very good, so you're going to have to do some work converting the raw data into the nice, tidy, organized structure your app expects.

## Task

Write a JavaScript function that reads in the raw data (`inputs/records.json`), converts it to the proper structure (see below), and writes the result to a new file (`outputs/output.json`).

## Specifications

### Input

The input data (`inputs/records.json`) is a JSON file that contains an object with a single property `gameRecords` which is an array. Each element in the `gameRecords` array is an array of numbers representing the stats for a specific player in a specific game.

Eg:

```json
{
	"gameRecords": [
		[4, 18877, 26, 0, 8, 79, 1, 0],
		[3, 17959, 134, 3, 12, 91, 0, 0],
		[8, 21682, 79, 0, 0, 0, 0, 1],
		...
	]
}
```

Each game record array has 8 elements that represent the following stats, in order:
`Week, PlayerID, RushingYards, RushingTouchdowns, Receptions, ReceivingYards, ReceivingTouchdowns, Fumbles`.

For example, consider this game record:

```json
[3, 17959, 134, 3, 12, 91, 0, 0]
```

This means in week 3, the player with the ID 17959 had 134 rushing yards, 3 rushing touchdowns, 12 receptions, 91 receiving years, 0 receiving touchdowns, and 0 fumbles.

Unfortunately, the game records are in a random order and do not contain the names of the players (just their ID).

Luckily you managed to find a file listing all of the players and their information (`inputs/players.json`) that looks like this:

```json
{
	"runningBacks": [
		{
			"name": "Jonathan Taylor",
			"id": 21682,
			"team": "IND"
		},
		{
			"name": "Derrick Henry",
			"id": 17959,
			"team": "TEN"
		},
		...
	]
}
```

With these two files, you should have enough information to convert the data into the required format.

### Output

The output data needs to be a JSON file containing an object with a single property `stats` which is an array of objects, each representing a player, in ascending order of their `id` property. Eg:

```json
{
    "stats":[
        {
            "id":11110,
            ...
        },
        {
            "id":12143,
            ...
        }
        ...
    ]
}
```

Each player object should have the following properties:

- `id` - A Number that is their player ID from the raw data
- `name` - A String that is the player's name
- `games` - An Array of objects, each representing the info and stats of a single game the player played, sorted by their `week` property

Eg:

```json
{
	"id": 18877,
	"player": "Christian McCaffrey",
	"games": [
        {
            "week":1,
            ...
        },
        {
            "week":2,
            ...
        },
        ...
    ]
}
```

Each game object should have the following properties, all of which are Numbers:

- `week`
- `totalYards` - The sum of rushing and receiving yards
- `receptions`
- `touchdowns` - The sum of rushing and receiving touchdowns
- `fumbles`
- `fantasyPoints` - The total fantasy football points the player earned in the game, calculated as described below

Eg:

```json
{
	"week": 4,
	"totalYards": 105,
	"receptions": 8,
	"touchdowns": 1,
	"fumbles": 0,
	"fantasyPoints": 24.5
}
```

### Fantasy Points

To calculate fantasy points, each stat is worth the following:

- 0.1 points per yard, rushing or receiving (in other words, 1 point per 10 yards)
- 1 point per reception
- 6 points per touchdown
- -2 points per fumble

In the above example, the player earned `24.5` fantasy points from the following calculation:

`(105*0.1) + (8*1) + (1*6) + (0*-2) = 24.5`
