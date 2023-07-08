const fs = require("fs").promises;
const path = require("path");
const { v4: uuidv4 } = require("uuid");

// Шлях до файлу
const contactsPath = path.join("db", "contacts.json");

// Повертає масив контактів.
async function listContacts() {
  try {
    const response = await fs.readFile(contactsPath);
    const data = JSON.parse(response);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

// Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
async function getContactById(contactId) {
  try {
    const response = await fs.readFile(contactsPath);
    const data = JSON.parse(response);
    const filtered = data.filter((item) => item.id === contactId);
    if (filtered.length === 0) return null;
    return filtered[0];
  } catch (error) {
    console.log(error.message);
  }
}
//  Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
async function removeContact(contactId) {
  const response = await fs.readFile(contactsPath);
  const data = JSON.parse(response);

  let deletedContact = null;
  const newContactArray = [];

  for (item of data) {
    if (item.id !== contactId) {
      newContactArray.push(item);
    } else {
      deletedContact = item;
    }
  }

  if (deletedContact === null) return null;
  await fs.writeFile(contactsPath, JSON.stringify(newContactArray));
  return deletedContact;
}

// Повертає об'єкт доданого контакту.
async function addContact(name, email, phone) {
  const response = await fs.readFile(contactsPath);
  const data = JSON.parse(response);
  const newContact = { id: uuidv4(21), name, email, phone };
  data.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(data));
  return newContact;
}

module.exports = { listContacts, getContactById, removeContact, addContact };
