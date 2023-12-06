/* eslint-disable */
export default function cleanSet(set, startString) {
  if((set instanceof Set) && (typeof startString === 'string')) {
    const length = startString.length;
    let final = [];
    if (length == 0) {
      return final.join('-');
    }
    for (let i of set) {
      if (i && i.startsWith(startString)) {
        final.push(i.slice(length));
      }
    }
    return final.join('-'); 
  }
  return '';
}
