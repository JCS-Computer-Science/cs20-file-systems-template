# 1. MinMaxAvg

## Task

Write a function that reads in a given input file and writes an output file. The input file will always contain a list of numbers, one per line. The output should contain a single line listing the minimum, maximum, and average number from the input in this format:

```plaintext
Min: 0 Max: 99.3 Avg: 51.87
```

## Requirements

### minmaxavg.js

- should export a function called `findMinMaxAvg(filepath)`
  - the `filepath` parameter will be an absolute path to the input file
  - findMinMaxAvg should write a file to the `output` folder with the same name as the input file (eg if the input file was `inputs/list1.txt`, the output file should be `outputs/list1.txt`)
