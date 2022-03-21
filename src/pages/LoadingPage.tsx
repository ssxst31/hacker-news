import React from 'react';

import { CircularProgress } from '@material-ui/core';

function LoadingPage() {
  return (
    <div className="flex h-screen justify-center items-center text-gray-800">
      <CircularProgress color="inherit" />
    </div>
  );
}

export default LoadingPage;
