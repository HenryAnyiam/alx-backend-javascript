/* eslint-disable */
import { uploadPhoto, createUser } from './utils'

export default function handleProfileSignup() {
  let myPromises = Promise.all([uploadPhoto(), createUser()]);
  myPromises.then(response => {
    console.log(response[0].body, response[1].firstName, response[1].lastName)
  }).catch(error => {console.log("Signup system offline")});
}
