import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { getCategoryDetail } from '../api/category';

function MainPage() {
  const { id } = useParams();
  const [categoryDetail, setCategoryDetail] = useState<any>();

  useEffect(() => {
    getCategoryDetail(Number(`${id}`)).then((res) => {
      setCategoryDetail(res.data);
    });
  }, []);

  return <div className="grid grid-cols-10 gap-10 text-center"></div>;
}

export default MainPage;
