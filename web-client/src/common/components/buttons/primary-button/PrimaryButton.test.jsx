import React from 'react';
import { mount } from 'enzyme';
import PrimaryButton from './PrimaryButton';

describe('PaintedButton Component', () => {
  it('PaintedButton Snapshot', () => {
    expect(mount(<PrimaryButton />)).toMatchSnapshot();
  });
});
