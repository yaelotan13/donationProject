import React from 'react';
import { StyleSheet, Text } from 'react-native';

import Layout from '../Layout/Layout';
import Logo from '../Layout/Logo';
import LogWith from './LogWith';

const LogIn = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('ברוך הבא');
  }

  return (
    <Layout withLogo>
      <Logo />
      <Text style={styles.registerTxt}>רישום קצר ואתם בפנים:</Text>
      <LogWith name="גוגל" onPress={handlePress} icon={require('../../assets/google.png')} />
      <LogWith name="פייסבוק" onPress={handlePress} icon={require('../../assets/facebook.png')} />
    </Layout>
  );
}

const styles = StyleSheet.create({
  registerTxt: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: '25%',
    marginBottom: '3%'
  }
});

export default LogIn;
