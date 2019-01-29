import React from 'react';
import App from '../App';
import {shallow} from "enzyme";

it('should render component correctly', () => {
  const component = shallow(<App/>);
  expect(component.exists('.App')).toEqual(true);
});

