import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {EditQuestionStore, EditQuestionsStore} from '../stores';
import {RouteProp} from '@react-navigation/native';

enum ScreensName {
  MainScreenQuestions = 'MainScreenQuestions',
  CreateQuestions = 'CreateQuestions',
  Modal = 'Modal',
  CheckingQuestions = 'CheckingQuestions',
  EditQuestions = 'EditQuestions',
  EditQuestion = 'EditQuestion',
}

type RootStackParamList = {
  MainScreenQuestions: undefined;
  CreateQuestions: undefined;
  Modal: undefined;
  CheckingQuestions: undefined;
  EditQuestions: {
    editQuestionsStore: EditQuestionsStore;
  };
  EditQuestion: {
    editQuestionStore: EditQuestionStore;
  };
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
};
