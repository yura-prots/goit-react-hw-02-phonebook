const ContactsFilter = ({ filter, toFind }) => {
  //   console.log(filter);
  //   console.log(toFind);
  return <input type="text" onChange={e => toFind(e.target.value)} />;
};

export default ContactsFilter;
