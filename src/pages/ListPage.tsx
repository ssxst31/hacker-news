import React, { useState, useEffect } from 'react';

import { getCategory } from '../api/category';
import { useParams } from 'react-router-dom';

function MainPage() {
  const { text } = useParams();

  const [categoryList, setCategoryList] = useState<number[]>();

  useEffect(() => {
    getCategory(`${text}`).then((res) => {
      setCategoryList(res.data);
    });
  }, []);

  return (
    <div className="grid grid-cols-10 gap-10 text-center">
      {categoryList?.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}

export default MainPage;
