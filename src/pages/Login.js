import { FormGroup, Form } from 'components/Form/Form.styled';
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
    <div>
      <h2>Log In</h2>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormGroup>
            Email
            <Field name="email" type="text" />
          </FormGroup>
          <FormGroup>
            Password
            <Field name="password" type="password" />
          </FormGroup>
          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </div>
  );
}
