import React from 'react';
import { mount } from 'enzyme';
import Image from './Image';

describe('Image Component', () => {
  it('Image Snapshot', () => {
    expect(mount(<Image />)).toMatchSnapshot();
  });
});
