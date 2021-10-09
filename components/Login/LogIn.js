import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import LogWith from './LogWith';

const LogIn = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer} />
      <View style={styles.innerContainer}>
        <Text>
          <Text style={[styles.logo, styles.logoWidth]}>GIVE </Text>
          <Text style={styles.logo}>AND</Text>
        </Text>
        <Text style={styles.registerTxt}>רישום קצר ואתם בפנים:</Text>
        <LogWith name="גוגל"/>
        <LogWith name="פייסבוק"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#693c3c',
    justifyContent: 'center',
    alignItems: 'center'
  },
  topContainer: {
    flex: 1,
  },
  innerContainer: {
    width: '100%',
    flex: 3,
    backgroundColor: '#FFF3D9',
    alignItems: 'center',
    paddingTop: '10%'
  },
  logo: {
    fontSize: 32,
    color: '#fb6b36'
  },
  logoWidth: {
    fontWeight: 'bold'
  },
  registerTxt: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: '25%',
    marginBottom: '3%'
  }
});

export default LogIn;
