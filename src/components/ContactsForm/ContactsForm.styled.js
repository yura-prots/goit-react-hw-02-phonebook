import styled from 'styled-components';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikError,
} from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  gap: 8px;
`;

export const FormGroup = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Field = styled(FormikField)`
  padding: 4px;
`;

export const ErrorMessage = styled(FormikError)`
  color: ${p => p.theme.colors.red};
`;

export const Button = styled.button`
  width: 150px;
  height: 20px;
  border-radius: 8px;
  border: transparent;
  outline: 1px solid tomato;
`;
