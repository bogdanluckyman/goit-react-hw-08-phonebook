import { FormGroup, Form } from 'components/Form/Form.styled';
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
    <div>
      <h2>Register</h2>
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
            Username
            <Field name="username" />
          </FormGroup>
          <FormGroup>
            Email
            <Field name="email" type="text" />
          </FormGroup>
          <FormGroup>
            Password
            <Field name="password" type="password" />
          </FormGroup>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}
