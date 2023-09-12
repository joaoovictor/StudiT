import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile,signOut } from "firebase/auth";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import AsyncStorage from '@react-native-async-storage/async-storage';


const auth = FIREBASE_AUTH;

export const signInFirebase = async (emailTyped, senha) => {
  try{
    const response = await signInWithEmailAndPassword(auth, emailTyped, senha);
    const data = response.user
    const {email, displayName, uid} = data
    const selectedValues = {email, displayName, uid}
    AsyncStorage.setItem("@USER_DATA", JSON.stringify(selectedValues))
  } catch(error) {
    console.error(error)
    alert("Login falhou")
  }
}

export const signUpFirebase = async (emailTyped, senha, nome) => {
  try{
    const response = await createUserWithEmailAndPassword(auth, emailTyped, senha);
    await updateProfile(auth.currentUser, {displayName: nome}).catch((e) => {console.log(e)})
    const dataUser = response.user
    let {email, displayName, uid} = dataUser
    let selectedValues = {email, displayName, uid}  
    AsyncStorage.setItem("@USER_DATA", JSON.stringify(selectedValues))
    alert("Cadastro criado com sucesso!")
  } catch(error) {
      console.error(error)
      alert("Cadastro falhou")
  }
}

export const fazerLogoutFirebase = async () => {
  try {
    await signOut(auth);

    // Limpe os dados do usuário no AsyncStorage
    await AsyncStorage.removeItem("@USER_DATA");

    alert("Logout realizado com sucesso!");
  } catch (error) {
    console.error(error);
    alert("Erro ao fazer logout.");
  }
};
