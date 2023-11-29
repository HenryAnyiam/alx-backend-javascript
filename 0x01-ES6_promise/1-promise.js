/* eslint-disable */
export default function getFullResponseFromAPI(success) {
  let myPromise = new Promise(function(resolve, reject) {
    if (success == true) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
  myPromise.then(
    (value) => value,
    (error) => error
  );
  return myPromise;
}
