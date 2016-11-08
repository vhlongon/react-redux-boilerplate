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

  const component = shallow(<ItemsList {...props} />);

  return {
    props,
    component
  }
}

describe('components', () => {
  describe('ItemsList', () => {

    test('should render self and subcomponents', () => {
      const { component, props } = setup();
      expect(component.text()).toMatchSnapshot();
    });

    test('should call selectItem passing the item when clicking on a list item ', () => {
       const { component, props } = setup();

      // enzyme find() will return a list of nodes if there is more than one
      // we use the forEach handlar to go through each item on the node list
      component.find('li').forEach((node, i) => {
        // here we simulate a click on each item byt doing so:
        node.props().onClick();
        // or so: node.simulate('click');

        // then we extract the title and type values of the object returned from each of the calls
        let {title, type} = props.selectItem.mock.calls[i][0];
        // and make sure they match the values for the item at the same index on our mock props (items) above
        expect(title).toBe(props.items[i].title);
        expect(type).toBe(props.items[i].type);
      });
    });
  });
});
