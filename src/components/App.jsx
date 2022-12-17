import { useGetContactsQuery } from 'redux/contactsSlice';
import { Forma } from 'components/Forma';
import { ListContacts } from 'components/ListContacts';
import { Filter } from 'components/Filter';
import { Box } from './Box';
import { Title, TitleContacts } from './Titles/TitlesStyled';
import { Loader } from 'components/Loader';

export const App = () => {
  const { data: contacts = [], error, isLoading } = useGetContactsQuery();

  return (
    <Box p={[4]}>
      <Title>Phonebook</Title>
      <Forma />
      <TitleContacts>Contacts</TitleContacts>
      <Filter />
      {!isLoading && error && <p>{error}</p>}
      {contacts.length > 0 && !error && <ListContacts />}
      {isLoading && <Loader />}
    </Box>
  );
};
