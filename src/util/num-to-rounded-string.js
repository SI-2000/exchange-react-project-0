import { roundTo } from "./round-number";

export default function numToRoundedString(numbers_object) {
  const newObject = {};
  const keys = Object.keys(numbers_object);
  keys.map((key) => {
    if (typeof numbers_object[key] === "number") {
      newObject[key] = roundTo(numbers_object[key].toString(), 2);
    } else if (/\d+/.test(numbers_object[key])) {
      newObject[key] = roundTo(numbers_object[key], 2);
    } else {
      newObject[key] = numbers_object[key];
    }
  });
  return newObject;
}
