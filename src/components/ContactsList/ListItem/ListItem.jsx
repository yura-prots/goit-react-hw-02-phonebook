import PropTypes from 'prop-types';

import { Item, DeleteBtn } from './ListItem.styled';

const ListItem = ({ contacts, toDelete }) => {
  return contacts.map(contact => {
    const { id, name, phone } = contact;
    return (
      <Item key={id}>
        <span>{name}:</span>
        <span>{phone}</span>
        <DeleteBtn type="button" onClick={() => toDelete(id)}>
          Delete
        </DeleteBtn>
      </Item>
    );
  });
};

ListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  toDelete: PropTypes.func.isRequired,
};

export default ListItem;
