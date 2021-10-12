import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

import { colors } from '../../utils/consts';

const Logo = () => {
  return (
    <Text>
      <Text style={[styles.logo, styles.logoWidth]}>GIVE </Text>
      <View style={styles.pointContainer}>
        <Image source={require('../../assets/logo-point.png')} style={styles.point} />
      </View>
      <Text style={styles.logo}>AND</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  logo: {
    fontSize: 32,
    color: colors.primary
  },
  pointContainer: {
    justifyContent: 'center',
    height: 34,
    paddingRight: 3,
  },
  point: {
    width: 8,
    height: 8,
  },
  logoWidth: {
    fontWeight: 'bold'
  },
});

export default Logo;
