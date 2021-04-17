import React from 'react';
import { shallow } from 'enzyme';
import Nav from './Nav.js';
import "../setupTest.js"

it("renders without crashing", () => {
  shallow(<Nav />);
});
