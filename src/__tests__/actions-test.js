import *  as actions from '../js/actions/index';
import {mockActiveItem} from './mock';

describe('actions', () => {
  describe('ITEM_SELECTED', () => {
    test('should create an action to return the selected item', () => {
    const expectedAction = {
      type: 'ITEM_SELECTED',
      item: mockActiveItem
    }
    expect(actions.selectItem(mockActiveItem)).toEqual(expectedAction);
  });
  });
});
