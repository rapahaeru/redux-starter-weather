import React from 'react';
import Chart from './chart';
import * as Enzyme from 'enzyme';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() })

const TEMPERATURES = {
    unit: "K",
    color: "red",
    data: [292.18, 290.07, 287.95, 284.1, 283.538, 283.286, 284.473, 285.95, 286.725, 284.051, 283.101]
}

describe("Chart component tests", () => {

    it('should load Chart component', () => {
        const wrapper = Enzyme.shallow(<Chart units={ TEMPERATURES.unit } color={ TEMPERATURES.color } data={ TEMPERATURES.data } />);
        //  expect(wrapper.state('disabled')).toEqual(false)
        //  expect(wrapper.find(Checkbox).first().props().disabled).toBe(false)
    });

    it("should update Chart color", () => {
        let newColor = "green";

        const wrapper = mount(<Chart units={ TEMPERATURES.unit } color={ TEMPERATURES.color } data={ TEMPERATURES.data } />);

        // console.log(wrapper.find("div").getElement().props.children);
        expect(wrapper.props().color).toBe(TEMPERATURES.color);

        wrapper.setProps({color: newColor});
        expect(wrapper.props().color).toBe(newColor);

    });

    it("should update the average of temperatures", () => {
        let newTemperatures = [300, 400, 500];

        const wrapper = mount(<Chart units={ TEMPERATURES.unit } color={ TEMPERATURES.color } data={ TEMPERATURES.data } />);
        expect(getAverageTemp(wrapper)).toBe(286);

        wrapper.setProps({ data: newTemperatures });
        expect(getAverageTemp(wrapper)).toBe(400);
    });
});


const getAverageTemp = (wrapper) => wrapper.find("div").getElement().props.children[0];


