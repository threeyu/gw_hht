/**
 * check value type
 * @usage is('String', obj)
 * @param  {String}  type
 * @param  {*}  val
 * @return {Boolean}
 */
export function is(type, val) {
  return Object.prototype.toString.call(val) === `[object ${type}]`
}