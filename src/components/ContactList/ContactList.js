import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectVisibleContacts,
} from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/api';
import {
  List,
  ListItem,
  ListItemBtn,
  ListItemText,
} from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(selectContacts);
  const trueContact = useSelector(selectVisibleContacts);

  return (
    <div>
      <List>
        {isLoading && <b>Loading tasks...</b>}
        {error && <b>{error}</b>}
        {trueContact.map(({ id, name, number }) => {
          return (
            <ListItem key={id}>
              <ListItemText>
                {name}: {number}
              </ListItemText>
              <ListItemBtn
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete
              </ListItemBtn>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};
