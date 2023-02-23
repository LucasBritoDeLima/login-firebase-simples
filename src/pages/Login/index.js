import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import firebase from "../../../firebase/firebaseConnection";
import { useNavigation } from '@react-navigation/native';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');
  const navigation = useNavigation();

  async function login(){
    await firebase.auth().signInWithEmailAndPassword(email, password)
    .then( (value) => {
      alert('Bem vindo: ' + value.user.email);
      setUser(value.user.email);
      navigation.navigate('Logout', {
        username: value.user.email
      });
    })
    .catch( (error) => {
      alert('Ops! algo deu errado!');
      return;
    });

    setEmail('');
    setPassword('');
  }


 return (
   <View style={styles.container}>
    <Text style={styles.title}>Bem-vindo ao Sistema!!</Text>
    <Text style={styles.label}>E-mail</Text>
    <TextInput
      style={styles.input}
      onChangeText={(email) => setEmail(email)}
      value={email}
    />
    <Text style={styles.label}>Senha</Text>
    <TextInput
      style={styles.input}
      secureTextEntry={true}
      onChangeText={(password) => setPassword(password)}
      value={password}
    />
    <View style={styles.button}>
      <Button
        title="Entrar"
        color="#0099AA"
        onPress={login}
      />
    </View>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#515152"
  },
  title:{
    textAlign: "center",
    fontSize: 24,
    color: "#FFF",
    marginTop: 40,
    marginBottom: 15
  },
  label:{
    fontSize: 18,
    marginLeft: 10,
    color: '#fcffba'
  },
  input:{
    borderWidth: 3,
    fontSize: 18,
    paddingTop: 7,
    paddingBottom: 7,
    borderRadius: 8,
    width: '97%',
    alignSelf: 'center',
    paddingLeft: 5,
    backgroundColor: "#FFF",
    fontWeight: "bold",
    marginBottom: 8
  },
  button:{
    alignSelf: "center",
    width: "90%"
  }
})