'use strict'

/**
 * Which receives array, (key, value) object pair and returns the index of that particular {key,value} pair in that array and also it is flexible enough to
 * return first index , last index and mutlipe idexes in the form of array.
 *
 * @module nnpm-indexofkey
 * @typicalname indexOfkey
 * @example
 * var indexOfkey = require('npm-indexofkey')
 */


exports.getIndex = getIndex;
exports.getIndexLast = getIndexLast;
exports.getAll = getAll;


/**
 * @name getIndex
 * @typicalname getIndex
 * @param {array} inputArr  - Input array data
 * @param {object} needleObj, value pair to find
 * @return {int/array/string}
 *
 * @usage
 * ar indexOfkey = require('npm-indexofkey')
 * var inputArray = [{"id":null,"number":7},{"isValid":false,"number":362},{"isValid":true,"count":126},{"isValid":false,"number":10}];
 *
 * indexOfkey.getIndex(inputArray, {"isValid": false});
 * // 1
 *
 */
function getIndex(inputArr, needleObj) {

	if (Object.prototype.toString.call(needleObj) !== '[object Object]') {
		return "Not a valid needle(object)"
	}

	if (Object.prototype.toString.call(inputArr) !== '[object Array]') {
		return "Not a valid array";
	}

	var idx = -1;
	var needleKey = Object.keys(needleObj)[0];
	var needleValue = needleObj[needleKey];

	for (var i = 0; i < inputArr.length; i++) {
		var val = inputArr[i];
		if (val[needleKey] == needleValue) {
			idx = i;
			break;
		}
	}

	return idx;
}

/**
 * @name getIndexLast
 * @typicalname getIndexLast
 * @param {array} inputArr  - Input array data
 * @param {object} needleObj, value pair to find
 * @return {int/array/string}
 *
 * @usage
 * ar indexOfkey = require('npm-indexofkey')
 * var inputArray = [{"id":null,"number":7},{"isValid":false,"number":362},{"isValid":true,"count":126},{"id":45,"number":10}];
 *
 * indexOfkey.getIndexLast(inputArray, {"isValid": false});
 * // 3
 *
 */
function getIndexLast(inputArr, needleObj) {

	if (Object.prototype.toString.call(needleObj) !== '[object Object]') {
		return "Not a valid needle(object)"
	}

	if (Object.prototype.toString.call(inputArr) !== '[object Array]') {
		return "Not a valid array";
	}

	var idx = -1;
	var needleKey = Object.keys(needleObj)[0];
	var needleValue = needleObj[needleKey];

	for (var i = inputArr.length-1; i > 0; i--) {
		var val = inputArr[i];
		if (val[needleKey] == needleValue) {
			idx = i;
			break;
		}
	}

	return idx;
}

/**
 * @name getAll
 * @typicalname getAll
 * @param {array} inputArr  - Input array data
 * @param {object} needleObj, value pair to find
 * @return {int/array/string}
 *
 * @usage
 * ar indexOfkey = require('npm-indexofkey')
 * var inputArray = [{"id":null,"number":7},{"isValid":false,"number":362},{"isValid":true,"count":126},{"id":45,"number":10}];
 *
 * indexOfkey.getAll(inputArray, {"isValid": false});
 * // [1,3]
 *
 */
function getAll(inputArr, needleObj) {

	if (Object.prototype.toString.call(needleObj) !== '[object Object]') {
		return "Not a valid needle(object)"
	}

	if (Object.prototype.toString.call(inputArr) !== '[object Array]') {
		return "Not a valid array";
	}

	var idxs = [];
	var needleKey = Object.keys(needleObj)[0];
	var needleValue = needleObj[needleKey];

	for (var i = 0; i < inputArr.length; i++) {
		var val = inputArr[i];
		if (val[needleKey] == needleValue) {
			idxs.push(i);
		}
	}

	return idxs;
}
