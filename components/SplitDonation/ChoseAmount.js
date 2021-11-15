import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Image, Text } from "react-native";

import { colors } from "../../utils/consts";
import ContinueButton from "../Layout/ContinueButton";
import Layout from "../Layout/Layout";

const ChoseAmount = ({ navigation }) => {
  return (
    <Layout title="בחירת סכום לתרומה">
      <Image source={require("../../assets/white-ellipsis.png")} style={styles.ellipsis} />
      <ContinueButton
        handleContinuePress={() => {
          navigation.navigate("בחירת אמצעי תשלום");
        }}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  ellipsis: {
    width: 150,
    height: 70
  }
});

export default ChoseAmount;
