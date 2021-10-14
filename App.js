import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LogIn from './components/Login/LogIn';
import Welcome from './components/Welcome/Welcome';
import Intrests from './components/Intrests/Intrests';
import Associations from './components/Associations/Associations';
import AssociationInfo from './components/Associations/AssociationInfo';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
