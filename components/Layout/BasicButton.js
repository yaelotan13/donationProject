import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

import { colors } from '../../utils/consts';

const BasicButton = ({ text, onPress, largeBtn, containerStyle }) => {
  return (
    <View style={[styles.container, largeBtn && styles.largeBtn, containerStyle]}>
      <Button
        style={styles.btn}
        title={text}
        color="white"
        onPress={onPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '5%',
    backgroundColor: colors.primaryColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 40,
    paddingVertical: 6,
    borderRadius: 50,
  },
  largeBtn: {
    paddingHorizontal: 60,
    width: '80%',
  },
  btn: {
    fontSize: 18,
  }
});

export default BasicButton;
