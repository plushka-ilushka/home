import React from 'react';
import { mount } from 'enzyme';
import Checkbox from './Checkbox';

describe('Checkbox Component', () => {
  it('Checkbox Snapshot', () => {
    expect(mount(<Checkbox />)).toMatchSnapshot();
  });
});
