import AsyncStorage from '@react-native-async-storage/async-storage'

export const userData = async () => {
  const value = await AsyncStorage.getItem("@USER_DATA")
  return JSON.parse(value)
}

