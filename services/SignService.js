import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import { apiFirebase } from "../config/api/firebase";


const auth = FIREBASE_AUTH;

export const signInFirebase = async (email, senha) => {
  try{
    const response = await signInWithEmailAndPassword(auth, email, senha);
    console.log(response)
    alert("Logado!")
  } catch(error) {
    console.error(error)
    alert("lOGIN fALHOU")
  }
}

export const signUpFirebase = async (email, senha) => {
  try{
    const response = await createUserWithEmailAndPassword(auth, email, senha);
    console.log(response)
    alert("Cadastro criado com sucesso!")
  } catch(error) {
    console.error(error)
    alert("Cadastro falhou")
  }
}