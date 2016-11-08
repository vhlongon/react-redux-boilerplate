import React from 'react';
import App from '../js/components/app';
import { shallow } from 'enzyme';
import {mockActiveItem} from './mock';

function setup() {
  const props = {
    title: 'React redux boilerplate test',
  };

  const component = shallow(<App {...props} />)

  return {
    props,
    component
  }
}

describe('components', () => {
  describe('App', () => {
    test('should render self and subcomponents', () => {
       const { component } = setup();
       expect(component.text()).toMatchSnapshot();
    });
  });
});
