import { CosmosClient } from "@azure/cosmos";

// Importe sua configuração de Cosmos DB, você pode armazená-la em um arquivo JSON ou em variáveis de ambiente
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

async function createFamilyItem(itemBody) {
  const { item } = await client
    .database(databaseId)
    .container(containerId)
    .items.upsert(itemBody);
  console.log(`Created family item with id:\n${itemBody.id}\n`);
}

async function queryContainer() {
  console.log(`Querying container:\n${config.container.id}`);

  // query to return all children in a family
  // Including the partition key value of country in the WHERE filter results in a more efficient query
  const querySpec = {
    query: 'SELECT VALUE r.children FROM root r WHERE r.partitionKey = @country',
    parameters: [
      {
        name: '@country',
        value: 'USA'
      }
    ]
  }

  const { resources: results } = await client
    .database(databaseId)
    .container(containerId)
    .items.query(querySpec)
    .fetchAll()
  for (var queryResult of results) {
    let resultString = JSON.stringify(queryResult)
    console.log(`\tQuery returned ${resultString}\n`)
  }
}

async function deleteFamilyItem(itemBody) {
  await client
    .database(databaseId)
    .container(containerId)
    .item(itemBody.id, itemBody.partitionKey)
    .delete(itemBody)
  console.log(`Deleted item:\n${itemBody.id}\n`);
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
  queryContainer,
  deleteFamilyItem,
};
