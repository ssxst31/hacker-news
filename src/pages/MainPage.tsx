import React from 'react';

import Button from '../components/Button';

function MainPage() {
  const categoryList = [
    'topstories',
    'newstories',
    'askstories',
    'showstories',
    'jobstories',
  ];

  return (
    <div className="flex h-screen justify-center items-center">
      {categoryList.map((item, index) => (
        <div className="mx-4">
          <Button text={item} key={index} />
        </div>
      ))}
    </div>
  );
}

export default MainPage;
