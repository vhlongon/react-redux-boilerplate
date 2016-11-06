import reducerList from '../js/reducers/reducer_list';
import deepFreeze from 'deep-freeze';
import {mockList} from './mock';

describe('reducers', () => {
  describe('list reducer', () => {
    test('returns the initial state/list of items', () => {
    deepFreeze(mockList);
    expect(reducerList()).toEqual(mockList);
    });
  });
});
