import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import 'antd/dist/antd.css';
import './ContactForm.scss';
import { Form, Input, InputNumber, Button } from 'antd';
import axios from 'axios';

const layout = {
  labelCol: {
    xs:{
      span: 6,
    },
    sm:{
      span:4
    },
    lg:{
      span: 3,
    }
  },
  wrapperCol: {
    xs:{
      span: 16,
    },
    sm:{
      span:18,
    },
    lg:{
      span: 19,
    }
  },
};

/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} es requerido',
  types: {
    email: '${label} no es un email válido',
    //number: '¡${label} no es un número válido!',
  },
  /*
  number: {
    range: '${label} debe estar entre ${min} y ${max}',
  },
  */
};
/* eslint-enable no-template-curly-in-string */

const ContactForm = () => {
  const onFinish = (values) => {
    if(!values.nativeEvent){
      var data = {
        service_id: 'service_zrza4pb',
        template_id: 'template_vbi9yfc',
        user_id: 'user_sWQYlHwIv4wqzIBfI7fJ0',
        template_params: values
      };
      console.log(JSON.stringify(data))
      axios({
          url: 'https://api.emailjs.com/api/v1.0/email/send',
          method: 'POST',
          data: JSON.stringify(data),
          headers: { 'content-type': 'application/json'}
      }).then(() => alert('Your mail is sent!'))
        .catch((error) => alert('Oops... ' + JSON.stringify(error)));
    }
  };

  return (
    <div className="formCont">
      <Form {...layout} name='nest-messages' onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item
          name={'user_name'}
          label="Nombre"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name='user_email'
          label="Email"
          rules={[
            {
              type: 'email',
            },
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name='user_website' label="Página web">
          <Input />
        </Form.Item>
        <Form.Item 
          name='message' 
          label="Mensaje"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ 
          ...layout.wrapperCol, 
          xs:{
            offset: 0,
          },
          sm:{
            offset:4,
          },
          lg:{
            offset: 3,
          }
        }}>
          <Button type="primary" htmlType="submit" onClick={onFinish}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactForm