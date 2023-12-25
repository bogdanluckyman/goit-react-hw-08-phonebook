import { useDispatch, useSelector } from 'react-redux';
import { update } from '../redux/contacts/filterSlice';
import { selectFilter } from '../redux/contacts/selectors';

export const SearchBar = () => {
  const filters = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        value={filters}
        onChange={evt => dispatch(update(evt.target.value))}
      />
    </div>
  );
};
