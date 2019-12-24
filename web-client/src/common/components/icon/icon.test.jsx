import React from 'react';
import { mount } from 'enzyme';
import Icon from './Icon';

describe('Icon Component', () => {
  it('Icon Snapshot', () => {
    expect(mount(<Icon />)).toMatchSnapshot();
  });
});
