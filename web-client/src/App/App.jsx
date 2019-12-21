import React from 'react';

import Icon from '../common/components/icon';

import shape from '../assets/icons/shape.svg';
import key from '../assets/icons/key.svg';
import suche from '../assets/icons/suche.svg';

import './app.scss';

export default function App() {
  return (
    <div>
      <Icon glyph={shape.id} viewBox={shape.viewBox} />
      <Icon glyph={key.id} viewBox={key.viewBox} />
      <Icon glyph={suche.id} viewBox={suche.viewBox} />
    </div>
  );
}
