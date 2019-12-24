import React from 'react';

import PrimaryButton from '../common/components/buttons/primary-button';
import SecondaryButton from '../common/components/buttons/secondary-button';

import './app.scss';

export default function App() {
  return (
    <div>
      <PrimaryButton caption="Register" />
      <SecondaryButton caption="Login" />
    </div>
  );
}
