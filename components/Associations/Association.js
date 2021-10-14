import React from 'react';
import { StyleSheet, View, Image, Text, Pressable } from 'react-native';

import { colors } from '../../utils/consts';

const circle = require('../../assets/circle.png');
const selectedCircle = require('../../assets/selected-circle.png');

const Association = ({ name, description, selected, onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => {onPress(name)}}>
        <Image source={selected ? selectedCircle : circle} style={styles.circle} />
      </Pressable>
      <View style={styles.contentContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '95%',
    marginTop: '8%',
    borderBottomWidth: 2,
    paddingBottom: '8%',
    paddingHorizontal: '3%',
    borderBottomColor: colors.lightGrey,
    flexDirection: 'row-reverse',
    alignItems: 'center'
  },
  contentContainer: {
    marginRight: '5%',
    alignItems: 'flex-end',
    color: colors.text,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 16,
  },
  circle: {
    width: 40,
    height: 40,
  }
});

export default Association;
