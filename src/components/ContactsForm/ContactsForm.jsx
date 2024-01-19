import { Formik } from 'formik';

import { StyledForm, StyledField } from './ContactsForm.styled';

const ContactsForm = ({ onAdd }) => (
  <div>
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(values, actions) => {
        onAdd(values);
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
