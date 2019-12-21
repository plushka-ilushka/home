import React from 'react';

import Input from '../common/components/input';

import './app.scss';

export default function App() {
  return (
    <div>
      <Input name="Email" label="Email" htmlFor="Email" title="Email" placeholder="email" id="Email" />
      <Input type="password" name="password" label="password" htmlFor="password" title="Password" id="password" />
    </div>
  );
}
