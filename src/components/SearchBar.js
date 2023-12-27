import { useDispatch, useSelector } from 'react-redux';
import { update } from '../redux/contacts/filterSlice';
import { selectFilter } from '../redux/contacts/selectors';
import { StyledMiniTitle } from './Form/Form.styled';

export const SearchBar = () => {
  const filters = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <div>
      <StyledMiniTitle>Find contacts by name</StyledMiniTitle>
      <input
        type="text"
        value={filters}
        onChange={evt => dispatch(update(evt.target.value))}
      />
    </div>
  );
};
