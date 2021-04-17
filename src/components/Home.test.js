import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home.js';
import "../setupTest.js"

it("starts with Welcome header", () => {
    const home = shallow(<Home />);
    expect(home.text()).toEqual(expect.stringContaining('Welcome'));
  
});
