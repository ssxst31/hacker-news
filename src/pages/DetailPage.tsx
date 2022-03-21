import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { getCategoryDetail } from '../api/category';
import { CategoryDetail } from '../type';
import LoadingPage from './LoadingPage';

function MainPage() {
  const { id } = useParams();
  const [categoryDetail, setCategoryDetail] = useState<
    CategoryDetail | undefined
  >();

  useEffect(() => {
    getCategoryDetail(Number(`${id}`)).then((res) => {
      setCategoryDetail(res.data);
    });
  }, []);

  if (!categoryDetail) {
    return <LoadingPage />;
  }

  return (
    <div className=" mx-auto text-center w-full">
      <p>by : {categoryDetail.by}</p>
      <p>id : {categoryDetail.id}</p>
      <p>descendants : {categoryDetail.descendants}</p>
      <p>score : {categoryDetail.score}</p>
      <p>time : {categoryDetail.time}</p>
      <p>title : {categoryDetail.title}</p>
      <p>type : {categoryDetail.type}</p>
      <p>url : {categoryDetail.url}</p>
    </div>
  );
}

export default MainPage;
