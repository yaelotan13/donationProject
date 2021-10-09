import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

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
    backgroundColor: '#fb6b36',
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
