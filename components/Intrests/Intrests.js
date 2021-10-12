import React, { useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import Layout from '../Layout/Layout';
import Intrest from './Intrest';
import ContinueButton from '../Layout/ContinueButton';
import Padding from '../Layout/Padding';
import { intrests } from '../../utils/consts';
import { toggle } from '../../utils/funcs';

const Intrests = ({ navigation }) => {
  const [selectdIntrests, setSelectedIntrests] = useState([]);

  const handleIntrestPressed = (intrest) => {
    toggle(intrest, selectdIntrests, setSelectedIntrests);
  };

  const handleContinuePress = () => {
    navigation.navigate('בחירת עמותות')
  };

  return (
    <Layout title="בחירת תחומי עניין" enableScroll>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {intrests.map((intrest) => (
            <Intrest
              key={intrest}
              title={intrest}
              handlePress={() => handleIntrestPressed(intrest)}
              selected={selectdIntrests.indexOf(intrest) !== -1}
            />
          ))}
          <ContinueButton handleContinuePress={handleContinuePress} />
        </ScrollView>
        <Padding />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 3,
  },
  contentContainer: {
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    flex: 1,
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: '10%',
  }
});

export default Intrests;
