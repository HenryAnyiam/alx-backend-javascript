/* eslint-disable */
export default function cleanSet(set, startString) {
  if(set instanceof Set && typeof startString === 'string') {
    const length = startString.length;
    let finalString = '';
    if (length == 0) {
      return finalString;
    }
    for (let i of set) {
      let start = i.slice(0, length);
      if (start === startString) {
        finalString = finalString.concat('-', i.slice(length));
      }
    }
    return finalString.slice(1); 
  }
}
