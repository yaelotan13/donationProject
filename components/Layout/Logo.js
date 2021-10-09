import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { colors } from '../../utils/consts';

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
    color: colors.primaryColor
  },
  logoWidth: {
    fontWeight: 'bold'
  },
});

export default Logo;
