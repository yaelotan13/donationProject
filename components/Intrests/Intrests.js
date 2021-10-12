import React, { useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import Layout from '../Layout/Layout';
import Intrest from './Intrest';
import BasicButton from '../Layout/BasicButton';
import { intrests } from '../../utils/consts';

const Intrests = ({ navigation }) => {
  const [selectdIntrests, setSelectedIntrests] = useState([]);

  const handleIntrestPressed = (intrest) => {
    const intrests = [ ...selectdIntrests ];
    const curIntrestIndex = selectdIntrests.indexOf(intrest);

    // add intrest to selected intrests
    if (curIntrestIndex === -1) {
      intrests.push(intrest);
    } else {
      // remove intrest from selected
      intrests.splice(curIntrestIndex, 1);
    }

    setSelectedIntrests(intrests);
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
          <View style={styles.buttonContainer}>
            <BasicButton text="המשך" onPress={handleContinuePress} />
          </View>
        </ScrollView>
        <View style={{height: '20%'}} />
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
