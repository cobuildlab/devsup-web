import React, { useCallback, useState } from 'react';
import { Formik, FormikProps, Form } from 'formik';
import * as Yup from 'yup';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import {
  ContactWrapper,
  ContactPageTitle,
  ContactFromWrapper,
  InputGroup,
} from './style';


interface MyFormValues {
  name: string;
  email: string;
  message: string;
}

const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().required('Required'),
});

const Contact: React.SFC<{}> = () => {
  const [isLoading, setLoading] = useState<boolean>(false);

  const onSubmit = useCallback(
    async (values: MyFormValues, actions: any) => {
      setLoading(true);

      const data = {
        ...values,
        landing: 'Blog Contact Form',
      };

      const settings = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      };
      try {
        if (process.env.CONTACT_FORM_API) {
          await fetch(process.env.CONTACT_FORM_API, settings);
        }
      } catch (error) {
        console.error(error);
      }
      setLoading((state: boolean) => !state);
      actions.setSubmitting(false);
    }, [],
  );

  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      onSubmit={onSubmit}
      validationSchema={SignupSchema}
      render={({
        handleChange,
        values,
        errors,
        handleBlur,
        touched,
      }: FormikProps<MyFormValues>) => (
        <>
          <Form>
            <ContactWrapper>
              <ContactPageTitle>
                <h2>Contact</h2>
                <p>
                  StoryHub theme comes with a contact form built-in. You can use
                  this form with Gatsbay Js service and get up to 50 submissions
                  for free per form per month. Also, you can easily switch to
                  another service if you want.
                </p>
              </ContactPageTitle>
              <ContactFromWrapper>
                <InputGroup>
                  <Input
                    type="text"
                    name="name"
                    value={`${values.name}`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Name"
                    notification={`${
                      errors.name && touched.name
                        ? errors.name
                        : ''
                    }`}
                  />
                  <Input
                    type="email"
                    name="email"
                    value={`${values.email}`}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label="Email"
                    notification={`${
                      errors.email && touched.email ? errors.email : ''
                    }`}
                  />
                </InputGroup>
                <Input
                  type="textarea"
                  name="message"
                  value={`${values.message}`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="Message"
                  notification={
                      errors.message && touched.message ? errors.message : ''
                    }
                />
                <Button
                  title="Submit"
                  type="submit"
                  isLoading={isLoading}
                  loader="Submitting.."
                />
              </ContactFromWrapper>
            </ContactWrapper>
          </Form>
        </>
      )}
    />
  );
};

export default Contact;
