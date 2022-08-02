import { FC, useState } from 'react';
import { Button, Form, Input } from 'antd';

type TProps = {
  title: string,
  handleClick: (email: string, pass: string) => void;
}

const FormComponent: FC<TProps> = ({ title, handleClick }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="useremail"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input
          onChange={(e: any) => setEmail(e.target.value)}
          value={email}
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password
          onChange={(e: any) => setPass(e.target.value)}
          value={pass}
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" onClick={(_e: any) => handleClick(email, pass)}>
          {title}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default FormComponent