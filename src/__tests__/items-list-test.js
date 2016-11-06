import React from 'react';
import {ItemsList} from '../js/containers/items-list';
import { shallow, render } from 'enzyme';
import {mockList} from './mock';

// This example uses enzyme shallow render
function setup() {
  const props = {
    items: mockList,
    selectItem: jest.fn()
  };

  const enzymeWrapper = shallow(<ItemsList {...props} />);

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('ItemsList', () => {

    test('should render self and subcomponents', () => {
      const { enzymeWrapper, props } = setup();
      expect(enzymeWrapper.text()).toMatchSnapshot();
    });

    test('should call selectItem passing the item when clicking on a list item ', () => {
       const { enzymeWrapper, props } = setup();

      enzymeWrapper.find('li').forEach((node, i) => {
        node.props().onClick();
        let {title, type} = props.selectItem.mock.calls[i][0];
        expect(title).toBe(props.items[i].title);
        expect(type).toBe(props.items[i].type);
      });
    });
  });
});
