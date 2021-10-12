import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Image } from 'react-native';

import { colors } from '../../utils/consts';

const Layout = ({ title, children, withLogo, enableScroll }) => {
  return (
    <View style={styles.container}>
      <View>
        {withLogo && (
          <Image
            style={styles.logo}
            source={require('../../assets/logo.png')}
          />
        )}
      </View>
      <View style={styles.titleContainer}>
        {title && <Text style={styles.title}>{title}</Text>}
      </View>
      <ImageBackground
        source={require('../../assets/background.png')}
        style={[styles.innerContainer, !withLogo && styles.smallerInnerContainer, enableScroll && styles.enableScroll]}
      >
        {children}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: colors.dark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    resizeMode: 'contain',
    height: 150,
    width: 250,
    marginTop: '8%',
    zIndex: 0,
  },
  titleContainer: {
    flex: 1,
    marginTop: '10%'
  },
  title: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20
  },
  smallerInnerContainer: {
    top: '18%',
    flex: 1,
    height: '250%',
  },
  innerContainer: {
    width: '100%',
    position: 'absolute',
    height: '160%',
    top: '28%',
    alignItems: 'center',
    paddingTop: '10%',
    flex: 1
  },
  enableScroll: {
    height: 'auto'
  }
});

export default Layout;
