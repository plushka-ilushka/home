import React from 'react';

import Checkbox from '../common/components/checkbox/Checkbox';

import './app.scss';

export default function App() {
  return (
    <div>
      <Checkbox caption="Remember me" checked onChange={() => {}} />
    </div>
  );
}
