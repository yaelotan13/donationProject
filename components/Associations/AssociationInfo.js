import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  TouchableWithoutFeedback,
} from "react-native";

import SingleDropDown from '../Layout/SingleDropDown';
import ContinueButton from '../Layout/ContinueButton';
import Layout from '../Layout/Layout';

const AssociationInfo = ({ name, description, selected, onPress, navigation }) => {
  const [aboutIsOpen, setAboutIsOpen] = useState(false);
  const [infoIsOpen, setInfoIsOpen] = useState(false);
  const [papersIsOpen, setPapersIsOpen] = useState(false);

  return (
    <Layout title="בחירת עמותות">
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>עמדה</Text>
            <Text style={styles.subTitle}>
              חולי דמנציה, אלצהיימר ומחלות דומות
            </Text>
            <Image
              style={styles.activeDonationBtn}
              source={require("../../assets/active-donation.png")}
            />
          </View>
          <Image
            style={styles.associationImage}
            source={require("../../assets/amda.png")}
          />
        </View>
        <View style={styles.connectionsContainer}>
          <Image
            style={styles.connectionIcon}
            source={require("../../assets/link.png")}
          />
          <Image
            style={styles.connectionIcon}
            source={require("../../assets/phone.png")}
          />
          <Image
            style={styles.connectionIcon}
            source={require("../../assets/web-link.png")}
          />
        </View>
        <Text style={styles.efficiencyTxt}>מדד היעילות של משרד המשפטים</Text>
        <View style={styles.progressBarContainer}>
          <Image
            style={styles.efficiencyBarIcon}
            source={require("../../assets/progress-bar-green.png")}
          />
          <View style={styles.progressBarTxtContainer}>
            <Text style={styles.progressBarText}>גבוה מאוד</Text>
            <Text style={styles.percentageTxt}>93.3</Text>
          </View>
        </View>
        <View style={styles.moreInfoContainer}>
          <SingleDropDown
            isOpen={aboutIsOpen}
            setIsOpen={setAboutIsOpen}
            title="אודות העמותה"
            description="עם עליית תוחלת החיים הזדקנות האוכלוסייה הפכה את הדמנציה למהפכה.
              הדמנציה היא תסמונת של ליקויים בתפקודים האינטלקטואלים, ירידה
              בזיכרון, הפרעות בהתנהגות וכשל בתפקוד היומיומי. מחלת האלצהיימר היא
              השכיחה ביותר מבין המחלות הדמנטיות, היא חשוכת מרפא וסופנית."
          />
          <SingleDropDown
            isOpen={infoIsOpen}
            setIsOpen={setInfoIsOpen}
            title="מידע שקוף"
            description="עם עליית תוחלת החיים הזדקנות האוכלוסייה הפכה את הדמנציה למהפכה.
              הדמנציה היא תסמונת של ליקויים בתפקודים האינטלקטואלים, ירידה
              בזיכרון, הפרעות בהתנהגות וכשל בתפקוד היומיומי. מחלת האלצהיימר היא
              השכיחה ביותר מבין המחלות הדמנטיות, היא חשוכת מרפא וסופנית."
          />
          <SingleDropDown
            isOpen={papersIsOpen}
            setIsOpen={setPapersIsOpen}
            title="מסמכים ואישורים"
            description="עם עליית תוחלת החיים הזדקנות האוכלוסייה הפכה את הדמנציה למהפכה.
              הדמנציה היא תסמונת של ליקויים בתפקודים האינטלקטואלים, ירידה
              בזיכרון, הפרעות בהתנהגות וכשל בתפקוד היומיומי. מחלת האלצהיימר היא
              השכיחה ביותר מבין המחלות הדמנטיות, היא חשוכת מרפא וסופנית."
          />
        </View>
        <ContinueButton
          handleContinuePress={() => {
            navigation.navigate("חלוקת התרומות");
          }}
        />
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {},
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  contentContainer: {
    alignItems: "flex-end",
    marginRight: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  subTitle: {
    fontSize: 16,
  },
  associationImage: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  activeDonationBtn: {
    width: 140,
    height: 35,
    marginTop: 12,
  },
  connectionsContainer: {
    flexDirection: "row",
    marginTop: 40,
    width: "65%",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  connectionIcon: {
    width: 50,
    height: 50,
  },
  efficiencyTxt: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
  },
  efficiencyBarIcon: {
    marginTop: 8,
    alignSelf: "center",
    height: 20,
    width: 300,
  },
  progressBarContainer: {
    position: "relative",
  },
  progressBarTxtContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row-reverse",
    position: "absolute",
    left: 110,
    top: 8,
  },
  progressBarText: {
    marginLeft: 25,
    color: "white",
    fontSize: 16,
  },
  percentageTxt: {
    color: "white",
    fontSize: 16,
  },
  moreInfoContainer: {
    marginTop: 30,
    paddingRight: 8,
    width: "95%",
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
  },
  infoTxtContainer: {
    marginTop: 8,
  },
  infoTxt: {
    textAlign: "right",
    fontSize: 16,
    lineHeight: 20,
  },
});

export default AssociationInfo;
