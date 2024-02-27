import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainScreenQuestions} from '../screens';
import {Colors} from '../utils';

type RootStackParamList = {
  MainScreenQuestions: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="MainScreenQuestions"
          component={MainScreenQuestions}
          options={{
            title: '',
            headerStyle: {backgroundColor: Colors.PrimaryBlue75},
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
