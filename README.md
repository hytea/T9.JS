# T9.JS

A T9 phone number pad text predictor.

Initialized with a dictionary of word possibilities and a numeric input, the t9 library will search the dictionary for all possible matches.

## Installation

```bash
npm i t9.js
```

## Usage

```javascript
var t9 = require('t9');

var dictionary = [
  'gelatin',
  'hair gel',
  'hello',
  'help',
  'today',
  'tomorrow',
  'world',
  'yesterday',
];

var input = '435';

var obj = t9(dictionary);

var results = obj.getWords(input);

console.log(results); // ['gelatin', 'hairgel', 'hello', 'help']
```
