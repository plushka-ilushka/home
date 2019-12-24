import React from 'react';
import { mount } from 'enzyme';
import SecondaryButton from './SecondaryButton';

describe('NoPaintedButton Component', () => {
  it('NoPaintedButton Snapshot', () => {
    expect(mount(<SecondaryButton />)).toMatchSnapshot();
  });
});
