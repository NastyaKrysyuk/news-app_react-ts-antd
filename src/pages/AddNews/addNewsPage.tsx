import { Button, DatePicker, Form, Input, InputNumber, Typography } from 'antd';
import './style.css'

const { Title } = Typography;

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
/* eslint-enable no-template-curly-in-string */
const AddNewsPage=()=>{
  const onFinish = (values: any) => {
    values.publishAt=values.publishAt._d.toISOString()
    console.log(values);
  };
  
return (
  <div className='wrapper-news-list'>
  <Title>Add news:</Title>
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name={ 'title'} label="Title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
     
      <Form.Item name={ 'description'} label="Description" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name={'author'} label="Author" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name={'publishAt'} label="Date" rules={[{ required: true }]}>
        <DatePicker/>
      </Form.Item>
      
      <Form.Item name={ 'url'} label="Link article" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name={'urlToImage'} label="Link image" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name={ 'content'} label="Content">
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