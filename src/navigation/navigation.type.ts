import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CheckingQuestionStore} from '../stores';
import {RouteProp} from '@react-navigation/native';

enum ScreensName {
  MainScreenQuestions = 'MainScreenQuestions',
  CreateQuestions = 'CreateQuestions',
  Modal = 'Modal',
  CheckingQuestions = 'CheckingQuestions',
}

type RootStackParamList = {
  MainScreenQuestions: undefined;
  CreateQuestions: undefined;
  Modal: undefined;
  CheckingQuestions: {checkingQuestionStore: CheckingQuestionStore};
};
// for useNavigation
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

type CheckingQuestionsNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreensName.CheckingQuestions
>;

// for useRoute

type CheckingQuestionsRouteProps = RouteProp<
  RootStackParamList,
  ScreensName.CheckingQuestions
>;

export {ScreensName};
export type {
  RootStackParamList,
  CreateQuestionsNavigationProp,
  MainScreenQuestionsNavigationProp,
  ModalNavigationProp,
  CheckingQuestionsNavigationProp,
  CheckingQuestionsRouteProps,
};
