import PropTypes from 'prop-types';

import ListItem from './ListItem';
import { List } from './ContactsList.styled';

const ContactsList = ({ contacts, toDelete }) => {
  return (
    <div>
      <List>
        <ListItem contacts={contacts} toDelete={toDelete} />
      </List>
    </div>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  toDelete: PropTypes.func.isRequired,
};

export default ContactsList;
