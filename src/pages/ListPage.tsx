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

  return <div className="flex h-screen justify-center items-center"></div>;
}

export default MainPage;
