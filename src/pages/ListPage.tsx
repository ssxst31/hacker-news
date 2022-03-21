import React, { useState, useEffect } from 'react';

import { getCategory } from '../api/category';
import { useParams, Link } from 'react-router-dom';

function MainPage() {
  const { text } = useParams();

  const [categoryList, setCategoryList] = useState<number[]>();

  useEffect(() => {
    getCategory(`${text}`).then((res) => {
      if (text === 'newstories') {
        setCategoryList(res.data.sort((a: number, b: number) => a - b));
      } else {
        setCategoryList(res.data);
      }
    });
  }, []);

  return (
    <div className="grid grid-cols-10 gap-10 text-center">
      {categoryList?.map((item, index) => (
        <Link to={`/${text}/${item}`}>
          <div key={index}>{item}</div>
        </Link>
      ))}
    </div>
  );
}

export default MainPage;
