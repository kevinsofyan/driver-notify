import React from 'react';
import { shallow,mount } from "enzyme";
import TableDriverList from "../../components/table/TableDriverList";
import driverMockData from "../driverMockData"

describe('Table Driver List Component Test', function () {
    let driverList;
    let component;

    beforeAll(() => {
        driverList = driverMockData;
        component = shallow(<TableDriverList data={driverList}/>);
    });

    it('should render component correctly', () => {
        expect(component.find('tr')).toHaveLength(driverList.drivers.length);
    });

    it('should disabled notify button when suspended', () => {
        const suspendedRow = component.find('tr').at(0);
        const notifyBtn = suspendedRow.find('.notify-btn');
        const status = suspendedRow.find('td').at(4).text();
        expect(status).toContain("YES");
        expect(notifyBtn.props().disabled).toBeTruthy();
    });

    it('should open notify modal', () => {
        const row = component.find('tr').at(1);
        row.find('.notify-btn').simulate('click');
        expect(component.state().isModalOpen).toBeTruthy();
    });


});

