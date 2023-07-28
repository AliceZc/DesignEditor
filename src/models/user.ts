import { getUserInfo } from '@/services';

export default {
  //命名空间，model唯一标识，如果与文件名相同可以直接忽略不写
  namespace: 'user',
  state: {
    count: 0,
    user: {},
  },
  //异步action,发送异步请求 put:触发action call:调用异步逻辑 select:从state中获取数据
  effects: {
    *getUserInfo({ payload: id }: any, { put, call }: any) {
      const { object } = yield getUserInfo(id);
      yield put({
        type: 'updateUser',
        payload: object,
      });
    },
  },
  //同步action,修改state
  reducers: {
    add: (state: any, { payload: num }: any) => {
      return {
        ...state,
        count: state.count + num,
      };
    },
    updateUser: (state: any, { payload: user }: any) => {
      return {
        ...state,
        user: { ...user },
      };
    },
  },
};
