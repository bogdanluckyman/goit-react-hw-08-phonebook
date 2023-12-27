import { Formik } from 'formik';
import { Form, Field, FormGroup } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/api';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    const { name, number } = values;

    if (!name || !number) {
      alert('Please fill in both name and number fields.');
      return;
    }

    const contactExists = contacts.some(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );

    if (contactExists) {
      alert('Contact with this name or number already exists.');
      return;
    }

    try {
      await dispatch(addContact(values));
      actions.resetForm();
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormGroup>
            Name
            <Field name="name" maxlength="20" />
          </FormGroup>
          <FormGroup>
            Number
            <Field name="number" type="text" maxlength="20" />
          </FormGroup>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};
