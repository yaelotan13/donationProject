import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

import { colors } from '../../utils/consts';

const Intrest = ({ title, handlePress, selected }) => {
  return (
    <View style={[styles.btnContainer, selected && styles.selected]}>
      <Button
        color={selected ? 'white': 'black'}
        title={title}
        onPress={handlePress}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: colors.lightSecondary,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 50,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  selected: {
    backgroundColor: colors.primaryColor
  }
});

export default Intrest;
