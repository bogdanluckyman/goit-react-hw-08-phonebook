import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/Form/Form';
import { GlobalStyle } from 'components/GlobalStyled';
import { SearchBar } from 'components/SearchBar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/api';
import { selectContacts } from '../redux/contacts/selectors';
import {
  ContactsContainer,
  StyledBigTitle,
  StyledTitle,
} from 'components/Form/Form.styled';

export default function ContactsPage() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <ContactsContainer>
      <StyledBigTitle>Phonebook</StyledBigTitle>
      <ContactForm />
      <StyledTitle>Contacts</StyledTitle>
      <SearchBar />
      {contacts.length > 0 && <ContactList />}
      <GlobalStyle />
    </ContactsContainer>
  );
}
