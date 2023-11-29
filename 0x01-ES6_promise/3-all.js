/* eslint-disable */
import { uploadPhoto, createUser } from './utils'

export default function handleProfileSignup() {
  let myPromises = Promise.all([uploadPhoto(), createUser()]);
  myPromises.then(response => {
    const body = response[0].body;
    const firstName = response[1].firstName;
    const lastName = response[1].lastName
    console.log(`${body} ${firstName} ${lastName}`)
  }).catch(error => {console.log("Signup system offline")});
  return myPromises;
}
