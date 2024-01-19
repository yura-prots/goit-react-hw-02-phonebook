import { Formik } from 'formik';
import * as Yup from 'yup';

import { Form, FormGroup, Field, ErrorMessage } from './ContactsForm.styled';

const contactSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').required('Required'),
  phone: Yup.string().min(6, 'Too Short!').required('Required'),
});

const ContactsForm = ({ onAdd }) => (
  <div>
    <Formik
      initialValues={{
        name: '',
        phone: '',
      }}
      validationSchema={contactSchema}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}
    >
      <Form>
        <FormGroup>
          Name
          <Field id="name" type="text" name="name" required />
          <ErrorMessage name="name" component="span" />
        </FormGroup>

        <FormGroup>
          Phone
          <Field id="phone" type="tel" name="phone" required />
          <ErrorMessage name="phone" component="span" />
        </FormGroup>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  </div>
);

export default ContactsForm;
