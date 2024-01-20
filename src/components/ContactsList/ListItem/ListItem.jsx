import PropTypes from 'prop-types';

const ListItem = ({ contacts }) => {
  return contacts.map(contact => {
    const { id, name, phone } = contact;
    return (
      <li key={id}>
        <span>{name}:</span>
        <span>{phone}</span>
      </li>
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
};

export default ListItem;
