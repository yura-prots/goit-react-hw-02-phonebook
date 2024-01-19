const ContactsList = ({ contacts }) => {
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

export default ContactsList;
