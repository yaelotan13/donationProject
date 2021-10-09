import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Layout = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer} />
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
});

export default Layout;
