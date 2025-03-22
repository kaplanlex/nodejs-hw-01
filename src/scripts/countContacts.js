import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts?.length;
  } catch (e) {
    console.log('Error:', e);
  }
};

console.log(await countContacts());