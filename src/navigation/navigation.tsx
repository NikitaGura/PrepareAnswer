import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CreateQuestionsScreen, MainScreenQuestions} from '../screens';
import {Colors} from '../utils';
import {RootStackParamList, ScreensName} from './navigation.type';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const defaultStackOption = {
  title: '',
  headerStyle: {backgroundColor: Colors.PrimaryBlue75},
  headerBackVisible: false,
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
