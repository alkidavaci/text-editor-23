import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.error('putDb not implemented');

  // Create connection to database
  const jateDb = await openDB('jate', 1);
  // Create a transaction by transaction method from database that takes in name of db and the action we want to perform 
  const tx = jateDb.transaction('jate', 'readwrite');
  // Open up the desired object store
  const store = tx.objectStore('jate');
  // Update the content in the object store using the put method
  const request = store.put({ id: id, jate: content });
  // Get confirmation of the request
  const result = await request;
  console.log('🚀 - data saved to the database', result);
} 

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error('getDb not implemented');

initdb();
