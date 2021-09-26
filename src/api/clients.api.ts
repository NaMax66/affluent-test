// CRUD layer

// enhancement: add error handling

import { User } from '@/specification/DTO/User';
import errorHandler from '@/services/apiErrorHandler';
import { Status } from '@/specification/Status';

const url = 'https://jsonplaceholder.typicode.com/users';

export const createUser = async (user: User) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
    /* enhancement: make sure that the object is really "User" type */
  const returnedUser: User = await response.json();

  return returnedUser;
};

export const readUsers = async () => {
  const response = await fetch(url);
  /* enhancement: add user list validation */
  const users: User[] = await response.json();

  return users;
};

export const deleteUser = async (id: number): Promise<Status> => {
  const response = await fetch(`${url}/${id}`, { method: 'DELETE'});

  if (response.status === 200) {
    return 'success';
  } else {
    errorHandler.reportUser(new Error('can\'t delete user with id: ' + id));
    return 'error';
  }
};
