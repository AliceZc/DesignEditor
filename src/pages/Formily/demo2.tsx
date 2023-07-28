import * as React from 'react';
import {
  createForm,
  onFormInit,
  onFormMount,
  onFieldInit,
  createEffectHook,
} from '@formily/core';
import { createSchemaField } from '@formily/react';
import {
  Form,
  FormItem,
  FormLayout,
  Input,
  Select,
  Password,
  Cascader,
  DatePicker,
  Submit,
  Space,
  FormGrid,
  Upload,
  ArrayItems,
  Editable,
  FormButtonGroup,
} from '@formily/antd';
import { action } from '@formily/reactive';
import { Card, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

//声明自定义钩子
const onCustomEvent = createEffectHook(
  'custom-event',
  (payload, form) => (listener) => {
    listener(payload, form);
  },
);

const Demo2 = () => {
  //创建一个Form实例，有很多属性，细节查阅文档，以下是常用的属性
  const form = createForm({
    values: {}, //表单值
    initialValues: {}, //表单默认值
    pattern: 'editable', //表单交互方式，editable 可编辑 | disabled 禁用 | readOnly 只读 | readPretty是否是阅读态
    display: 'visible', //表单显隐
    editable: true, //是否可编辑
    // effects() {
    //form初始化
    // onFormInit(() => {
    //     console.log('表单已初始化')
    // }),
    //field 初始化
    // onFieldInit('target', () => {
    //     console.log('target已初始化');
    // }),
    //注册已声明的钩子，在组件上用form.notify('custom-event', 'This is Custom Event')的方式通知该hooks触发
    // onCustomEvent((payload:any, form:any) => {
    //     console.log(payload + ' Form: ' + form.id)
    // })
    //},                      //副作用逻辑
    validateFirst: true, //	是否只校验第一个非法规则
  });

  const IDUpload = (props: any) => {
    return (
      <Upload
        {...props}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        headers={{
          authorization: 'authorization-text',
        }}
      >
        <Button icon={<UploadOutlined />}>上传复印件</Button>
      </Upload>
    );
  };
  //创建SchemaField 组件
  const SchemaField = createSchemaField({
    //组件列表 [key]:component
    components: {
      FormItem,
      FormGrid,
      FormLayout,
      Input,
      DatePicker,
      Cascader,
      Select,
      Password,
      IDUpload,
      Space,
      ArrayItems,
      Editable,
    },
    //全局作用域
    scope: {
      fetchAddress: (field: any) => {
        // const transform:any = (data = {}) => {
        //     return Object.entries(data).reduce((buf, [key, value]) => {
        //         if (typeof value === 'string')
        //             return buf.concat({
        //                 label: value,
        //                 value: key,
        //             })
        //         const { name, code, cities, districts } = value
        //         const _cities = transform(cities)
        //         const _districts = transform(districts)
        //         return buf.concat({
        //             label: name,
        //             value: code,
        //             children: _cities.length
        //                 ? _cities
        //                 : _districts.length
        //                     ? _districts
        //                     : undefined,
        //         })
        //     }, [])
        // }
        // field.loading = true
        // fetch('//unpkg.com/china-location/dist/location.json')
        //     .then((res) => res.json())
        //     .then(
        //         action.bound((data) => {
        //             field.dataSource = transform(data)
        //             field.loading = false
        //         })
        //     )
      },
    },
  });

  const schema = {
    type: 'object', //类型 string | object | array | number | boolean | void | date | datetime | string
    //属性
    properties: {
      username: {
        type: 'string',
        title: '用户名',
        required: true,
        'x-decorator': 'FormItem',
        'x-component': 'Input',
      },
      password: {
        type: 'string',
        title: '密码',
        required: true,
        'x-decorator': 'FormItem',
        //ui 组件
        'x-component': 'Password',
        //ui组件属性
        'x-component-props': {
          checkStrength: true,
        },
        //联动协议
        'x-reactions': [
          {
            //依赖的字段路径列表
            dependencies: ['.confirm_password'],
            //满足条件,有target代表是主动联动，没有则是被动联动
            fulfill: {
              //更新状态
              state: {
                //$self 当前字段实例 $values 顶层表单数据  $form 当前form实例
                selfErrors:
                  '{{$deps[0] && $self.value && $self.value !== $deps[0] ? "确认密码不匹配" : ""}}',
              },
            },
          },
        ],
      },
      confirm_password: {
        type: 'string',
        title: '确认密码',
        required: true,
        'x-decorator': 'FormItem',
        'x-component': 'Password',
        'x-component-props': {
          checkStrength: true,
        },
        'x-reactions': [
          {
            dependencies: ['.password'],
            fulfill: {
              state: {
                selfErrors:
                  '{{$deps[0] && $self.value && $self.value !== $deps[0] ? "确认密码不匹配" : ""}}',
              },
            },
          },
        ],
      },
      name: {
        type: 'void',
        title: '姓名',
        'x-decorator': 'FormItem',
        'x-decorator-props': {
          asterisk: true,
          feedbackLayout: 'none',
        },
        'x-component': 'FormGrid',
        properties: {
          firstName: {
            type: 'string',
            required: true,
            'x-decorator': 'FormItem',
            'x-component': 'Input',
            'x-component-props': {
              placeholder: '姓',
            },
          },
          lastName: {
            type: 'string',
            required: true,
            'x-decorator': 'FormItem',
            'x-component': 'Input',
            'x-component-props': {
              placeholder: '名',
            },
          },
        },
      },
      email: {
        type: 'string',
        title: '邮箱',
        required: true,
        'x-decorator': 'FormItem',
        'x-component': 'Input',
        'x-validator': 'email',
      },
      gender: {
        type: 'string',
        title: '性别',
        enum: [
          {
            label: '男',
            value: 1,
          },
          {
            label: '女',
            value: 2,
          },
          {
            label: '第三性别',
            value: 3,
          },
        ],
        'x-decorator': 'FormItem',
        'x-component': 'Select',
      },
      birthday: {
        type: 'string',
        required: true,
        title: '生日',
        'x-decorator': 'FormItem',
        'x-component': 'DatePicker',
      },
      address: {
        type: 'string',
        required: true,
        title: '地址',
        'x-decorator': 'FormItem',
        'x-component': 'Cascader',
        'x-reactions': '{{fetchAddress}}',
      },
      idCard: {
        type: 'string',
        required: true,
        title: '身份证复印件',
        'x-decorator': 'FormItem',
        'x-component': 'IDUpload',
      },
      contacts: {
        type: 'array',
        required: true,
        title: '联系人信息',
        'x-decorator': 'FormItem',
        'x-component': 'ArrayItems',
        items: {
          type: 'object',
          'x-component': 'ArrayItems.Item',
          properties: {
            sort: {
              type: 'void',
              'x-decorator': 'FormItem',
              'x-component': 'ArrayItems.SortHandle',
            },
            popover: {
              type: 'void',
              title: '完善联系人信息',
              'x-decorator': 'Editable.Popover',
              'x-component': 'FormLayout',
              'x-component-props': {
                layout: 'vertical',
              },
              'x-reactions': [
                {
                  dependencies: ['.popover.name'],
                  fulfill: {
                    schema: {
                      title: '{{$deps[0]}}',
                    },
                  },
                },
              ],
              properties: {
                name: {
                  type: 'string',
                  title: '姓名',
                  required: true,
                  'x-decorator': 'FormItem',
                  'x-component': 'Input',
                  'x-component-props': {
                    style: {
                      width: 300,
                    },
                  },
                },
                email: {
                  type: 'string',
                  title: '邮箱',
                  'x-decorator': 'FormItem',
                  'x-component': 'Input',
                  'x-validator': [{ required: true }, 'email'],
                  'x-component-props': {
                    style: {
                      width: 300,
                    },
                  },
                },
                phone: {
                  type: 'string',
                  title: '手机号',
                  'x-decorator': 'FormItem',
                  'x-component': 'Input',
                  'x-validator': [{ required: true }, 'phone'],
                  'x-component-props': {
                    style: {
                      width: 300,
                    },
                  },
                },
              },
            },
            remove: {
              type: 'void',
              'x-decorator': 'FormItem',
              'x-component': 'ArrayItems.Remove',
            },
          },
        },
        properties: {
          addition: {
            type: 'void',
            title: '新增联系人',
            'x-component': 'ArrayItems.Addition',
          },
        },
      },
    },
  };
  return (
    <div>
      <div>This is Demo2: JSON Schema写法</div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          background: '#eee',
          padding: '40px 0',
        }}
      >
        <Card title="新用户注册" style={{ width: 620 }}>
          <Form
            form={form}
            labelCol={5}
            wrapperCol={16}
            onAutoSubmit={console.log}
          >
            <SchemaField schema={schema} />
            <FormButtonGroup.FormItem>
              <Submit block size="large">
                注册
              </Submit>
            </FormButtonGroup.FormItem>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default Demo2;
