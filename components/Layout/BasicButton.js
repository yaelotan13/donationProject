import React from 'react';
import { StyleSheet, Pressable, Text, Image, View } from 'react-native';

import { colors } from '../../utils/consts';

const BasicButton = ({ text, onPress, largeBtn, containerStyle, icon }) => {
  return (
    <Pressable style={[styles.btn, largeBtn && styles.largeBtn, containerStyle]} onPress={onPress}>
      <View style={styles.contentContainer}>
        {icon && (
          <View style={styles.iconContainer}>
            <Image source={icon} style={styles.icon} />
          </View>
        )}
        <View style={styles.textContainer}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginTop: '5%',
    backgroundColor: colors.primaryColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 40,
    paddingVertical: 18,
    borderRadius: 50,
  },
  largeBtn: {
    paddingHorizontal: 60,
    width: '80%',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textContainer: {
    paddingHorizontal: 28,
  },
  text: {
    fontSize: 18,
    color: 'white'
  },
  iconContainer: {
  },
  icon: {
    width: 18,
    height: 18,
  }
});

export default BasicButton;
