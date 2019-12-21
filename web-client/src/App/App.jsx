import React from 'react';

import Checkbox from '../common/components/checkbox';


import './app.scss';

export default function App() {
  return (
    <div>
      <Checkbox name="checkbox" title="Remember me" htmlFor="checkbox" id="checkbox" />
    </div>
  );
}
