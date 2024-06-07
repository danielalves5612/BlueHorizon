import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';

type RootStackParamList = {
  Login: undefined;
  Porto: undefined;
  Register: undefined;
};

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Register'>;
type RegisterScreenRouteProp = RouteProp<RootStackParamList, 'Register'>;

type Props = {
  navigation: RegisterScreenNavigationProp;
  route: RegisterScreenRouteProp;
};

const RegisterScreen: React.FC<Props> = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Simulando um registro bem-sucedido
    Alert.alert('Usuário Cadastrado com Sucesso');
    navigation.navigate('Login');
  };

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.container}
    >
      <Text style={styles.logo}>Blue Horizon</Text>
      <Text style={styles.label}>Crie sua conta</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.createAccountButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.createAccountText}>Já tem uma conta? Login</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  createAccountButton: {
    width: '50%',
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

export default RegisterScreen;
