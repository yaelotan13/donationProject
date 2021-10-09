import React from 'react';
import { StyleSheet, View, Button, Alert } from 'react-native';

const LogWith = (props) => {
  const { name } = props;

  return (
    <View style={styles.container}>
      <Button
        style={styles.btn}
        title={`כניסה עם ${name}`}
        color="white"
        onPress={() => Alert.alert(` נכנסת עם ${name}`)}
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
    paddingHorizontal: 60,
    paddingVertical: 6,
    borderRadius: 50,
    width: '80%',
  },
  btn: {
    fontSize: 18,
  }
});

export default LogWith;
