import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Logo = () => {
  return (
    <Text>
      <Text style={[styles.logo, styles.logoWidth]}>GIVE </Text>
      <Text style={styles.logo}>AND</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  logo: {
    fontSize: 32,
    color: '#fb6b36'
  },
  logoWidth: {
    fontWeight: 'bold'
  },
});

export default Logo;
