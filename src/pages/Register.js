import {
  FormGroup,
  Form,
  FormContainer,
  StyledText,
  StyledTitle,
} from 'components/Form/Form.styled';
import { Field, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/operations';

export default function Register() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const { username, email, password } = values;
    dispatch(
      register({
        name: username,
        email: email,
        password: password,
      })
    );
    actions.resetForm();
  };

  return (
    <FormContainer>
      <StyledTitle>Register</StyledTitle>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormGroup>
            <StyledText>Username</StyledText>
            <Field name="username" />
          </FormGroup>
          <FormGroup>
            <StyledText>Email</StyledText>
            <Field name="email" type="text" />
          </FormGroup>
          <FormGroup>
            <StyledText>Password</StyledText>
            <Field name="password" type="password" />
          </FormGroup>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </FormContainer>
  );
}
