import * as React from 'react';
import { createForm } from '@formily/core';
import { FormProvider, FormConsumer, Field } from '@formily/react';
import {
  FormItem,
  FormLayout,
  Input,
  FormButtonGroup,
  Submit,
} from '@formily/antd';
import { reject } from 'lodash';

const FormDemo: React.FC = () => {
  //创建表单核心领域模型
  const form = createForm();
  const submitForm = (values: any) => {
    console.log(values);
    //返回一个promise,如果正处于pending状态就会出现loading效果
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(123);
      }, 5000);
    });
  };
  return (
    //FormProvider: 接收form,并将Form实例传递到子组件
    <FormProvider form={form}>
      {/* FormLayout 控制表单布局细节，更多属性可参考formily文档*/}
      <FormLayout layout="vertical">
        <Field
          name="input" //表单values的key
          title="输入框" //表单字段的标题,具体呈不呈现由decorator决定
          required //必填校验，如何表现也与decorator有关
          initialValue="Hello world" //字段默认值
          decorator={[FormItem]} //字段UI装饰器，一般都是FormItem
          component={[Input]} //字段输入控件
        />
      </FormLayout>
      {/* FormConsumer 会自动收集表单依赖，如果依赖项发生变化，就会重新渲染 form.values.[name]可以获取表单的值*/}
      <FormConsumer>
        {() => (
          <div
            style={{
              marginBottom: 20,
              padding: 5,
              border: '1px dashed #666',
            }}
          >
            实时响应：{form.values.input}
          </div>
        )}
      </FormConsumer>
      {/* FormButtonGroup 表单按钮组容器 */}
      <FormButtonGroup>
        {/* Submit组件  实现了提交按钮，自动处理loading， onSubmit替代了自己写的onclick, 其他地方调用form.submit方法也可以提交*/}
        <Submit onSubmit={(val) => submitForm(val)}>提交</Submit>
      </FormButtonGroup>
    </FormProvider>
  );
};
const Demo1 = () => {
  return (
    <div>
      <h1>This is Demo1:基础表单（纯JSX写法）</h1>
      <div>
        <FormDemo />
      </div>
    </div>
  );
};

export default Demo1;
