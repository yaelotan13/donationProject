import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { colors } from '../../utils/consts';

const Layout = ({ title, children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        { title && <Text style={styles.title}>{title}</Text>}
      </View>
      <View style={styles.innerContainer}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: colors.darkColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    color: colors.secondaryColor,
    fontWeight: 'bold',
    fontSize: 20
  },
  innerContainer: {
    width: '100%',
    flex: 3,
    backgroundColor: colors.secondaryColor,
    alignItems: 'center',
    paddingTop: '10%'
  },
});

export default Layout;
