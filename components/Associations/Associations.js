import React, { useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import Layout from '../Layout/Layout';
import SearchBar from '../Layout/SearchBar';
import Association from './Association';
import ContinueButton from '../Layout/ContinueButton';
import Padding from '../Layout/Padding';
import { associations } from '../../utils/consts';
import { toggle } from '../../utils/funcs';

const Associations = () => {
  const [search, setSearch] = useState('');
  const [selectedAssociations, setSelectedAssociations] = useState([]);

  const handlePress = (name) => {
    toggle(name, selectedAssociations, setSelectedAssociations);
  };

  return (
    <Layout title="בחירת עמותות" enableScroll>
      <SearchBar search={search} setSearch={setSearch} />
      <ScrollView style={styles.container}>
        {associations.map((association => (
          <Association
            key={association.name}
            name={association.name}
            description={association.description}
            onPress={handlePress}
            selected={selectedAssociations.indexOf(association.name) !== -1}
          />
        )))}
        <ContinueButton handleContinuePress={() => {}} />
      </ScrollView>
      <Padding height="30%" />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: '10%',
  }
});

export default Associations;