import React from "react";
import { StyleSheet, View, Text, ImageBackground, Image } from "react-native";


const DonationPie = ({ }) => {
  return (
    <Image
      source={require("../../assets/donation-circle.png")}
      style={styles.circle}
    />
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 200,
    height: 200,
  }
});

export default DonationPie;