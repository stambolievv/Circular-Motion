/**
 * @classdesc It's a class that represents a vector in 2D space.
 * @class
 */
export default class Vector2D {
  /**
   * @description It's a class that represents a vector in 2D space.
   * @param {{x: number, y: number}} [object={x:0, y:0}] - Values of the vector coordinates.
   * @param {number} [object.x=0] - The x coordinate of the vector. Default is 0.
   * @param {number} [object.y=0] - The y coordinate of the vector. Default is 0.
   * @constructor
   */
  constructor({ x = 0, y = 0 } = {}) {
    this._x = x;
    this._y = y;
  }

  /**
   * @description Sets or Gets the `x` coordinate of the vector.
   */
  set x(value) {
    this._x = value;
  }
  get x() {
    return this._x;
  }

  /**
   * @description Sets or Gets the `y` coordinate of the vector.
   */
  set y(value) {
    this._y = value;
  }
  get y() {
    return this._y;
  }

  /**
   * @description Gets the `width` of the vector.
   * @returns {number} The width of the vector.
   * @alias x
   * @readonly
   */
  get width() {
    return this._x;
  }

  /**
   * @description Gets the `height` of the vector.
   * @returns {number} The height of the vector.
   * @alias y
   * @readonly
   */
  get height() {
    return this._y;
  }

  /**
   * @description The `magnitude` of a vector is the square root of the sum of the squares of its components.
   * @returns {number} The magnitude of the vector.
   * @alias length
   * @readonly
   */
  get magnitude() {
    return Math.sqrt(this._x ** 2 + this._y ** 2);
  }

  /**
   * @description The `length` of a vector is the square root of the sum of the squares of its components.
   * @returns {number} The length of the vector.
   * @alias magnitude
   * @readonly
   */
  get length() {
    return Math.sqrt(this._x ** 2 + this._y ** 2);
  }

  /**
   * @description The `direction` property returns the angle of the Vector2D object in radians.
   * @returns {number} The direction of the vector.
   * @alias angle
   * @readonly
   */
  get direction() {
    return Math.atan2(this._y, this._x);
  }

  /**
   * @description The `directionD` property returns the angle of the Vector2D object in degrees.
   * @returns {number} The direction of the vector.
   * @alias angleD
   * @readonly
   */
  get directionD() {
    return (Math.atan2(this._y, this._x) * 180) / Math.PI;
  }

  /**
   * @description The `angle` property returns the angle of the Vector2D object in radians.
   * @returns {number} The angle of the vector.
   * @alias direction
   * @readonly
   */
  get angle() {
    return Math.atan2(this._y, this._x);
  }

  /**
   * @description The `angleD` property returns the angle of the Vector2D object in degrees.
   * @returns {number} The angle of the vector.
   * @alias directionD
   * @readonly
   */
  get angleD() {
    return (Math.atan2(this._y, this._x) * 180) / Math.PI;
  }

  /**
   * @description The `absoluteX` property returns the absolute value of the `x` property.
   * @returns {number} The absolute value of the x property.
   * @readonly
   */
  get absoluteX() {
    return Math.abs(this._x);
  }

  /**
   * @description The `absoluteY` property returns the absolute value of the `y` property.
   * @returns {number} The absolute value of the y property.
   * @readonly
   */
  get absoluteY() {
    return Math.abs(this._y);
  }

  /**
   * @description The `set` method takes two arguments, `x` and `y`, and sets the `x` and `y` values of the vector that the function is called on to those values. If you pass only a SINGLE parameter, it will set both `x` and `y` to the same first argument value.
   * @param {number} x - The x value to add to this vector.
   * @param {number} [y=x] - The y value to add to this vector.
   * @returns {this} The modified Vector2D that the function is called on.
   */
  set(x, y) {
    this._x = x;
    this._y = y ?? x;
    return this;
  }

  /**
   * @description The `add` method takes a vector as an argument and adds the `x` and `y` values of that vector and the `x` and `y` values of the vector that the function is called on and returns a new vector as the result.
   * @summary Does `NOT` modify the vector.
   * @param {Vector2D} vector - The vector to add to this vector.
   * @returns {Vector2D} A new Vector2D object with the sum of the x and y values of the two vectors.
   */
  add(vector) {
    return new Vector2D({
      x: this._x + vector.x,
      y: this._y + vector.y
    });
  }

  /**
   * @description The `addSelf` method takes a vector as an argument and adds the `x` and `y` values of that vector to the `x` and `y` values of the vector that the function is called on.
   * @summary Does `modify` the vector.
   * @param {Vector2D} vector - The vector to add to this vector.
   * @returns {this} The modified Vector2D that the function is called on.
   */
  addSelf(vector) {
    this._x += vector.x;
    this._y += vector.y;
    return this;
  }

  /**
   * @description The `subtract` method takes a vector as an argument and subtracts the `x` and `y` values of that vector and the `x` and `y` values of the vector that the function is called on and returns a new vector as the result.
   * @summary Does `NOT` modify the vector.
   * @param {Vector2D} vector - The vector to subtract from this vector.
   * @returns {Vector2D} A new Vector2D object with the difference between the two Vector2D objects.
   */
  subtract(vector) {
    return new Vector2D({
      x: this._x - vector.x,
      y: this._y - vector.y
    });
  }

  /**
   * @description The `subtractSelf` method takes a vector as an argument and subtracts the `x` and `y` values of that vector from the `x` and `y` values of the vector that the function is called on.
   * @summary Does `modify` the vector.
   * @param {Vector2D} vector - The vector to subtract from this vector.
   * @returns {this} The modified Vector2D that the function is called on.
   */
  subtractSelf(vector) {
    this._x -= vector.x;
    this._y -= vector.y;
    return this;
  }

  /**
   * @description The `multiply` method takes a vector as an argument and multiplies the `x` and `y` values of that vector with the `x` and `y` values of the vector that the function is called on and returns a new vector as the result.
   * @summary Does `NOT` modify the vector.
   * @param {Vector2D} vector - The vector to multiply with this vector.
   * @returns {Vector2D} A new Vector2D object with the product between the two Vector2D objects.
   */
  multiply(vector) {
    return new Vector2D({
      x: this._x * vector.x,
      y: this._y * vector.y
    });
  }

  /**
   * @description The `multiplySelf` method takes a vector as an argument and multiplies the `x` and `y` values of that vector with the `x` and `y` values of the vector that the function is called on.
   * @summary Does `modify` the vector.
   * @param {Vector2D} vector - The vector to multiply with this vector.
   * @returns {this} The modified Vector2D that the function is called on.
   */
  multiplySelf(vector) {
    this._x *= vector.x;
    this._y *= vector.y;
    return this;
  }

  /**
   * @description The `divide` method takes a vector as an argument and divides the `x` and `y` values of that vector with the `x` and `y` values of the vector that the function is called on and returns a new vector as the result.
   * @summary Does `NOT` modify the vector.
   * @param {Vector2D} vector - The vector to divide by this vector.
   * @returns {Vector2D} A new Vector2D object with the quotient between the two Vector2D objects.
   */
  divide(vector) {
    return new Vector2D({
      x: this._x / vector.x,
      y: this._y / vector.y
    });
  }

  /**
   * @description The `divideSelf` method takes a vector as an argument and divides the `x` and `y` values of that vector with the `x` and `y` values of the vector that the function is called on.
   * @summary Does `modify` the vector.
   * @param {number} vector - The vector to divide by this vector.
   * @returns {this} The modified Vector2D that the function is called on.
   */
  divideSelf(vector) {
    this._x /= vector.x;
    this._y /= vector.y;
    return this;
  }

  /**
   * @description The `addScalar` method takes two scalar numbers as arguments and adds to the `x` and `y` values of the vector that the function is called on and returns a new vector as the result. If you pass only a SINGLE parameter, it will add to both `x` and `y` to the same first argument value.
   * @summary Does `NOT` modify the vector.
   * @param {number} scalar - The number to add the vector by.
   * @param {number} [scalar2] - The second number to add the y value only.
   * @returns {Vector2D} A new Vector2D object with the sum of the x and y values of the two vectors.
   */
  addScalar(scalar, scalar2) {
    return new Vector2D({
      x: this._x + scalar,
      y: this._y + (scalar2 ?? scalar)
    });
  }

  /**
   * @description The `addScalarSelf` method takes two scalar numbers as arguments and adds to the `x` and `y` values of the vector that the function is called on. If you pass only a SINGLE parameter, it will add to both `x` and `y` the same first argument value.
   * @summary Does `modify` the vector.
   * @param {number} scalar - The number to add the vector by.
   * @param {number} [scalar2] - The second number to add the y value only.
   * @returns {this} The modified Vector2D that the function is called on.
   */
  addScalarSelf(scalar, scalar2) {
    this._x += scalar;
    this._y += scalar2 ?? scalar;
    return this;
  }

  /**
   * @description The `subtractScalar` method takes two scalar numbers as arguments and subtracts from the `x` and `y` values of the vector that the function is called on and returns a new vector as the result. If you pass only a SINGLE parameter, it will subtract from both `x` and `y` with the same first argument value.
   * @summary Does `NOT` modify the vector.
   * @param {number} scalar - The number to subtract the vector by.
   * @param {number} [scalar2] - The second number to subtract the y value only.
   * @returns {Vector2D} A new Vector2D object with the difference between the two Vector2D objects.
   */
  subtractScalar(scalar, scalar2) {
    return new Vector2D({
      x: this._x - scalar,
      y: this._y - (scalar2 ?? scalar)
    });
  }

  /**
   * @description The `subtractScalarSelf` method takes two scalar numbers as arguments and subtracts from the `x` and `y` values of the vector that the function is called on. If you pass only a SINGLE parameter, it will subtract from both `x` and `y` with the same first argument value.
   * @summary Does `modify` the vector.
   * @param {number} scalar - The number to subtract the vector by.
   * @param {number} [scalar2] - The second number to subtract the y value only.
   * @returns {this} The modified Vector2D that the function is called on.
   */
  subtractScalarSelf(scalar, scalar2) {
    this._x -= scalar;
    this._y -= scalar2 ?? scalar;
    return this;
  }

  /**
   * @description The `multiplyScalar` method takes two scalar numbers as arguments and multiplies the `x` and `y` values of the vector that the function is called on and returns a new vector as the result. If you pass only a SINGLE parameter, it will multiply both `x` and `y` with the same first argument value.
   * @summary Does `NOT` modify the vector.
   * @param {number} scalar - The number to multiply the vector by.
   * @param {number} [scalar2] - The second number to multiply the y value only.
   * @returns {Vector2D} A new Vector2D object with the x and y values multiplied by the scalar.
   */
  multiplyScalar(scalar, scalar2) {
    return new Vector2D({
      x: this._x * scalar,
      y: this._y * (scalar2 ?? scalar)
    });
  }

  /**
   * @description The `multiplyScalarSelf` method takes two scalar numbers as arguments and multiplies the `x` and `y` values of the vector that the function is called on. If you pass only a SINGLE parameter, it will multiply both `x` and `y` with the same first argument value.
   * @summary Does `modify` the vector.
   * @param {number} scalar - The number to multiply the vector by.
   * @param {number} [scalar2] - The second number to multiply the y value only.
   * @returns {this} The modified Vector2D that the function is called on.
   */
  multiplyScalarSelf(scalar, scalar2) {
    this._x *= scalar;
    this._y *= scalar2 ?? scalar;
    return this;
  }

  /**
   * @description The `divideScalar` method takes two scalar numbers as arguments and divides the `x` and `y` values of the vector that the function is called on and returns a new vector as the result. If you pass only a SINGLE parameter, it will divide both `x` and `y` with the same first argument value.
   * @summary Does `NOT` modify the vector.
   * @param {number} scalar - The number to divide the vector by.
   * @param {number} [scalar2] - The second number to divide the y value only.
   * @returns {Vector2D} A new Vector2D object with the x and y values divided by the scalar.
   */
  divideScalar(scalar, scalar2) {
    return new Vector2D({
      x: this._x / scalar,
      y: this._y / (scalar2 ?? scalar)
    });
  }

  /**
   * @description The `divideScalarSelf` method takes two scalar numbers as arguments and divides the `x` and `y` values of the vector that the function is called on. If you pass only a SINGLE parameter, it will divide both `x` and `y` with the same first argument value.
   * @summary Does `modify` the vector.
   * @param {number} scalar - The number to divide the vector by.
   * @returns {this} The modified Vector2D that the function is called on.
   * @param {number} [scalar2] - The second number to divides the y value only.
   */
  divideScalarSelf(scalar, scalar2) {
    this._x /= scalar;
    this._y /= scalar2 ?? scalar;
    return this;
  }

  /**
   * @description The `dotProduct` method takes a vector as an argument and returns the dot product of that vector and the vector that the function is called on.
   * @summary Does `NOT` modify the vector.
   * @param {Vector2D} vector - The vector to dot with this vector.
   * @returns {number} The dot product of the two Vector2Ds.
   */
  dotProduct(vector) {
    return this._x * vector.x + this._y * vector.y;
  }

  /**
   * @description The `crossProduct` method takes a vector as an argument and returns the cross product of that vector and the vector that the function is called on.
   * @summary Does `NOT` modify the vector.
   * @param {Vector2D} vector - The vector to dot with this vector.
   * @returns {number} The dot product of the two Vector2Ds.
   */
  crossProduct(vector) {
    return this._x * vector.y - this._y * vector.x;
  }

  /**
   * @description The `distance` method takes a vector as an argument and returns the distance between that vector and the vector that the function is called on.
   * @summary Does `NOT` modify the vector.
   * @param {Vector2D} vector - The vector to calculate the distance to.
   * @returns {number} The distance between the two Vector2Ds.
   */
  distance(vector) {
    return Math.sqrt((this._x - vector.x) ** 2 + (this._y - vector.y) ** 2);
  }

  /**
   * @description The `lerp` method takes a vector and alpha as arguments and returns the linear interpolation between that vector and the vector that the function is called on, where alpha is the percent distance along the line. (alpha = 0 will be this vector, and alpha = 1 will be the vector passed in).
   * @param {Vector2D} vector - The vector to interpolate towards.
   * @param {number} alpha - Interpolation factor, typically in the closed interval [0, 1].
   * @returns {number} The linearly interpolates between the two Vector2Ds.
   */
  lerp(vector, alpha) {
    this._x += (vector._x - this._x) * alpha;
    this._y += (vector._y - this._y) * alpha;
    return this;
  }

  /**
   * @description The `rotate` method takes a pivot point (Vector2D | object) and an angle value (in degrees) as arguments and rotates the vector around that pivot point by the given angle value.
   * @summary Does `modify` the vector.
   * @param {Vector2D|{x:number,y:number}} point - The pivot point (Vector2D | object) to rotate around.
   * @param {number} angle - The angle /in degrees/ to rotate the vector by.
   * @returns {this} The modified Vector2D that the function is called on.
   */
  rotate(point, angle) {
    const radians = (Math.PI / 180) * angle;
    const cos = Math.cos(radians);
    const sin = Math.sin(radians);

    const newX = cos * (this._x - point.x) + sin * (this._y - point.y) + point.x;
    const newY = cos * (this._y - point.y) - sin * (this._x - point.x) + point.y;

    this._x = newX;
    this._y = newY;
    return this;
  }

  /**
   * @description The `ceil` method rounds UP the `x` and `y` values of the vector that the function is called on to the nearest integer value.
   * @summary Does `modify` the vector.
   * @returns {this} The modified Vector2D that the function is called on.
   */
  ceil() {
    this._y = Math.ceil(this._y);
    this._x = Math.ceil(this._x);

    return this;
  }

  /**
   * @description The `floor` method rounds DOWN the `x` and `y` values of the vector that the function is called on to the nearest integer value.
   * @summary Does `modify` the vector.
   * @returns {this} The modified Vector2D that the function is called on.
   */
  floor() {
    this._y = Math.floor(this._y);
    this._x = Math.floor(this._x);

    return this;
  }

  /**
   * @description The `round` method rounds the `x` and `y` values of the vector that the function is called on to the nearest integer value.
   * @summary Does `modify` the vector.
   * @returns {this} The modified Vector2D that the function is called on.
   */
  round() {
    this._y = Math.round(this._y);
    this._x = Math.round(this._x);

    return this;
  }

  /**
   * @description The `min` method takes a vector as an argument and if the `x` and `y` values of that vector are lesser than the `x` and `y` values of the vector that the function is called on, set the `x` and `y` value of the vector that the function is called on to the `x` and `y` value of the vector passed in.
   * @summary Does `modify` the vector.
   * @param {Vector2D} vector - The vector to compares with.
   * @returns {this} The modified Vector2D that the function is called on.
   */
  min(vector) {
    if (this._x > vector.x) this._x = vector.x;
    if (this._y > vector.y) this._y = vector.y;
    return this;
  }

  /**
   * @description The `max` method takes a vector as an argument and if the `x` and `y` values of that vector are greater than the `x` and `y` values of the vector that the function is called on, set the `x` and `y` value of the vector that the function is called on to the `x` and `y` value of the vector passed in.
   * @summary Does `modify` the vector.
   * @param {Vector2D} vector - The vector to compares with.
   * @returns {this} The modified Vector2D that the function is called on.
   */
  max(vector) {
    if (this._x < vector.x) this._x = vector.x;
    if (this._y < vector.y) this._y = vector.y;
    return this;
  }

  /**
   * @description The `equals` method takes a vector as an argument and returns true if the `x` and `y` values of that vector are strictly equal to the `x` and `y` values of the vector that the function is called on.
   * @summary Does `NOT` modify the vector.
   * @param {Vector2D} vector - The vector to compare to.
   * @returns {boolean} The comparison boolean value between the two Vector2Ds.
   */
  equals(vector) {
    return this._x === vector.x && this._y === vector.y;
  }

  /**
   * @description The `clear` method sets the `x` and `y` values of the vector that the function is called on to 0.
   * @summary Does `modify` the vector.
   * @returns {this} The modified Vector2D that the function is called on.
   */
  clear() {
    this._x = 0;
    this._y = 0;
    return this;
  }

  /**
   * @description The `invert` method inverts the `x` and `y` values of the vector that the function is called on.
   * @summary Does `modify` the vector.
   * @returns {this} The modified Vector2D that the function is called on.
   */
  invert() {
    this._x *= -1;
    this._y *= -1;
    return this;
  }

  /**
   * @description The `normalize` method returns a new vector that is the normalized version of the vector that the function is called on.
   * @summary Does `NOT` modify the vector.
   * @returns {Vector2D} A new Vector2D with the normalized x and y values.
   */
  normalize() {
    return new Vector2D({
      x: this._x / Math.sqrt(this._x ** 2 + this._y ** 2) || 1,
      y: this._y / Math.sqrt(this._x ** 2 + this._y ** 2) || 1
    });
  }

  /**
   * @description The `copy` method takes a vector as an argument and copies the `x` and `y` values of that vector into the `x` and `y` values of the vector that the function is called on.
   * @summary Does `modify` the vector.
   * @param {Vector2D} vector - The vector to copy.
   * @returns {this} The modified Vector2D that the function is called on.
   */
  copy(vector) {
    this._x = vector.x;
    this._y = vector.y;
    return this;
  }

  /**
   * @description The `clone` method returns a new vector with the same `x` and `y` values as the vector that the function is called on.
   * @summary Does `NOT` modify the vector.
   * @returns {Vector2D} A new Vector2D object with the same x and y values as the original Vector2D object.
   */
  clone() {
    return new Vector2D({
      x: this._x,
      y: this._y
    });
  }

  /**
   * @description The `toString` method returns a string representing the `x` and `y` values of the vector that the function is called on.
   * @summary Does `NOT` modify the vector.
   * @returns {string} A string representation of the x and y values of Vector2D that the function is called on.
   */
  toString() {
    return `x: ${this._x}, y: ${this.y}`;
  }

  /**
   * @description The `toArray` method returns an array of the `x` and `y` values of the vector that the function is called on.
   * @summary Does `NOT` modify the vector.
   * @returns {Array<number>} An array containing the x and y values of Vector2D that the function is called on.
   */
  toArray() {
    return [this._x, this._y];
  }

  /**
   * @description This method returns an object with the properties `x` and `y`, which are set to the values of the Vector2D object values that are called the function.
   * @summary Does `NOT` modify the vector.
   * @returns {{x: number, y: number}} An object with the properties x and y values of Vector2D that the function is called on.
   */
  toObject() {
    return { x: this._x, y: this._y };
  }
}
