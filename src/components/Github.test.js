import React from 'react';
import { shallow } from 'enzyme';
import Github from './Github.js';
import "../setupTest.js"

test('tests end of paragraph text', () => {
    const github = shallow(<Github />);
    expect(github.text()).toEqual(expect.stringContaining('Projects tab of this website.'));
  });
