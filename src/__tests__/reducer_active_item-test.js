import reducerActiveItem from '../js/reducers/reducer_active_item';
import deepFreeze from 'deep-freeze';
import {mockActiveItem} from './mock';

describe('reducers', () => {
  describe('SelectItem reducer', ()=> {
    const initialState =  {};

    test('should return initial state', () => {
      expect(reducerActiveItem(initialState, {})).toEqual(initialState);
    });

    test('should returns the a selected/active item', () => {
      const action = {
        type: 'ITEM_SELECTED',
        item: mockActiveItem
      };

      deepFreeze(action);
      deepFreeze(initialState);
      expect(reducerActiveItem(initialState, action)).toEqual(mockActiveItem);
    });
  });
});
