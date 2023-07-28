// 运行时配置
import { message } from 'antd';
import type { RequestConfig } from 'umi';
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}

// 与后端约定的响应数据格式
export interface ResponseStructure {
  error: string;
  message: string;
  object: any;
  status: number;
}

// 运行时配置
export const request: RequestConfig = {
  // 统一的请求设定
  timeout: 60000,
  // 错误处理
  errorConfig: {
    errorHandler(error: any, opts: any) {
      if (opts?.skipErrorHandler) throw error;

      if (error.response) {
        // Axios 的错误
        message.error(`Response status:${error.response.status}`);
      } else if (error.request) {
        // 请求已经成功发起，但没有收到响应
        message.error('None response! Please retry.');
      } else {
        // 发送请求时出了点问题
        message.error('Request error, please retry.');
      }
    },
    errorThrower() {},
  },
  requestInterceptors: [],
  responseInterceptors: [
    (response: any) => {
      const { data } = response;

      if (data.status !== 1) {
        message.error(data.message || '请求失败!');
      }

      return response;
    },
  ],
};
