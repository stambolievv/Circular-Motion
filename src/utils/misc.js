/**
 * @description It creates an array of a given size, and fills it with the given element, or the index of the element if no element is given.
 * @param {number} size - The number of elements in the array.
 * @param {any|Function} element - The element to fill the array with. If this is a function, it will be called with the index of the current element.
 * @returns {Array} An array of size `size` with each element being the result of the function `element` or the value of `element` if it is not a function.
 */
export function array(size, element) {
  const array = new Array(size);

  for (let index = 0; index < array.length; index++) {
    const component = typeof element === 'function' ? element(index) : element;
    array[index] = typeof component !== 'undefined' ? component : index;
  }

  return array;
}

/**
 * @description  It returns a random boolean value based on a given chance. By default, the chance is 50%.
 * @param {number} [chance=0.5] - The chance of the event happening.
 * @returns {boolean} A boolean value.
 */
export function getChance(chance = 0.5) {
  return Math.random() < chance ? true : false;
}

/**
 * @description It returns a random floating-point number between the specified minimum and maximum values.
 * @param {number} min - The minimum value of the random number.
 * @param {number} max - The maximum number that can be returned.
 * @returns {number} A random number between min and max.
 */
export function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

/**
 * @description It returns a random integer between the min and max values, inclusive.
 * @param {number} min - The minimum number you want to generate.
 * @param {number} max - The maximum number to be returned.
 * @returns {number} A random number between min and max.
 */
export function getRandomInt(min, max) {
  return Math.floor(getRandomFloat(min, max + 1));
}

/**
 * @description It returns a random value from the two values passed to it with a default 50% chance of returning the first value.
 * @param {any} value1 - The first value to choose from.
 * @param {any} value2 - The second value to compare.
 * @param {number} [chanceForValue1=0.5] - The chance that the first value will be returned.
 * @returns {any} A random value between value1 or value2.
 */
export function getRandomValue(value1, value2, chanceForValue1 = 0.5) {
  return Math.random() < chanceForValue1 ? value1 : value2;
}

/**
 * @description Given a value, a range of values that the value is in, and a new range of values to clamp the value to, return the value mapped to the new range.
 * @param {number} value - The value to clamp.
 * @param {Array<number>} valueRange - The range to map from `[min, max]`.
 * @param {Array<number>} newRange - The range to map to `[min, max]`.
 * @returns {number} The value of the input value, clamp between the valueRange and newRange.
 * @example
 * clampBetweenRanges(50,  [0,  100], [0, 1]) -> 0.5
 * clampBetweenRanges(100, [50, 150], [0, 2]) -> 1
 */
export function clampBetweenRanges(value, valueRange, newRange) {
  return (((value - valueRange[0]) / (valueRange[1] - valueRange[0])) * (newRange[1] - newRange[0])) + newRange[0];
}

/**
 * @description It takes a value and a maximum value and returns a value between 0 and 1.
 * @param {number} value - The value to clamp.
 * @param {number} max - The maximum value of the range you want to map to.
 * @returns {number} The value between 0 and 1.
 * @example
 * clamp(100, 100) -> 1
 * clamp(50,  100) -> 0.5
 * clamp(0,   100) -> 0
 */
export function clamp(value, max) {
  return clampBetweenRanges(value, [0, max], [0, 1]);
}

/**
 * @description It returns a random hex color string.
 * @returns {string} A string that is a random hex color.
 */
export function randomHexColor() {
  return `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
}

/**
 * @description For each element in the array, swap it with a random element in the array. The function uses the `Fisher-Yates` shuffle algorithm. It takes an array and an optional boolean parameter. If the boolean parameter is true, the function will shuffle the array in place. If the boolean parameter is false, the function will return a shuffled copy of the array. Uses the bitwise NOT operator (~~) to convert the random number to an integer.
 * @see {@link https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle Fisher-Yates shuffle algorithm} for further information.
 * @param {Array} array - The array to shuffle.
 * @param {boolean} [inPlace=false] - If true, the array will be shuffled in place. If false, a new array will be returned.
 * @returns {Array} The array is being returned.
 */
export function shuffle(array, inPlace = false) {
  if (!inPlace) array = [...array];

  for (let i = array.length - 1; i > 0; i--) {
    const j = ~~(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

/**
 * @description Returns a promise that resolves after a specified number of seconds.
 * @param {number} seconds - The number of seconds to wait.
 * @returns {Promise} A promise that resolves after 1 second.
 */
export function wait(seconds) {
  return new Promise((resolve, reject) => setTimeout(resolve, seconds * 1000));
}

/**
 * @description Return true if the value is a string, otherwise return false.
 * @param {any} value - The value to check.
 * @returns {boolean} Boolean expression.
 */
export function isString(value) {
  return typeof value === 'string';
}

/**
 * @description Return true if the value is a number (finite & not NaN), otherwise return false.
 * @param {any} value - The value to check.
 * @returns {boolean} Boolean expression.
 */

export function isNumber(value) {
  return typeof value === 'string' && isFinite(value) && !isNaN(value);
}

/**
 * @description Return true if the value is a boolean, otherwise return false.
 * @param {any} value - The value to check.
 * @returns {boolean} Boolean expression.
 */
export function isBoolean(value) {
  return typeof value === 'boolean' && (value === true || value === false);
}

/**
 * @description Return true if the value is nil (null | undefined | void), otherwise return false.
 * @param {any} value - The value to check.
 * @returns {boolean} Boolean expression.
 */
export function isNil(value) {
  return value === null || value === undefined || value === void 0;
}

/**
 * @description Return true if the value is an object, otherwise return false.
 * @param {any} value - The value to check.
 * @returns {boolean} Boolean expression.
 */
export function isObject(value) {
  return typeof value === 'object' && !isNil(value) && !isArray(value) && value.constructor === Object;
}

/**
 * @description Return true if the value is an array, otherwise return false.
 * @param {any} value - The value to check.
 * @returns {boolean} Boolean expression.
 */
export function isArray(value) {
  return Array.isArray ? Array.isArray(value) : value instanceof Array;
}