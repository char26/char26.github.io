import React from 'react';
import { shallow } from 'enzyme';
import App from './App.js';
import "./setupTest.js"

it("renders without crashing", () => {
  shallow(<App />);
});
