const mockList = [
  { title: 'Beyond good and evil', type: 'book'},
  { title: 'Clockwork Orange', type: 'film'},
  { title: 'Deus Ex-Machine', type: 'game'}
]

const mockActiveItem =  { title: 'Deus Ex-Machine', type: 'game'};

test('should returns mock values', () => {
  expect(mockList).toEqual(mockList);
  expect(mockActiveItem).toEqual(mockActiveItem);
});

export {mockList, mockActiveItem};
