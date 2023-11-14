import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import Header  from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import CardProduto from '../components/CardProduto/CardProduto'

export default function TelaProduto() {
  return (
    <View style={styles.container}>
    <Header/>
      <View style={styles.content}>
          <Image
            source={require('../assets/Livros/Livro1.png')} // Substitua pelo caminho da sua imagem de logo
            style={styles.produto}
          />
          <Text style={styles.titulo}>A Arte da Guerra</Text>
          <Text>Preço:R$:40,00</Text>
          <Text style={styles.texto}> A Arte da Guerra é uma obra-prima do pensamento militar. Sua importância transcendeu o tempo, tornando-se um clássico obrigatório, não só para militares, mas para todos que se interessam por estratégia, no ocidente e no oriente.</Text>
          <Text>Sugestão</Text>
          <CardProduto name="Principe Maquiavel" price="59.99" />
        
          <View style={styles.bannerContainer}>
        </View>
      </View>
        <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    top:0,
    right:0,
    left:0,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:"column",
    padding: 16,
    top:50,
  },
  titulo:{
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8
  },
  texto:{
    textAlign:'justify',

  },

   bannerContainer: {
    marginTop: 64, 
  },
  produto: {
    width: 100,
    height: 147, 
  },
  
});
