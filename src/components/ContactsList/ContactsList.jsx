const ContactsList = ({ contacts }) => {
  return contacts.map(contact => {
    const { id, name, number } = contact;

    return (
      <li key={id}>
        <span>{name}:</span>
        <span>{number}</span>
      </li>
    );
  });
};

export default ContactsList;