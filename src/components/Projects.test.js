import React from 'react';
import { shallow } from 'enzyme';
import Projects from './Projects.js';
import "../setupTest.js"

test('beginning text', () => {
    const projects = shallow(<Projects />);
    expect(projects.text()).toEqual(expect.stringContaining('Below are some screenshots'));
  });
