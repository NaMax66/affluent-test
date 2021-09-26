// CRUD layer

// enhancement: add error handling
/*
enhancement: add httpClient to make the transport system abstract.
It need to have the ability change "fetch" method to 'axios' or 'XMLHttpRequest'
*/

import { User } from '@/specification/DTO/User';
import { ResponseStatus } from '@/specification/ResponseStatus';

import errorHandler from '@/services/apiErrorHandler';

const URL = 'https://jsonplaceholder.typicode.com/users';

export const createUser = async (user: User) => {
  const response = await fetch(URL, {
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
  const response = await fetch(URL);
  /* enhancement: add user list validation */
  const users: User[] = await response.json();

  return users;
};

/* enhancement: we cold use method: 'PATCH' for updating name only or e-mail. But for now to make it simple we change all user data */
export const updateUser = async (user: User) => {
  const response = await fetch(`${URL}/${user.id}`, {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  /* enhancement: make sure that the object is really "User" type */
  const returnedUser: User = await response.json();

  return returnedUser;
};

export const deleteUser = async (id: number): Promise<ResponseStatus> => {
  const response = await fetch(`${URL}/${id}`, { method: 'DELETE'});

  if (response.status === 200) {
    return 'success';
  } else {
    errorHandler.reportUser(new Error('can\'t delete user with id: ' + id));
    return 'error';
  }
};
