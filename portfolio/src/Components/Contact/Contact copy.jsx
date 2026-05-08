import React, { useState } from 'react';
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Segmented,
  Select,
  TreeSelect,
} from 'antd';
import axios from 'axios';
const { RangePicker } = DatePicker;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};
const Contact = () => {


async const  handleSubmit = (values) => {



  
  await axios.post('http://localhost:8004/public/contact-form', values)
    .then(res => console.log(res.data))
    .catch(err => console.error(err));
};



  const [form] = Form.useForm();
  const variant = Form.useWatch('variant', form);
  return (
    <>
  
    <h1>Contact Me</h1>
   <Form
  {...formItemLayout}
  form={form}
  onFinish={handleSubmit}
>
  <Form.Item name="fname" label="Full Name" rules={[{ required: true }]}>
    <Input />
  </Form.Item>

  <Form.Item name="email" label="Email" rules={[{ required: true }]}>
    <Input />
  </Form.Item>

  <Form.Item name="mobile" label="Mobile" rules={[{ required: true }]}>
    <InputNumber style={{ width: '100%' }} />
  </Form.Item>

  <Form.Item name="address" label="Address" rules={[{ required: true }]}>
    <Input.TextArea />
  </Form.Item>

  <Form.Item name="dob" label="DOB">
    <DatePicker />
  </Form.Item>

  <Form.Item>
    <Button type="primary" htmlType="submit">Submit</Button>
  </Form.Item>
</Form>

      </>
  );
};
export default Contact;