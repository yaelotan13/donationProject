import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Image, Text } from "react-native";

import ContinueButton from "../Layout/ContinueButton";
import Layout from "../Layout/Layout";

const ThankYou = ({ navigation }) => {
  return (
    <Layout withLogo>
      <Text style={styles.title}>תודה רבה על תרומתך!</Text>
      <Text style={styles.desc}>
        אנו בGIVE END מזמינים אותך להצטרף לאלפי התורמים בקהילה שלנו ולהמשיך
        לתרום מדי חודש כפי יכולתך לעמותות ולתחומים שקרובים לליבך
      </Text>
      <ContinueButton
        handleContinuePress={() => {
          navigation.navigate("בחירת אמצעי תשלום");
        }}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
  },
  desc: {
    marginTop: 20,
    width: 300,
    fontSize: 16,
    textAlign: 'right'
  },
});

export default ThankYou;
