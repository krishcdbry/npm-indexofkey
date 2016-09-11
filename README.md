# npm-indexofkey
Which receives array, (key, value) object pair and returns the index of that particular {key,value} pair in that array and also it is flexible enough to return first index , last index and multlple indexes in the form of array.


## Installation

```bash
npm i npm-indexofkey
```

## Usage
```javascript
var indexOfkey = require('npm-indexofkey');
```

## getIndex(array, {key, value})

Receives the input array, (key, value) object pair and returns the first index of that particular {key,value} pair.
```javascript

  var indexOfkey = require('npm-indexofkey')
  var inputArray = [{"id":null,"number":7},{"isValid":false,"number":362},{"isValid":true,"count":126},{"isValid":false,"number":10}];
 
  indexOfkey.getIndex(inputArray, {"isValid": false});
  // 1
  
```

## getIndexLast(array, {key, value})

Receives the input array, (key, value) object pair and returns the last index of that particular {key,value} pair.
```javascript

  var indexOfkey = require('npm-indexofkey')
  var inputArray = [{"id":null,"number":7},{"isValid":false,"number":362},{"isValid":true,"count":126},{"isValid":false,"number":10}];
 
  indexOfkey.getIndex(inputArray, {"isValid": false});
  // 3
  
```

## getIndex(array, {key, value})

Receives the input array, (key, value) object pair and returns the array of all indexes of that particular {key,value} pair.
```javascript

  var indexOfkey = require('npm-indexofkey')
  var inputArray = [{"id":null,"number":7},{"isValid":false,"number":362},{"isValid":true,"count":126},{"isValid":false,"number":10}];
 
  indexOfkey.getIndex(inputArray, {"isValid": false});
  // [1,3]
  
```

## Demo
Demo @[npm-array-unique](https://tonicdev.com/npm/npm-indexofkey)
| https://tonicdev.com/npm/npm-indexofkey

## Author
Krishcdbry [krishcdbry@gmail.com]

## Licence
MIT @[krishcdbry](krishcdbry.com)
