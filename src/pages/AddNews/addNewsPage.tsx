import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, DatePicker, Form, Input, Modal, Typography } from 'antd';
import { collection, addDoc } from "firebase/firestore";
import NewsItem from '../../components/news-item';
import { db } from '../../firebase';
import './style.css'

const { Title } = Typography;
const { confirm } = Modal;

const layout = {
  labelCol: { span: 10 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} is required!',
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const initialValues = {
  title: 'A Biographical Musical on Mexican Painter Frida Kahlo Is in Development',
  description: 'The family of Frida Kahlo has authorized the development of Frida, The Musical, a new stage work based on the life story of the groundbreaking 20th-century artist.',
  author: 'BY GREG EVANS, DEADLINE.COM',
  publishedAt: '',
  url: 'https://www.artnews.com/art-news/news/frida-kahlo-musical-1234635168/',
  urlToImage: 'https://www.artnews.com/wp-content/uploads/2022/07/GettyImages-517351472.jpg',
  content: ''
}

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
    confirm({
      title: 'Preview',
      icon: <ExclamationCircleOutlined />,
      content: <NewsItem article={values} />,
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
        initialValues={initialValues}
        name="nest-messages"
        onFinish={showPromiseConfirm}
        validateMessages={validateMessages}>
        <Form.Item name={'title'} label="Title" rules={[{ required: true, min: 30, max: 100 }]}>
          <Input />
        </Form.Item>

        <Form.Item name={'description'} label="Description" rules={[{ required: true, min: 80, max: 180 }]}>
          <Input />
        </Form.Item>

        <Form.Item name={'author'} label="Author" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item name={'publishedAt'} label="Date" rules={[{ required: true }]}>
          <DatePicker />
        </Form.Item>

        <Form.Item name={'url'} label="Link to article" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item name={'urlToImage'} label="Link to image" rules={[{ required: true }]}>
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