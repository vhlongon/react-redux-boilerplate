import React from 'react';
import App from '../js/components/app';
import { shallow } from 'enzyme';
import {mockActiveItem} from './mock';

function setup() {
  const props = {
    title: 'React redux boilerplate test',
  };

  const enzymeWrapper = shallow(<App {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('App', () => {
    test('should render self and subcomponents', () => {
       const { enzymeWrapper } = setup();
       expect(enzymeWrapper.text()).toMatchSnapshot();
    });
  });
});
