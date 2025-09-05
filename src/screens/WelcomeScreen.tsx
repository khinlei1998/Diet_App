import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';

type WelcomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

export default function WelcomeScreen() {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to DailyVita</Text>
      <Text style={styles.title}>
        Hello, we are here to make your life healthier and happier.
      </Text>
      <Image source={require('../assets/3.png')} style={styles.img} />
      <Text style={styles.questionText}>
        We will ask couple of questions to better understand your vitamin need.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('HealthConcerns')}
      >
        <Text style={styles.buttonText}>Get started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3F3E6',
  },
  welcomeText: {
    fontSize: 22,
    color: '#4F6579',
    fontWeight: 700,
    padding: 20,
  },
  title: {
    color: '#4F6579',
    fontWeight: 700,
    fontSize: 16,
    padding: 20,
  },
  img: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  questionText: {
    color: '#4F6579',
    fontWeight: 500,
    fontSize: 16,
    marginTop: 20,
    padding: 20,
  },
  button: {
    position: 'absolute',
    bottom: 30,
    fontSize: 18,
    color: '#fff',
    backgroundColor: '#FF614E',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    textAlign: 'center',
    fontWeight: '500',
    width: '90%',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});
