import React from 'react';
import { StyleSheet, View } from 'react-native';

import BasicButton from './BasicButton';

const ContinueButton = ({ handleContinuePress }) => {
  return (
    <View style={styles.buttonContainer}>
      <BasicButton text="המשך" onPress={handleContinuePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: '10%',
  }
});

export default ContinueButton;
