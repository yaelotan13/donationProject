import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Image, Text } from "react-native";

import { colors } from "../../utils/consts";
import ContinueButton from "../Layout/ContinueButton";
import BasicButton from '../Layout/BasicButton';
import Layout from "../Layout/Layout";

const Payment = ({ navigation }) => {
  const handleClick = () => {
    navigation.navigate("תודה רבה");
  };

  return (
    <Layout title="בחירת אמצעי תשלום">
      <Text style={styles.descText}>בחר באחת מאפשרויות התשלום הבאות:</Text>
      <BasicButton
        text="הוספת כרטיס אשראי"
        onPress={handleClick}
        largeBtn
        icon={require("../../assets/credit-card.png")}
      />
      <BasicButton
        text="תשלום דרך Bit"
        onPress={handleClick}
        largeBtn
        icon={require("../../assets/bit.png")}
      />
      <ContinueButton handleContinuePress={handleClick} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  descText: {
    fontSize: 16
  }
});

export default Payment;
