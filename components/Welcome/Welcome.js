import React from 'react';
import { StyleSheet, Text } from 'react-native';

import Layout from '../Layout/Layout';
import Logo from '../Layout/Logo';
import BasicButton from '../Layout/BasicButton';

const Welcome = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('תחומי עניין')
  };

  return (
    <Layout withLogo>
      <Text style={styles.helloTxt}>שלום ערן!</Text>
      <Text style={styles.welcomeTxtContainer}>
        <Text style={styles.welcomeTxt}>ברוך הבא ל- </Text>
        <Logo />
      </Text>
      <Text style={styles.descTxt}>לתרום בקצב שלך ובראש שקט</Text>
      <BasicButton text="התחל" onPress={handlePress} containerStyle={{ marginTop: '25%' }} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  helloTxt: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  welcomeTxtContainer: {
    marginTop: '5%'
  },
  welcomeTxt: {
    fontSize: 32,
  },
  descTxt: {
    fontSize: 22,
  }
});

export default Welcome;
