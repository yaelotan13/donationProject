import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Image } from 'react-native';

import { colors } from '../../utils/consts';

const Layout = ({ title, children, withLogo }) => {
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
      <View style={styles.topContainer}>
        {title && <Text style={styles.title}>{title}</Text>}
      </View>
      <ImageBackground
        source={require('../../assets/background.png')}
        style={styles.innerContainer}
      >
        {children}
      </ImageBackground>
      {/* <View style={styles.innerContainer}>
        {children}
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: colors.darkColor,
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
    position: 'absolute',
    height: '120%',
    top: '28%',
    zIndex: 1,
    alignItems: 'center',
    paddingTop: '10%',
    flex: 1,
    resizeMode: 'cover',
  },
});

export default Layout;
