import { ElementListContacts } from 'components/ElementListContacts';
import { List, ElementList } from './ListContactsStyled';
import { useGetContactsQuery } from 'redux/contactsSlice';
import { selectFilterValue } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const ListContacts = () => {
  const { data: contacts = [] } = useGetContactsQuery();

  //useMemo
  const filterValue = useSelector(selectFilterValue);
  const normalyzeFilter = filterValue.toLowerCase();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalyzeFilter)
  );

  return (
    <List>
      {visibleContacts.map(({ name, phone, id }) => (
        <ElementList key={id}>
          <ElementListContacts name={name} phone={phone} id={id} />
        </ElementList>
      ))}
    </List>
  );
};
