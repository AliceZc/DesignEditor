import { fetchApi } from '@/utils/fetchApi';
//获取用户信息
export const getUserInfo = (id: number) => {
  return fetchApi.get('/api/getUser', { id });
};
