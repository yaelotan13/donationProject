import React from 'react';
import { StyleSheet, Text } from 'react-native';

import Layout from '../Layout/Layout';
import Logo from '../Layout/Logo';
import LogWith from './LogWith';

const LogIn = () => {
  return (
    <Layout>
      <Logo />
      <Text style={styles.registerTxt}>רישום קצר ואתם בפנים:</Text>
      <LogWith name="גוגל"/>
      <LogWith name="פייסבוק"/>
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
