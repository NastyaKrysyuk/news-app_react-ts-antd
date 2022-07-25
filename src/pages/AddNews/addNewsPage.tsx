import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, DatePicker, Form, Input, InputNumber, Modal, Typography } from 'antd';
import { collection, addDoc } from "firebase/firestore";
import { useState } from 'react';
import NewsItem from '../../components/news-item';
import { db } from '../../firebase';
import './style.css'

const { Title } = Typography;
const { confirm } = Modal;
const layout = {
  labelCol: { span: 10 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

// const initialValues={
//   title:'title',
//   description:'description',
//   author:'author'

// }
/* eslint-enable no-template-curly-in-string */
const AddNewsPage = () => {

  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    values.publishedAt = values.publishedAt._d.toISOString()
    try {
      const docRef = await addDoc(collection(db, "articles"), {
        values
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    form.resetFields();
  };

  const showPromiseConfirm = (values: any) => {
    console.log('asd');
    
    confirm({
      title: 'Preview',
      icon: <ExclamationCircleOutlined />,
      // content: <NewsItem article={values} />,
      className: 'modal',
      onOk() {
        return onFinish(values)
      }
    });
  };

  return (
    <div className='wrapper-news-list'>
      <Title>Add news:</Title>
      <Form 
      {...layout}
       form={form}
      name="nest-messages" 
      onFinish={showPromiseConfirm}
      validateMessages={validateMessages}>
        <Form.Item name={'title'} label="Title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item name={'description'} label="Description" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item name={'author'} label="Author" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item name={'publishedAt'} label="Date" rules={[{ required: true }]}>
          <DatePicker />
        </Form.Item>

        <Form.Item name={'url'} label="Link article" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item name={'urlToImage'} label="Link image" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item name={'content'} label="Content">
          <Input.TextArea />
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 10 }}>
          <Button type="primary" htmlType="submit" >
            Post news
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
export default AddNewsPage