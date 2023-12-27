import {
  FormGroup,
  Form,
  FormContainer,
  StyledTitle,
  StyledText,
} from 'components/Form/Form.styled';
import { Field, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../redux/auth/operations';

export default function LoginPage() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const { email, password } = values;
    dispatch(
      login({
        email: email,
        password: password,
      })
    );
    actions.resetForm();
  };

  return (
    <FormContainer>
      <StyledTitle>Log In</StyledTitle>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormGroup>
            <StyledText>Email</StyledText>
            <Field name="email" type="text" />
          </FormGroup>
          <FormGroup>
            <StyledText>Password</StyledText>
            <Field name="password" type="password" />
          </FormGroup>
          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </FormContainer>
  );
}
