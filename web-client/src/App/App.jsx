import React from 'react';

import Icon from '../common/components/icon';

import shape from '../assets/icons/shape.svg';

import './app.scss';

export default function App() {
  return (
    <div>
      <Icon glyph={shape.id} viewBox={shape.viewBox} />
    </div>
  );
}
