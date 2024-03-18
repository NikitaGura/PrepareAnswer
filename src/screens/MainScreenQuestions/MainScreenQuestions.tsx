import {StyleSheet, View} from 'react-native';
import {PlusButton, ScreenTitle, ScreenWrapper} from '../../components';
import {Dictionary, sharedValues} from '../../utils';
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
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: sharedValues.paddingHorizontalScreen,
  },
});

export default observer(MainScreenQuestions);
