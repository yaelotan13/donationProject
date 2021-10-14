import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Image, Text } from 'react-native';

import { colors } from '../../utils/consts';
import Layout from '../Layout/Layout';

const AssociationInfo = ({ name, description, selected, onPress }) => {
  const [activeSections, setActiveSections] = useState([]);

  return (
    <Layout title="בחירת עמותות">
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>עמדה</Text>
            <Text style={styles.subTitle}>חולי דמנציה, אלצהיימר ומחלות דומות</Text>
            <Image style={styles.activeDonationBtn} source={require('../../assets/green-rectangle.png')} />
          </View>
          <Image style={styles.associationImage} source={require('../../assets/white-circle.png')} />
        </View>
        <View style={styles.connectionsContainer}>
          <Image style={styles.connectionIcon} source={require('../../assets/oragne-circle.png')} />
          <Image style={styles.connectionIcon} source={require('../../assets/oragne-circle.png')} />
          <Image style={styles.connectionIcon} source={require('../../assets/oragne-circle.png')} />
        </View>
        <Text style={styles.efficiencyTxt}>מדד היעילות של משרד המשפטים</Text>
        <Image style={styles.efficiencyBarIcon} source={require('../../assets/efficiency-bar.png')} />
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  contentContainer: {
    alignItems: 'flex-end',
    marginRight: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subTitle: {
    fontSize: 16,
  },
  associationImage: {
    width: 90,
    height: 90
  },
  activeDonationBtn: {
    width: 120,
    height: 30,
    marginTop: 12,
  },
  connectionsContainer: {
    flexDirection: 'row',
    marginTop: 40,
    width: '65%',
    alignSelf: 'center',
    justifyContent: 'space-between'
  },
  connectionIcon: {
    width: 55,
    height: 55
  },
  efficiencyTxt: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  efficiencyBarIcon: {
    marginTop: 8,
    alignSelf: 'center',
    height: 26,
    width: 260
  },
});

export default AssociationInfo;
