import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

import BasicButton from '../Layout/BasicButton';

const LogWith = ({ name, onPress }) => {
  return <BasicButton text={`כניסה עם ${name}`} onPress={onPress} largeBtn />;
};

export default LogWith;
