import toast from 'react-hot-toast';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsSlice';
import { Text, Button, Circle } from './ElementListContactsStyled';

export const ElementListContacts = ({ id, name, phone }) => {
  const [deleteContact, { error }] = useDeleteContactMutation();

  const handleDelete = () => {
    deleteContact(id);

    if (error) {
      toast.error(`${name} not deleted`);
    }

    toast.success(`${name} deleted from contacts`);
  };

  return (
    <>
      <Circle></Circle>
      <Text>
        {name}: {phone}
      </Text>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </>
  );
};

ElementListContacts.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
