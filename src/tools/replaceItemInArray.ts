/**
 * Change item in object array by field "id"
 *
 * Params: array - array with objects contains id
 *         item - object that we need replace to
 *
 * Returns: new array of objects
 */

export default function replaceItemInArray<T extends { id: number }>(array: T[], item: T ): T[] {
  const index = array.findIndex((arrayItem) => arrayItem.id === item.id);

  if (index === -1) {
    return array.slice();
  }

  return [
    ...array.slice(0, index),
    item,
    ...array.slice(index + 1),
  ];
}
