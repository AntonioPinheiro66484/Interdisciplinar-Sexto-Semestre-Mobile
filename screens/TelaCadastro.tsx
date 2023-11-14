import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const TelaCadastro = () => {
  return (
    <View style={styles.container}>
       <View style={styles.bannerContainer}>
            <Image
              source={require('../assets/logo.png')}
              style={styles.logo}
            />

        </View>
      <Text style={styles.title}>Cadastro</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Nome</Text>
        <TextInput style={styles.input} placeholder="Nome" />
        <Text style={styles.label}>Nome</Text>
        <TextInput style={styles.input} placeholder="Email" />
        <Text style={styles.label}>Nome</Text>
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />
        <Text style={styles.label}>Nome</Text>
        <TextInput style={styles.input} placeholder="CPF" />
        <Text style={styles.label}>Nome</Text>
        <TextInput style={styles.input} placeholder="CEP" />
        <Text style={styles.label}>Nome</Text>
        <TextInput style={styles.input} placeholder="Número da casa" />
         <Text style={styles.label}>Nome</Text>
        <TextInput style={styles.input} placeholder="Complemento" />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6b0ee2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  logo: {
    width: 72,
    height: 72,
  },
  form: {
    backgroundColor: '#6b0ee2',
    borderRadius: 8,
    borderWidth: 5,
    borderColor: '#f5f76e',
    padding: 16,
  },
  label: {
    color: '#f5f76e',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  input: {
    height: 40,
    backgroundColor: '#000',
    borderRadius: 2,
    paddingHorizontal: 8,
    marginBottom: 8,
    color:"#e9ed37",
  },
  button: {
    backgroundColor: '#f5f76e',
    borderColor:'#6b0ee2',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginTop: 16,
  },
  buttonText: {
    color: '#6b0ee2',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default TelaCadastro;