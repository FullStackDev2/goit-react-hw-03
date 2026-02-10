import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/contactForm/ContactsForm";
import ContactList from "./components/contactList/ContactsList";
import SearchBox from "./components/searchBox/SearchBox";
import styles from "./App.module.css";




const App = () => {

  const INITIAL_CONTACTS = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];
  
  const STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState(() => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : INITIAL_CONTACTS;
  } catch (error) {
    console.error("LocalStorage parse error:", error);
    return INITIAL_CONTACTS;
  }
});

  const [filter, setFilter] = useState("");


  useEffect(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
}, [contacts]);


  const addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts(prev => [...prev, newContact]);
  };


  const deleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };


  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.container}>
    <h1>Phonebook</h1>
    <ContactForm onAdd={addContact} />
    <SearchBox value={filter} onChange={setFilter} />
    <ContactList contacts={filteredContacts} onDelete={deleteContact} />
  </div>
  );
  
};

export default App;
