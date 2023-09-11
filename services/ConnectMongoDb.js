const { MongoClient } = require("mongodb");

// String de Conexão Primária do Azure Cosmos DB
const uri = "AccountEndpoint=https://studit-mongo.documents.azure.com:443/;AccountKey=yV4jonYr9WCQQXHg7OOeflGYaFehRKVnoxCjeOx2SsY5HFEOSxgus2tB4caxMb0Qjg0aXmG6wDEaACDbzBDDMQ==";

// Configuração e Conexão
const client = new MongoClient(uri);

async function conectar() {
  try {
    await client.connect();
    console.log("Conectado ao MongoDB no Azure Cosmos DB");
  } catch (error) {
    console.error("Erro ao conectar:", error);
  }
}

// Exemplo de consulta
async function consultarDocumentos() {
  const database = client.db("NOME_DO_SEU_BANCO_DE_DADOS");
  const collection = database.collection("NOME_DA_SUA_COLECAO");

  const documentos = await collection.find({}).toArray();

  console.log("Documentos:", documentos);
}

// Chame a função conectar() para estabelecer a conexão.
conectar();
