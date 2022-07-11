import { FC, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';

type FormProps= {
  title: string;
  handleClick: (email: string, pass: string) => void;
}

const FormComponent: FC<FormProps> = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');


  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="useremail"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input onChange={(e:any) => setEmail(e.target.value)} value={email} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password  onChange={(e:any) => setPass(e.target.value)} value={pass}/>
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit"  onClick={() => handleClick(email, pass)}>
          {title}
        </Button>
      </Form.Item>
    </Form>

    // <div>
    //     <input
    //         type="email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //         placeholder="email"
    //     />
    //     <input
    //         type="password"
    //         value={pass}
    //         onChange={(e) => setPass(e.target.value)}
    //         placeholder="password"
    //     />
    //     <button
    //         onClick={() => handleClick(email, pass)}
    //     >
    //         {title}
    //     </button>
    // </div>
  )
}

export default FormComponent