import PropTypes from 'prop-types';

import { Filter } from './ContactsFilter.styled';

const ContactsFilter = ({ toFind }) => {
  return (
    <div>
      <p>Find contact by name</p>
      <Filter type="text" onChange={e => toFind(e.target.value)} />
    </div>
  );
};

ContactsFilter.propTypes = {
  toFind: PropTypes.func.isRequired,
};

export default ContactsFilter;
