import * as React from 'react';
import { Field, createForm } from '@formily/core';
import { FormProvider, createSchemaField } from '@formily/react';
import { FormItem, Submit, FormLayout, ArrayItems } from '@formily/antd';
import { Input, Select, Button } from 'antd';

//创建Form实例,可传入对象参数（配置初始值，表单状态等）
const form = createForm({
  initialValues: {
    school: '第一中学',
    students: [
      {
        name: 'wang yi',
        gender: 'male',
      },
    ],
  },
});
//工厂函数，创建schemaField组件
const SchemaField = createSchemaField({
  //组件列表，注册
  components: {
    Input,
    Select,
    FormItem,
    ArrayItems,
    Button,
  },
  //全局作用域,实现协议表达式变量注入
  scope: {},
});
//schema模型
const schema = {
  type: 'object',
  properties: {
    school: {
      type: 'string',
      title: 'school',
      'x-component': 'Input',
      'x-decorator': 'FormItem',
      required: true,
      'x-validator': [{ required: true }],
    },
    students: {
      type: 'array',
      'x-decorator': 'FormItem',
      'x-component': 'ArrayItems',
      items: {
        type: 'object',
        'x-component': 'ArrayItems.Item',
        properties: {
          name: {
            type: 'string',
            title: 'name',
            'x-component': 'Input',
            'x-decorator': 'FormItem',
          },
          gender: {
            type: 'string',
            title: 'gender',
            'x-component': 'Input',
            'x-decorator': 'FormItem',
          },
          remove: {
            type: 'void',
            'x-component': 'ArrayItems.Remove',
            'x-component-props': {
              style: {
                marginLeft: 20,
              },
            },
          },
        },
      },
      properties: {
        addition: {
          type: 'void',
          title: 'add',
          'x-component': 'ArrayItems.Addition',
        },
      },
    },
  },
};

const Demo4: React.FC = () => {
  return (
    <div>
      <h3>formily 数组形式</h3>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          background: '#eee',
          padding: '40px 0',
        }}
      >
        <FormProvider form={form}>
          <FormLayout>
            <SchemaField schema={schema}></SchemaField>
            <Submit block size="large" onSubmit={console.log}>
              注册
            </Submit>
          </FormLayout>
        </FormProvider>
      </div>
    </div>
  );
};
export default Demo4;
