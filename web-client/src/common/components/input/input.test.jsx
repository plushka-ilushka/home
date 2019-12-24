import React from 'react';
import { mount } from 'enzyme';
import Input from './Input';

describe('Input Component', () => {
  it('Input Snaphot', () => {
    expect(mount(<Input />)).toMatchSnapshot();
  });
});
