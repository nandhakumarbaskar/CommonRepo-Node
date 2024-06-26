const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://uat_admin_service:El1Looqa2g2nZy1m@lms-uat.x7ey3.mongodb.net/admin';
const client = new MongoClient(url);

// Database Name
const dbName = 'user';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('users_v2');
//   console.log("collection:", collection)
const findResult = await collection.findOne({})
console.log('Found documents =>', findResult);
  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
  