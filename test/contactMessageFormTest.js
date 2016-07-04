import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import ContactMessageForm from '../lib/contactMessageForm.es6.js';

describe('<ContactMessageForm />', () => {
  let wrapper;

  beforeEach(() => {
    const phrases = {
      "name.required": "Please fill in a name",
      "email.invalid": "Please fill in a valid email address",
      "email.required": "Please fill in an email address",
      "body.required": "Please fill in a message",
      "message_type": "Please fill in a message type"
    };

    wrapper = mount(<ContactMessageForm phrases={phrases} />);
  });

  it('renders no form errors by default', () => {
    expect(wrapper.find('.validation-error')).to.have.length(0);
  });

  it('renders errors', () => {
    wrapper.find('form').at(0).simulate('submit');
    expect(wrapper.find('.validation-error').length).to.equal(3);
  });
});
