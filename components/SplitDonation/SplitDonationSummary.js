import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Image, Text } from "react-native";

import { colors } from "../../utils/consts";
import ContinueButton from '../Layout/ContinueButton';
import DonationPie from '../Layout/DonationPie';
import Layout from "../Layout/Layout";

const SplitDonationSummary = ({ navigation }) => {
  return (
    <Layout title="חלוקת התרומות">
      <DonationPie />
      <ContinueButton
        handleContinuePress={() => {
          navigation.navigate("בחירת סכום לתרומה");
        }}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
});

export default SplitDonationSummary;
