import replaceItemInArray from './replaceItemInArray';

describe('replaceItemInArray', () => {
  it('should replace item in array', () => {
    const array = [
      {id: 1, name: 'test'},
      {id: 2, name: 'test2'},
      {id: 3, name: 'test3'}
    ];

    const result = replaceItemInArray(array, { id: 2, name: 'target'});

    expect(result[1]).toMatchObject({ id: 2, name: 'target'});
  });

  it('should return array with the same objects if id not match', () => {
    const array = [
      { id: 1, name: 'test' },
      { id: 2, name: 'test2' },
      { id: 3, name: 'test3' }
    ];

    const result = replaceItemInArray(array, { id: 4, name: 'target' });

    expect(result).toMatchObject(array);
  });
});
