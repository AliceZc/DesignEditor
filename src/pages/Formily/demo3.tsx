import * as React from 'react';
import { Field, createForm } from '@formily/core';
import { FormProvider, createSchemaField } from '@formily/react';
import { FormItem, Submit, FormLayout } from '@formily/antd';
import { Input, Select } from 'antd';

//创建Form实例,可传入对象参数（配置初始值，表单状态等）
const form = createForm({
  initialValues: {
    input1: 'this is input1',
    input2: 'this is input2',
    select: 1,
  },
});
//工厂函数，创建schemaField组件
const SchemaField = createSchemaField({
  //组件列表，注册
  components: {
    Input,
    Select,
    FormItem,
  },
  //全局作用域,实现协议表达式变量注入
  scope: {
    myReaction(field: Field) {
      const value = field.value;
      if (value === 'abc') {
        field.setSelfErrors(['error1']);
        field.setValue('123');
        form.setValues({ input2: '已经被input1改动' });
      }
    },
  },
});
//schema模型
const schema = {
  type: 'object',
  properties: {
    input1: {
      type: 'string',
      title: 'input1',
      'x-component': 'Input',
      'x-decorator': 'FormItem',
      required: true,
      'x-validator': [{ required: true }, 'phone'],
      'x-reactions': '{{myReaction}}',
    },
    input2: {
      type: 'string',
      title: 'input2',
      'x-component': 'Input',
      'x-decorator': 'FormItem',
      'x-validator': {
        triggerType: 'onInput',
        format: 'phone',
        message: '这不是我认识的手机号',
        required: false,
      },
    },
    select: {
      type: 'string',
      title: 'select',
      'x-component': 'Select',
      'x-decorator': 'FormItem',
      'x-component-props': {
        style: {
          width: 400,
          // marginTop: 20,
        },
        placeholder: '请输入',
        options: [
          {
            value: 1,
            label: '1',
          },
          {
            value: 2,
            label: '2',
          },
          {
            value: 3,
            label: '3',
          },
        ],
      },
      'x-validator': (value: any, rule: any, ctx: any) => {
        console.log('value:', value, 'rule', rule, 'ctx', ctx);
        if (value === 1) {
          return 'this is a problem';
        } else if (value === 2) {
          return {
            type: 'warning',
            message: 'It can not be 2',
          };
        } else if (value === 3) {
          return false;
        }
      },
    },
  },
};

const Demo3: React.FC = () => {
  return (
    <div>
      <h3>formily 校验和联动</h3>
      <h4>联动：改变input1，select选择2</h4>
      <h4>单个检验: input2的格式满足email格式</h4>
      <h4>提交时，自定义校验input1的值是否全是数字，select和input2是否必选</h4>
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
export default Demo3;
