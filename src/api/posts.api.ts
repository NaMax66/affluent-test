import { Post } from '@/specification/DTO/Post';

const URL = 'https://jsonplaceholder.typicode.com/posts';

export const readPosts = async () => {
  const response = await fetch(URL);
  /* enhancement: add post list validation */
  const posts: Post[] = await response.json();

  return posts;
};
