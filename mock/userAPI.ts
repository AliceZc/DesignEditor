import { defineMock } from 'umi';
import Mock from 'mockjs';

export default defineMock({
  'GET /api/getUser': (req: any, res: any) => {
    res.json({
      error: '111111',
      message: '正常',
      object: Mock.mock({
        'name|2': 'hero',
        'gender|1': ['male', 'female'],
      }),
      status: 1,
    });
  },
  'GET /api/testRouter': (req: any, res: any) => {
    res.json({
      error: '111111',
      message: '正常',
      object: {
        testResult: 'mock test success',
      },
      status: 1,
    });
  },
});
