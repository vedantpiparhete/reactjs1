import axios from 'axios';
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,


} from 'antd';


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
   
     const  handleSubmit = async (values) => {
      await axios.post('https://proxstream.online/public/contact-form', values)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
       alert('Error submitting contact form:', error);
        });
    };
    
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
      

      <Form.Item label="Full Name"   name="fname" rules={[{ required: true, message: 'Please input your full name!' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Email"   name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="mobile number"
        
        
        name="mobile"
        rules={[{ required: true, message: 'Please input your mobile number !' }]}
        >
        <InputNumber style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item
        label="Address"
        
        name="address"
        rules={[{ required: true, message: 'Please input your address !' }]}
        >
        <Input.TextArea />
      </Form.Item>


      <Form.Item
        label="DOB"
        
        name="dob"
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