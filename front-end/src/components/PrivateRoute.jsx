import React from 'react';
import { Redirect } from 'react-router-dom';

export default function PrivateRoute() {
  return (
    <div>
      <Redirect to="/login" />
    </div>
  );
}
