import React from 'react';

import PaintedButton from '../common/components/paintedButton';
import NoPaintedButton from '../common/components/noPaintedButton';

import './app.scss';

export default function App() {
  return (
    <div>
      <PaintedButton caption="Register" />
      <NoPaintedButton caption="Login" />
    </div>
  );
}
