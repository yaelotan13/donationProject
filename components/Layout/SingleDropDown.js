import React from "react";
import { StyleSheet, View, TouchableWithoutFeedback, Image, Text } from "react-native";

const SingleDropDown = ({ isOpen, setIsOpen, title, description }) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        style={styles.aboutContainer}
        onPress={() => {
          setIsOpen(!isOpen);
        }}
      >
        <View style={styles.aboutWithArrowContainer}>
          <Image
            style={styles.downArrow}
            source={
              isOpen
                ? require("../../assets/down-arrow.png")
                : require("../../assets/up-arrow.png")
            }
          />
          <Text style={styles.aboutTitleTxt}>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
      <Text style={{ ...styles.infoTxt, display: isOpen ? "flex" : "none" }}>
        {description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  aboutWithArrowContainer: {
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  downArrow: {
    width: 12,
    height: 12,
  },
  aboutTitleTxt: {
    marginRight: 8,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  infoTxt: {
    textAlign: "right",
    fontSize: 16,
    lineHeight: 20,
  },
});

export default SingleDropDown;
