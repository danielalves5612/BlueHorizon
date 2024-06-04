import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import axios from 'axios';

type RootStackParamList = {
  Login: undefined;
  Porto: undefined;
  Register: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
  route: LoginScreenRouteProp;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    axios.get('https://my-json-server.typicode.com/offmonte/LoginFakeAPI/Usuarios')
      .then((response: any) => {
        const users = response.data;
        const user = users.find((u: any) => u.fullName === fullName && u.password === password);
        if (user) {
          navigation.navigate('Porto');
        } else {
          alert('Nome de usuário ou senha incorretos');
        }
      })
      .catch((error: any) => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Blue Horizon</Text>
      <Text style={styles.label}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.createAccountButton} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.createAccountText}>Criar Conta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0066CC',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    fontSize: 32,
    color: '#fff',
    marginBottom: 20,
  },
  label: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 5,
    height: 40,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    width: '100%',
    backgroundColor: '#004d99',
    borderRadius: 5,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  forgotPassword: {
    color: '#fff',
    fontSize: 14,
  },
  createAccountButton: {
    width: '100%',
    backgroundColor: '#004d99',
    borderRadius: 5,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  createAccountText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default LoginScreen;
