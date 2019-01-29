import React from 'react';
import Notify from "../../components/notify/Notify";
import { shallow } from "enzyme";

describe('Notify Component Test', function () {

    let component;

    beforeAll(() => {
        component =  shallow(<Notify/>);
    });

    it('should render component correctly', () => {
        expect(component.contains(<h2>Send Message To Driver</h2>)).toBeTruthy();
    });

    it('should update message when textarea changed', () => {
        const textArea = component.find('textarea');
        textArea.simulate('change', {target: {value: "hello world"}});
        expect(component.state().message).toEqual('hello world');
    });


    it('should update message when submit', () => {
        const textArea = component.find('textarea');
        const submit = component.find('.submit-btn');
        textArea.simulate('change', {target: {value: "hello world"}});
        submit.simulate('click');
        expect(component.state().message).toEqual('hello world');
    });

});

