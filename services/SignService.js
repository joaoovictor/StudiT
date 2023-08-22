import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";


const auth = FIREBASE_AUTH;

export const signInFirebase = async (email, senha) => {
  try{
    const response = await signInWithEmailAndPassword(auth, email, senha);
    let dadosString = res
    AsyncStorage.setItem("@USER", )
  } catch(error) {
    console.error(error)
    alert("lOGIN fALHOU")
  }
}

export const signUpFirebase = async (email, senha) => {
  try{
    const response = await createUserWithEmailAndPassword(auth, email, senha);
    alert("Cadastro criado com sucesso!")
  } catch(error) {
    console.error(error)
    alert("Cadastro falhou")
  }
}