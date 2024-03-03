import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';

enum ScreensName {
  MainScreenQuestions = 'MainScreenQuestions',
  CreateQuestions = 'CreateQuestions',
}

type RootStackParamList = {
  MainScreenQuestions: undefined;
  CreateQuestions: undefined;
};

type MainScreenQuestionsNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreensName.MainScreenQuestions
>;

type CreateQuestionsNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreensName.CreateQuestions
>;

export {ScreensName};
export type {
  RootStackParamList,
  CreateQuestionsNavigationProp,
  MainScreenQuestionsNavigationProp,
};
