import PropTypes from 'prop-types';

const ContactsFilter = ({ toFind }) => {
  return (
    <div>
      <p>Find contact by name</p>
      <input type="text" onChange={e => toFind(e.target.value)} />;
    </div>
  );
};

ContactsFilter.propTypes = {
  toFind: PropTypes.func.isRequired,
};

export default ContactsFilter;
