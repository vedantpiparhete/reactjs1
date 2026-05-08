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
const Registerpage = () => {



const [loading, setLoading] = useState(false);

  const [form] = Form.useForm();
  const variant = Form.useWatch('variant', form);





   function register(values){
    setLoading(true);
    axios.post('https://proxstream.online/public/register', values)
    .then(respones=>{
      alert("registration success");
    })
    .catch(error=>{
      alert('There was an error',error);
      })
      .finally(()=>{
        setLoading(false);
      });
  }




  return (
    <>
    <center>
    <h1>Registration Page</h1>
    <Form
      {...formItemLayout}
      form={form}
      onFinish={register}
      variant={variant || 'filled'}
      style={{ maxWidth: 600 }}
      initialValues={{ variant: 'filled' }}
    >
   
      <Form.Item label="Full Name"  name="name" rules={[{ required: true, message: 'Please enter full name!' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Email"  name="email" rules={[{ required: true, message: 'Please enter Email!' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Role"  name="role" rules={[{ required: true, message: 'Please enter Role!' }]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="Mobile Number"
        name="phone"
        rules={[{ required: true, message: 'Please enter Mobile Number!' }]}
      >
        <InputNumber style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
    
      >
        <Input.Password />
      </Form.Item>

  


     

      <Form.Item label={null}>
        <Button type="primary" htmlType="register" {...loading ? { disabled: true } : {}}>
          {loading ? 'Registering...' : 'Register'}
        </Button>
      </Form.Item>
    </Form>
</center>
      </>
  );
};
export default Registerpage;