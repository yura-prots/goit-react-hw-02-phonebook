import PropTypes from 'prop-types';

import ListItem from './ListItem';

const ContactsList = ({ contacts }) => {
  return (
    <div>
      <ul>
        <ListItem contacts={contacts} />
      </ul>
    </div>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactsList;
