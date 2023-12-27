import { Form as FormikForm, Field as FormikField } from 'formik';
import styled from 'styled-components';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 320px;
`;

export const Field = styled(FormikField)`
  padding: 4px;
  font: inherit;
`;

export const FormGroup = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const FormContainer = styled.div`
  width: 300px;
  border: 2px solid #615049;
  margin-top: 15px;
  background-color: #f1d3bc;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

export const StyledText = styled.p`
  color: #262f34;
  margin: 0;
`;

export const StyledTitle = styled.h2`
  color: #262f34;
  margin: 5;
`;

export const StyledBigTitle = styled.h1`
  color: #262f34;
  margin: 5;
`;

export const StyledMiniTitle = styled.h3`
  color: #262f34;
  margin: 5;
`;

export const ContactsContainer = styled.div`
  /* width: 500px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid #615049;
  margin-top: 15px;
  background-color: #f1d3bc;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;
