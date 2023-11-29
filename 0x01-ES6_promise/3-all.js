/* eslint-disable */
import { uploadPhoto, createUser } from './utils'

export default function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();
  
  return Promise.all([photo, user])
  .then(response => {
    const body = response[0].body;
    const firstName = response[1].firstName;
    const lastName = response[1].lastName;
    console.log(`${body} ${firstName} ${lastName}`,);
  }).catch(error => {console.log("Signup system offline")});
}
