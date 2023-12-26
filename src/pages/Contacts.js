import { ContactList } from 'components/ContactList';
import { ContactForm } from 'components/Form/Form';
import { GlobalStyle } from 'components/GlobalStyled';
import { SearchBar } from 'components/SearchBar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/api';
import { selectContacts } from '../redux/contacts/selectors';

export default function ContactsPage() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <SearchBar />
      {contacts.length > 0 && <ContactList />}
      <GlobalStyle />
    </div>
  );
}
