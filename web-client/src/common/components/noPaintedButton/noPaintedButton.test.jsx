import React from 'react';
import { mount } from 'enzyme';
import NoPaintedButton from './NoPaintedButton';

describe('NoPaintedButton Component', () => {
  it('NoPaintedButton Snapshot', () => {
    expect(mount(<NoPaintedButton />)).toMatchSnapshot();
  });
});
