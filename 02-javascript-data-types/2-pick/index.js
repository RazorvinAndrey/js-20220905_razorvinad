/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  let nw = {};

  for (let fil in fields){
    if (obj.hasOwnProperty(fields[fil])){
      nw[fields[fil]] = obj[fields[fil]];
    }
  }
  return nw;
};
