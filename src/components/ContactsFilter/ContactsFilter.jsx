import PropTypes from 'prop-types';

import { Filter } from './ContactsFilter.styled';

const ContactsFilter = ({ toFind }) => {
  return (
    <div>
      <Filter
        type="text"
        onChange={e => toFind(e.target.value)}
        placeholder="Find contact by name"
      />
    </div>
  );
};

ContactsFilter.propTypes = {
  toFind: PropTypes.func.isRequired,
};

export default ContactsFilter;
