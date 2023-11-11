import axios from 'axios';

export async function getGptResponse(userInput) {
  try {
    const resp = await axios.post("https://studit-openai-2.azurewebsites.net/api/openaistudit", { userInput: userInput });
    console.log(resp)
    return resp.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
