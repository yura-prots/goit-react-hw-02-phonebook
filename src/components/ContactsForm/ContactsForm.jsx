import { Formik } from 'formik';

import { StyledForm, StyledGroup, StyledField } from './ContactsForm.styled';

const ContactsForm = ({ onAdd }) => (
  <div>
    <Formik
      initialValues={{
        name: '',
        phone: '',
      }}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}
    >
      <StyledForm>
        <StyledGroup>
          Name
          <StyledField id="name" type="text" name="name" required />
        </StyledGroup>

        <StyledGroup>
          Phone
          <StyledField id="phone" type="tel" name="phone" required />
        </StyledGroup>

        <button type="submit">Add contact</button>
      </StyledForm>
    </Formik>
  </div>
);

export default ContactsForm;
