import axios from 'axios';

export async function getGptResponse(userInput) {
  try {
    const resp = await axios.post("https://studit-functions-js.azurewebsites.net/api/triggergptjs", { userInput: userInput });
    console.log(resp.data)
    return resp.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
