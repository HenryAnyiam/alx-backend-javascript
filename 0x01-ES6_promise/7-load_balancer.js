/* eslint-disable */
export default function loadBalancer(chinaDownload, USDownload) {
  let myPromise = Promise.race([chinaDownload, USDownload]);

  myPromise.then((value) => value);
  return myPromise;
}
