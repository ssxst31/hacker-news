import { get } from '../axios';

export const getCategory = (category: string) => {
  return get(`/${category}.json?print=pretty`);
};

export const getCategoryDetail = (id: number) => {
  return get(`/item/${id}​.json?print=pretty`);
};
