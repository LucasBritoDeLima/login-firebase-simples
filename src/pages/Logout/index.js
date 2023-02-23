import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import firebase from "../../../firebase/firebaseConnection";
import { useNavigation } from '@react-navigation/native';

export default function Logout({ route }) {
  const { username } = route.params;
  const navigation = useNavigation();

  async function logout() {
    await firebase.auth().signOut();
    alert('Logout feito com sucesso!');
    navigation.navigate('Login');
  }


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sair da Area de membro</Text>
      <Text style={styles.text}>O Email do usuário é: {route.params?.username}</Text>
      <Button
        title="Fazer o Logout"
        onPress={logout}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#373737"
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#FFF"
  }
})