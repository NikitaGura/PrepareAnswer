import {StyleSheet, View} from 'react-native';
import {
  ModalPopup,
  PlusButton,
  ScreenTitle,
  ScreenWrapper,
} from '../../components';
import {Dictionary} from '../../utils';
import PopupSelectedQuestion from './PopupSelectedQuestion';
import {observer} from 'mobx-react-lite';
import {useNavigation} from '@react-navigation/native';
import {MainScreenQuestionsNavigationProp, ScreensName} from '../../navigation';
import ListQuestions from './ListQuestions';

const MainScreenQuestions = () => {
  const navigation = useNavigation<MainScreenQuestionsNavigationProp>();

  const onPressPlusButton = () => {
    navigation.push(ScreensName.CreateQuestions);
  };

  return (
    <ScreenWrapper>
      <View style={styles.headerContainer}>
        <ScreenTitle title={Dictionary.titleMainScreenQuestions} />
        <PlusButton onPress={onPressPlusButton} />
      </View>
      <ListQuestions />
      <ModalPopup>
        <PopupSelectedQuestion />
      </ModalPopup>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

export default observer(MainScreenQuestions);
