/* eslint-disable */
import signUpUser from './4-user-promise'
import uploadPhoto from './5-photo-reject'
export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const file = uploadPhoto(fileName);

  return Promise.allSettled([user, file])
  .then((values) => values);
}
