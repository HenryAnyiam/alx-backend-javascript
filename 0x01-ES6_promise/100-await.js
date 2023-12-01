/* eslint-disable */
import { uploadPhoto, createUser } from './utils'

export default async function asyncUploadUser() {
  let photo;
  let user;

  try {
    photo = await uploadPhoto();
    user = await createUser();
  } catch (e) {
    user = null;
    photo = null;
  }
  
  return {photo, user};
}
