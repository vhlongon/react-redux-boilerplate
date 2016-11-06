import React from 'react';
import {ItemDetails} from '../js/containers/item-details';
import renderer from 'react-test-renderer';
import {mockActiveItem} from './mock';

// This example uses react-test-renderer
describe('components', () => {
  describe('ItemDetails', () => {
    test('Should show the initial state / no item selected', () => {
      const component = renderer.create(
          <ItemDetails activeItem={null} />
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    test('Should show a selected/clicked item', () => {
      const component = renderer.create(
          <ItemDetails activeItem= {mockActiveItem} />
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
