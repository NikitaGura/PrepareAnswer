import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {CreateQuestionsScreen, MainScreenQuestions} from '../screens';
import {Colors} from '../utils';
import {RootStackParamList, ScreensName} from './navigation.type';

const RootStack = createStackNavigator<RootStackParamList>();

const defaultStackOption = {
  title: '',
  headerStyle: {backgroundColor: Colors.PrimaryBlue75},
  headerBackVisible: false,
  gestureEnabled: true,
  headerLeft: () => null,
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name={ScreensName.MainScreenQuestions}
          component={MainScreenQuestions}
          options={defaultStackOption}
        />
        <RootStack.Screen
          name={ScreensName.CreateQuestions}
          component={CreateQuestionsScreen}
          options={defaultStackOption}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
