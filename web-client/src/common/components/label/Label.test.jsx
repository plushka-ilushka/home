import React from 'react';
import { mount } from 'enzyme';
import Label from './Label';

describe('Label Component', () => {
  it('Label Snaphot', () => {
    expect(mount(<Label className="a">children</Label>)).toMatchSnapshot();
  });
});
