import React from 'react';
import { mount } from 'enzyme';
import PaintedButton from './PaintedButton';

describe('PaintedButton Component', () => {
    it('PaintedButton Snapshot', () => {
        expect(mount(<PaintedButton/>)).toMatchSnapshot();
    })
})