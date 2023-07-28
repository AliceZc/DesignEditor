import { ResponseStructure } from '@/app';
import { AxiosRequestConfig } from '@umijs/max';
import { request } from 'umi';
import { getToken } from './common';
interface Configs {
  url: string;
  data?: any;
  method?: string;
  params?: any;
  options?: AxiosRequestConfig;
}

export const fetchApi = (configs: Configs) => {
  const { url, data = {}, method = 'GET', params = {}, options = {} } = configs;

  return request(url, {
    method,
    params,
    headers: { Authorization: getToken() },
    data,
    ...options,
  }) as unknown as Promise<ResponseStructure>;
};

fetchApi.get = (
  url: string,
  params: any = {},
  options: AxiosRequestConfig = {},
) =>
  fetchApi({
    url,
    params,
    options,
  });

fetchApi.delete = (
  url: string,
  params: any = {},
  options: AxiosRequestConfig = {},
) =>
  fetchApi({
    url,
    params,
    method: 'DELETE',
    options,
  });

fetchApi.head = (
  url: string,
  params: any = {},
  options: AxiosRequestConfig = {},
) =>
  fetchApi({
    url,
    params,
    method: 'HEAD',
    options,
  });

fetchApi.options = (
  url: string,
  params: any = {},
  options: AxiosRequestConfig = {},
) =>
  fetchApi({
    url,
    params,
    method: 'OPTIONS',
    options,
  });

fetchApi.post = (
  url: string,
  data: any = {},
  options: AxiosRequestConfig = {},
) =>
  fetchApi({
    url,
    data,
    method: 'POST',
    options,
  });

fetchApi.put = (
  url: string,
  data: any = {},
  options: AxiosRequestConfig = {},
) =>
  fetchApi({
    url,
    data,
    method: 'PUT',
    options,
  });

fetchApi.patch = (
  url: string,
  data: any = {},
  options: AxiosRequestConfig = {},
) =>
  fetchApi({
    url,
    data,
    method: 'PATCH',
    options,
  });

fetchApi.AbortController = new AbortController();
