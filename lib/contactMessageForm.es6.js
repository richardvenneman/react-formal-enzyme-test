import React, { Component } from 'react';
import Polyglot from 'node-polyglot';
import Form from 'react-formal';
import yup from 'yup';

class ContactMessageForm extends Component {
  constructor (props, context) {
    super(props, context);

    const polyglot = new Polyglot({ phrases: props.phrases });

    this.schema = yup.object({
      name: yup.string().required(polyglot.t('name.required')),
      email: yup.string()
               .email(polyglot.t('email.invalid'))
               .required(polyglot.t('email.required')),
      body: yup.string().min(20).required(polyglot.t('body.required'))
    });
  }

  render () {
    return (
      <Form schema={this.schema}>
        <div>
          <Form.Field name='name'/>
          <Form.Message for='name'/>
        </div>

        <div>
          <Form.Field name='email'/>
          <Form.Message for='email'/>
        </div>

        <div>
          <Form.Field name='body'/>
          <Form.Message for='body'/>
        </div>

        <Form.Button type='submit'>Submit</Form.Button>
      </Form>
    );
  }
}

export default ContactMessageForm;
