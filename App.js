import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LogIn from './components/Login/LogIn';
import Welcome from './components/Welcome/Welcome';
import Intrests from './components/Intrests/Intrests';
import Associations from './components/Associations/Associations';
import AssociationInfo from './components/Associations/AssociationInfo';
import SplitDonationSummary from './components/SplitDonation/SplitDonationSummary';
import ChoseAmount from "./components/SplitDonation/ChoseAmount";
import Payment from './components/Payment/Payment';
import ThankYou from './components/ThankYou/ThankYou';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="כניסה" component={LogIn} />
        <Stack.Screen name="ברוך הבא" component={Welcome} />
        <Stack.Screen name="תחומי עניין" component={Intrests} />
        <Stack.Screen name="בחירת עמותות" component={Associations} />
        <Stack.Screen name="מידע נוסף" component={AssociationInfo} />
        <Stack.Screen name="חלוקת התרומות" component={SplitDonationSummary} />
        <Stack.Screen name="בחירת סכום לתרומה" component={ChoseAmount} />
        <Stack.Screen name="בחירת אמצעי תשלום" component={Payment} />
        <Stack.Screen name="תודה רבה" component={ThankYou} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
