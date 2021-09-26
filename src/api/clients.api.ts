// CRUD
import { User } from '@/specification/DTO/users';

const url = 'https://jsonplaceholder.typicode.com/users';

export const createUser = () => {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      id: 555,
      name: 'Bob',
      username: 'Marley',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((data) => data);
};

export const readUsers = async () => {
  const response = await fetch(url);
  /* enhancement: add user list validation */
  const users: User[] = await response.json();
  return users;
}
