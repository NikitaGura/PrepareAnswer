import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

enum ScreensName {
  MainScreenQuestions = 'MainScreenQuestions',
  CreateQuestions = 'CreateQuestions',
  Modal = 'Modal',
}

type RootStackParamList = {
  MainScreenQuestions: undefined;
  CreateQuestions: undefined;
  Modal: undefined;
};

type MainScreenQuestionsNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreensName.MainScreenQuestions
>;

type CreateQuestionsNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreensName.CreateQuestions
>;

type ModalNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreensName.Modal
>;

export {ScreensName};
export type {
  RootStackParamList,
  CreateQuestionsNavigationProp,
  MainScreenQuestionsNavigationProp,
  ModalNavigationProp,
};
