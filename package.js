#!/usr/bin/env node

var fs = require('fs');

var directory

if (process.argv.length == 2) {
    directory = "."
} else if (process.argv.length == 3) {
  directory = process.argv[2];
} else {
  console.error('Unexpected number of arguments.');
  process.exit(1);
}

if (directory == "-help" || directory == "-h") {
  console.log("eth-random initializes a solidity API client for interacting with random.\n You can specify the directory as a command line argument else the current directory is the default.");
  process.exit(0);
}

fs.createReadStream('RandomAPI.sol').pipe(fs.createWriteStream(directory + '/RandomAPI.sol'));
