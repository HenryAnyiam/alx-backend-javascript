/* eslint-disable */
export default function handleResponseFromAPI(promise) {
  promise.then(response => {return { status: 200, body: 'success' }}
  ).catch(error => {new Error()})
  .finally(console.log("Got a response from the API"));
}
