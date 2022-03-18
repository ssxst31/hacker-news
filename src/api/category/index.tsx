import { get } from '../axios';

export const getCategory = (category: string) => {
    return get(`/${category}.json?print=pretty`);
};
