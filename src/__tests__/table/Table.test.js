import React from 'react';
import Table from "../../components/table/Table";
import { shallow } from "enzyme";

describe('Table Component Test', function () {

  let component;

  beforeAll(() => {
    component =  shallow(<Table/>);
  });

  it('should render component correctly', () => {
    expect(component.exists('.app-table')).toEqual(true);
  });


  it('should read drivers data', () => {
    const driverData = component.state().drivers;
    expect(driverData.drivers.length).toEqual(21);
  });

});

