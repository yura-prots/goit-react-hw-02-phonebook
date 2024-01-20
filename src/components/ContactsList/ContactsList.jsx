import PropTypes from 'prop-types';

import ListItem from './ListItem';

const ContactsList = ({ contacts, toDelete }) => {
  return (
    <div>
      <ul>
        <ListItem contacts={contacts} toDelete={toDelete} />
      </ul>
    </div>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  toDelete: PropTypes.func.isRequired,
};

export default ContactsList;
