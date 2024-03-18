import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {AddQuestionStore} from '../stores';

enum ScreensName {
  MainScreenQuestions = 'MainScreenQuestions',
  CreateQuestions = 'CreateQuestions',
  Modal = 'Modal',
  CheckingQuestions = 'CheckingQuestions',
  EditQuestions = 'EditQuestions',
  EditQuestion = 'EditQuestion',
  CreateQuestion = 'CreateQuestion',
}

type RootStackParamList = {
  MainScreenQuestions: undefined;
  CreateQuestions: undefined;
  Modal: undefined;
  CheckingQuestions: undefined;
  EditQuestions: undefined;
  EditQuestion: undefined;
  CreateQuestion: {addQuestionStore: AddQuestionStore};
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

type EditQuestionsNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreensName.CheckingQuestions
>;

type EditQuestionNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreensName.EditQuestion
>;

type CreateQuestionNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreensName.CreateQuestion
>;

// for useRoute
type CheckingQuestionsRouteProps = RouteProp<
  RootStackParamList,
  ScreensName.CheckingQuestions
>;

type EditQuestionsRouteProps = RouteProp<
  RootStackParamList,
  ScreensName.EditQuestions
>;

type EditQuestionRouteProps = RouteProp<
  RootStackParamList,
  ScreensName.EditQuestion
>;

type CreateQuestionRouteProps = RouteProp<
  RootStackParamList,
  ScreensName.CreateQuestion
>;

export {ScreensName};
export type {
  RootStackParamList,
  CreateQuestionsNavigationProp,
  MainScreenQuestionsNavigationProp,
  ModalNavigationProp,
  CheckingQuestionsNavigationProp,
  CheckingQuestionsRouteProps,
  EditQuestionsNavigationProp,
  EditQuestionsRouteProps,
  EditQuestionNavigationProp,
  EditQuestionRouteProps,
  CreateQuestionNavigationProp,
  CreateQuestionRouteProps,
};
