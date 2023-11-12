import { CosmosClient } from "@azure/cosmos";
import config from "../config/api/cosmosdb.js";

const endpoint = config.endpoint;
const key = config.key;

const databaseId = config.database.id;
const containerId = config.container.id;
const partitionKey = { kind: "Hash", paths: ["/partitionKey"] };

const options = {
  endpoint: endpoint,
  key: key,
  userAgentSuffix: "CosmosDBJavascriptQuickstart",
};

const client = new CosmosClient(options);

async function createDatabase() {
  const { database } = await client.databases.createIfNotExists({
    id: databaseId,
  });
  console.log(`Created database:\n${database.id}\n`);
}

async function readDatabase() {
  const { resource: databaseDefinition } = await client
    .database(databaseId)
    .read();
  console.log(`Reading database:\n${databaseDefinition.id}\n`);
}

async function createContainer() {
  const { container } = await client
    .database(databaseId)
    .containers.createIfNotExists({ id: containerId, partitionKey });
  console.log(`Created container:\n${config.container.id}\n`);
}

async function upsertFamilyItem(itemBody, itemId = null) {
  if (itemId) {
    const { item } = await client
      .database(databaseId)
      .container(containerId)
      .item(itemId)
      .replace(itemBody);
    console.log(`Updated family item with id:\n${itemId}\n`);
  } else {
    const { item } = await client
      .database(databaseId)
      .container(containerId)
      .items.upsert(itemBody);
    console.log(`Created family item with id:\n${itemBody.id}\n`);
  }
}


async function createFamilyItem(itemBody) {
  const { item } = await client
    .database(databaseId)
    .container(containerId)
    .items.upsert(itemBody);
  console.log(`Created family item with id:\n${itemBody.id}\n`);
}

async function getItensById(id) {
  console.log(`Querying container:\n${config.container.id}`);

  const querySpec = {
    query: `SELECT TOP 3 m.id, m.userMessage, m.gptMessage, m.user_id, m.type FROM Messages m WHERE m.user_id = '${id}'`,
  }

  const { resources: results } = await client
    .database(databaseId)
    .container(containerId)
    .items.query(querySpec)
    .fetchAll()
  /* for (var queryResult of results) {
    let resultString = JSON.stringify(queryResult)
    console.log(`\tQuery returned ${resultString}\n`)
  } */

  return results
}

async function getAllItems(id){
  const querySpec = {
    query: `SELECT m.id, m.userMessage, m.gptMessage, m.user_id, m.type FROM Messages m WHERE m.user_id = '${id}'`,
  }

  const { resources: results } = await client
    .database(databaseId)
    .container(containerId)
    .items.query(querySpec)
    .fetchAll()
  /* for (var queryResult of results) {
    let resultString = JSON.stringify(queryResult)
    console.log(`\tQuery returned ${resultString}\n`)
  } */

  return results
}

async function deleteFamilyItem(itemId) {
  await client
    .database(databaseId)
    .container(containerId)
    .item(itemId) 
    .delete();
  console.log(`Deleted item:\n${itemId}\n`);
}

createDatabase()
  .then(() => createContainer())
  .then(() => {
    console.log(`Completed successfully`);
  })
  .catch(error => {
    console.log(`Completed with error ${JSON.stringify(error)}`);
  });

  

export {
  createDatabase,
  readDatabase,
  createContainer,
  createFamilyItem,
  deleteFamilyItem,
  getItensById,
  getAllItems,
  upsertFamilyItem
};
 