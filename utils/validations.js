export const validateEmail = (email) => {
  // Expressão regular para validar o formato de um endereço de e-mail
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let resultado = false;
  emailRegex.test(email) ? resultado = true : resultado = false 
  
  return resultado
};

export const validateSenha = (senha) => {
  return senha.length > 5 ? true : false;
}