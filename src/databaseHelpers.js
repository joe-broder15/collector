
const client = window.stitch.Stitch.initializeDefaultAppClient("collector-mdmxg")
const mongodb = client.getServiceClient(window.stitch.RemoteMongoClient.factory, "mongodb-atlas");
const db = mongodb.db('collector-db');

function returnItems() {
  return db.collection('caches')
    .find({}, {limit: 1000})
    .asArray();
}

function displayItemsOnLoad() {
  return client.auth
    .loginWithCredential(new window.stitch.AnonymousCredential())
    .then(returnItems)
    .catch(console.error);
}

function addItem(cacheName, desc, long, lat) {
  client.auth.loginWithCredential(new window.stitch.AnonymousCredential()).then(
    () => db.collection('caches')
    .insertOne({
      user_id: client.auth.user.id,
      name: cacheName, 
      description: desc,
      longitude: long,
      latitude: lat
    }));
}

export {displayItemsOnLoad, addItem}
//default { displayItemsOnLoad, addItem } 
// export default returnItems
// export default addItem
