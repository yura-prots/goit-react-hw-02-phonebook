import styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  gap: 8px;
`;

export const StyledField = styled(Field)`
  padding: 4px;
`;

export const StyledGroup = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
