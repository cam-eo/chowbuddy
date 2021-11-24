import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";

const ChowCard = () => {
    return (
        <View style={styles.chowCard}>
            <LinearGradient 
            start={{ x: -1, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['rgba(236, 213, 159, 0)', 'rgba(236, 213, 159, 0)', 'rgba(236, 213, 159, 1)']} 
            style={styles.cardImageFade}>
            </LinearGradient>
            <Image style={styles.cardImage} source={require('../images/demoFoodCardImage.jpg')} />
            <View style={styles.chowCardLeft}>
            <Text style={styles.text}>Pizza Putenesca</Text>
            <Text style={styles.text}>NY Pizza</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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

export default  ChowCard
