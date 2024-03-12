import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  CheckingQuestionsScreen,
  CreateQuestionsScreen,
  EditQuestionsScreen,
  MainScreenQuestions,
  ModalSelectedQuestionsScreen,
} from '../screens';
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
        <RootStack.Group>
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
          <RootStack.Screen
            name={ScreensName.Modal}
            component={ModalSelectedQuestionsScreen}
            options={{header: () => null, presentation: 'transparentModal'}}
          />
          <RootStack.Screen
            name={ScreensName.CheckingQuestions}
            component={CheckingQuestionsScreen}
            options={defaultStackOption}
          />
          <RootStack.Screen
            name={ScreensName.EditQuestions}
            component={EditQuestionsScreen}
            options={defaultStackOption}
          />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
