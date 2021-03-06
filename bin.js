#!/usr/bin/env node

const { readFile } = require('fs')
const { promisify } = require('util')
const validator = require('.')

const read = promisify(readFile)

read('/config.json')
  .then(JSON.parse)
  // ignore config file if not present
  .catch(Function.prototype)
  .then(validator)
  // Do not throw errors if there are no files to analyze
  .catch(error => process.stderr.write(error.message + '\n'))
