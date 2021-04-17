import React from 'react';
import { shallow } from 'enzyme';
import About from './About.js';
import "../setupTest.js"

it("outputs about paragraph with my name", () => {
    const about = shallow(<About />);
    expect(about.text()).toEqual(expect.stringContaining('My name is Charles Alders'));
});
