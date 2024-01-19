import { Formik } from 'formik';

import { StyledForm, StyledField } from './ContactsForm.styled';

const ContactsForm = () => (
  <div>
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(values, actions) => {
        console.log(values);

        actions.resetForm();
      }}
    >
      <StyledForm>
        <label>
          Name
          <StyledField id="name" type="text" name="name" required />
        </label>

        <label>
          Number
          <StyledField id="number" type="tel" name="number" required />
        </label>

        <button type="submit">Add contact</button>
      </StyledForm>
    </Formik>
  </div>
);

export default ContactsForm;
