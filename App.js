// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from 'react-native-elements';
import { LinearGradient } from "expo-linear-gradient";


export default function App() {

  const demoOpenChowsAvailable = [
  {
    chowTitle: 'Peperoni Pizza',
    chowShop: 'NY Pizza',
    location: 'Eindhoven, NL'
  },
  {
    chowTitle: 'Pizza Putenesca',
    chowShop: 'NY Pizza',
    location: 'Eindhoven, NL'
  },
  {
    chowTitle: 'Peperoni Pizza',
    chowShop: 'NY Pizza',
    location: 'Eindhoven, NL'
  },
  {
    chowTitle: 'Sushi Platter for 2',
    chowShop: 'ILoveSushi',
    location: 'Eindhoven, NL'
  },
  {
    chowTitle: 'Sushi fancy Platter for 2',
    chowShop: 'ILoveSushi',
    location: 'Eindhoven, NL'
  },
  ]
  

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
          <Header
            containerStyle={styles.header}
            leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
            centerComponent={{ text: 'Chow Buddy', style: { color: '#fff' } }}
          />
          {demoOpenChowsAvailable.map((demoOpenChowAvailable)=> 
          <ChowCard 
            chowTitle={demoOpenChowAvailable.chowTitle} 
            chowShop={demoOpenChowAvailable.chowShop} 
            location={demoOpenChowAvailable.location} 
          />)}
        </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3E7EE',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    display: 'flex',
    width: '100%',
    marginBottom: 10,
    backgroundColor: '#C6A477',
    borderColor: '#7097A8'
  },
  cardImage: {
    height: '100%',
    width: '40%',
    aspectRatio: 1,
  },
  cardImageFade: {
    height: '100%',
    width: '40%',
    zIndex: 3,
    elevation: 3,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    position: 'absolute',
  },
  chowCard:{
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ECD59F',
    minHeight: 100,
    maxHeight: 120,
    width: '94%',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 10,
  },
  chowCardLeft: {
    display: 'flex',
    height: '100%',
    width: '60%',
    paddingTop: 10,
    paddingLeft: 10,
    color: '#FFF',
  },
  text: {
    color: '#7097A8',
  },
});

const ChowCard = (props) => {
  return (
      <View style={styles.chowCard}>
          <LinearGradient 
          start={{ x: -1, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['rgba(236, 213, 159, 0)', 'rgba(236, 213, 159, 0)', 'rgba(236, 213, 159, 1)']} 
          style={styles.cardImageFade}>
          </LinearGradient>
          <Image style={styles.cardImage} source={require('./images/demoFoodCardImage.jpg')} />
          <View style={styles.chowCardLeft}>
            <Text style={styles.text}>{props.chowTitle}</Text>
            <Text style={styles.text}>{props.chowShop}</Text>
            <Text style={styles.text}>{props.location}</Text>
          </View>
      </View>
  )
}