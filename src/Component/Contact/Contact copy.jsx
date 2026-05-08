import axios from 'axios';
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,

  
} from 'antd';
import { useState } from 'react';

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

    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[mobile,setMobile] = useState(0)
    const[address,setAddress] = useState('')
    const[dob,setDob] = useState('')

    const body = {
      name: name,
      email: email,
      mobile: mobile,
      address: address,
      dob: dob
    };

    const handleSubmit = () => {
      axios.post('https://proxstream.online/public/contact-form', body)
        .then(response => {
          alert(response.data);
        })
        .catch(error => {
          alert('Error submitting contact form:', error);
        });
    }
    
  const [form] = Form.useForm();
  const variant = Form.useWatch('variant', form);
  return (
    <>
    <h1>Contact Us</h1>
      <Form
      {...formItemLayout}
      form={form}
      variant={variant || 'filled'}
      style={{ maxWidth: 600 }}
      initialValues={{ variant: 'filled' }}
      onFinish={handleSubmit}
      >
      

      <Form.Item label="Full Name" value={name} onChange={(e)=>setName(e.target.value)} name="Input" rules={[{ required: true, message: 'Please input your full name!' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Email" value={email} onChange={(e)=>setEmail(e.target.value)} name="Email" rules={[{ required: true, message: 'Please input your email!' }]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="mobile number"
        value={mobile}
        onChange={(e)=>setMobile(e.target.value)}
        name="InputNumber"
        rules={[{ required: true, message: 'Please input your mobile number !' }]}
        >
        <InputNumber style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        label="Address"
        value={address}
        onChange={(e)=>setAddress(e.target.value)}
        name="TextArea"
        rules={[{ required: true, message: 'Please input your address !' }]}
        >
        <Input.TextArea />
      </Form.Item>


      <Form.Item
        label="DOB"
        value={dob}
        onChange={(date)=>setDob(date)}
        name="DatePicker"
        rules={[{ required: true, message: 'Please input your D.O.B. !' }]}
        >
        <DatePicker />
      </Form.Item>

     
      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
</>
  );
};
export default Contact;